import emailjs from '@emailjs/browser';
import { z } from 'zod';

// Environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Template IDs
export const TEMPLATES = {
  CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID,
  CAREERS: import.meta.env.VITE_EMAILJS_TEMPLATE_CAREERS_ID,
};

// Rate Limiting Config
const RATE_LIMIT_KEY = 'emailjs_last_sent';
const RATE_LIMIT_DURATION = 60 * 1000; // 1 minute cooldown

// Validation Schema
// We define a flexible schema that covers fields from both forms
const contactSchema = z.object({
  user_name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s\-.']+$/, "Name contains invalid characters"),

  user_email: z.string()
    .email("Please enter a valid email address"),

  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),

  // Optional fields
  user_phone: z.string()
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal('')),

  subject: z.string()
    .max(200, "Subject is too long")
    .optional()
    .or(z.literal('')),

  company: z.string()
    .max(100, "Company name is too long")
    .optional()
    .or(z.literal('')),

  interest: z.string()
    .max(100, "Area of interest is too long")
    .optional()
    .or(z.literal(''))
});

/**
 * Sanitize input to prevent XSS and injection
 * @param {string} str 
 * @returns {string}
 */
const sanitize = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

/**
 * Check if the user is rate limited
 * @returns {boolean}
 */
const checkRateLimit = () => {
  const lastSent = localStorage.getItem(RATE_LIMIT_KEY);
  if (lastSent) {
    const timeSinceLastSend = Date.now() - parseInt(lastSent, 10);
    if (timeSinceLastSend < RATE_LIMIT_DURATION) {
      return false;
    }
  }
  return true;
};

// Singleton initialization tracker
let isInitialized = false;

/**
 * Initialize EmailJS SDK
 */
export const initEmailJS = () => {
  if (isInitialized) return;

  if (!PUBLIC_KEY) {
    if (import.meta.env.DEV) console.warn("EmailJS Public Key is missing in .env");
    return;
  }

  try {
    emailjs.init(PUBLIC_KEY);
    isInitialized = true;
  } catch (error) {
    if (import.meta.env.DEV) console.error("EmailJS Init Failed:", error);
  }
};

/**
 * Send email securely
 * @param {Object} rawData - The form data
 * @param {string} templateId - The EmailJS Template ID (optional, defaults to CONTACT)
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendEmail = async (rawData, templateId) => {
  // 1. Configuration Check
  if (!SERVICE_ID || !PUBLIC_KEY) {
    console.error("EmailJS configuration missing");
    throw new Error("Service unavailable. Please contact support directly.");
  }

  // Determine template ID
  const finalTemplateId = templateId || TEMPLATES.CONTACT;
  if (!finalTemplateId) {
    console.error("Template ID missing");
    throw new Error("Service configuration error.");
  }

  // 2. Initialize
  initEmailJS();

  // 3. Rate Limiting
  if (!checkRateLimit()) {
    throw new Error("Please wait a minute before sending another message.");
  }

  // 4. Sanitization & Normalization
  // Map fields to consistent keys if needed, or rely on caller to match schema
  const name = sanitize(rawData.user_name || rawData.name);
  const email = (rawData.user_email || rawData.email || '').trim();
  const phone = sanitize(rawData.user_phone || rawData.phone || '');

  const sanitizedData = {
    // Primary keys (for validation)
    user_name: name,
    user_email: email,
    user_phone: phone,

    // Template keys (matched to EmailJS template requirements)
    from_name: name,      // Maps to Full Name
    reply_to: email,      // Maps to Email Address
    phone: phone,         // Maps to Phone Number

    // Other fields
    company: sanitize(rawData.company || ''),
    subject: sanitize(rawData.subject || ''),
    message: sanitize(rawData.message),
    interest: sanitize(rawData.interest || ''), // For career form
  };

  // 5. Validation
  const validation = contactSchema.safeParse(sanitizedData);

  if (!validation.success) {
    const firstError = validation.error.errors[0];
    throw new Error(firstError.message);
  }

  // 6. Send via EmailJS
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      finalTemplateId,
      sanitizedData
    );

    if (response.status === 200) {
      localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      return { success: true, message: "Message sent successfully!" };
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    // Log details only in DEV
    if (import.meta.env.DEV) {
      console.error("EmailJS Send Error:", error);
    }
    // Generic error for user
    throw new Error("Unable to send message. Please try again later.");
  }
};
