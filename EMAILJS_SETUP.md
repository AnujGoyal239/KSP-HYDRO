# EmailJS Integration Guide

## Overview
This project uses EmailJS to handle form submissions for two separate forms:
1. **Contact Form** - General inquiries and contact requests
2. **Careers Form** - Job applications and career-related submissions

## Environment Variables Setup

### Required Variables
Add these to your `.env` file (create one if it doesn't exist):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_CONTACT_ID=your_contact_template_id
VITE_EMAILJS_TEMPLATE_CAREERS_ID=your_careers_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Getting Your EmailJS Credentials

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Get Service ID**
   - Navigate to "Email Services" in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Copy the **Service ID**
   - Paste it as `VITE_EMAILJS_SERVICE_ID`

3. **Get Public Key**
   - Go to "Account" → "General"
   - Find your **Public Key**
   - Paste it as `VITE_EMAILJS_PUBLIC_KEY`

4. **Create Template for Contact Form**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Name it "Contact Form Template"
   - Use these template variables:
     ```
     From: {{from_name}}
     Email: {{reply_to}}
     Phone: {{phone}}
     Company: {{company}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Copy the **Template ID**
   - Paste it as `VITE_EMAILJS_TEMPLATE_CONTACT_ID`

5. **Create Template for Careers Form**
   - Create another new template
   - Name it "Careers Application Template"
   - Use these template variables:
     ```
     From: {{from_name}}
     Email: {{reply_to}}
     Phone: {{phone}}
     Area of Interest: {{interest}}
     
     Application Message:
     {{message}}
     ```
   - Copy the **Template ID**
   - Paste it as `VITE_EMAILJS_TEMPLATE_CAREERS_ID`

## Implementation Details

### File Structure
```
src/
├── lib/
│   └── emailjs.js          # EmailJS configuration and utilities
├── pages/
│   ├── Contact/
│   │   └── components/
│   │       └── ContactFormSection.jsx    # Uses TEMPLATES.CONTACT
│   └── Careers/
│       └── components/
│           └── HowToApplySection.jsx     # Uses TEMPLATES.CAREERS
```

### How It Works

#### 1. EmailJS Library (`src/lib/emailjs.js`)
- Handles initialization
- Provides `sendEmail()` function
- Includes validation and sanitization
- Implements rate limiting (1 minute cooldown)
- Exports `TEMPLATES` object with both template IDs

#### 2. Contact Form (`ContactFormSection.jsx`)
```javascript
import { sendEmail, TEMPLATES } from '@/lib/emailjs';

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  const result = await sendEmail(data, TEMPLATES.CONTACT);
  // Handle success/error
};
```

#### 3. Careers Form (`HowToApplySection.jsx`)
```javascript
import { sendEmail, TEMPLATES } from '@/lib/emailjs';

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  const result = await sendEmail(data, TEMPLATES.CAREERS);
  // Handle success/error
};
```

## Form Field Mapping

### Contact Form Fields
| Form Field Name | EmailJS Variable | Description |
|----------------|------------------|-------------|
| `user_name` | `from_name` | Full name |
| `user_email` | `reply_to` | Email address |
| `user_phone` | `phone` | Phone number |
| `company` | `company` | Company name |
| `subject` | `subject` | Message subject |
| `message` | `message` | Message content |

### Careers Form Fields
| Form Field Name | EmailJS Variable | Description |
|----------------|------------------|-------------|
| `user_name` | `from_name` | Full name |
| `user_email` | `reply_to` | Email address |
| `user_phone` | `phone` | Phone number |
| `interest` | `interest` | Area of interest |
| `message` | `message` | Application message |

## Security Features

1. **Input Sanitization**
   - Strips HTML tags
   - Removes JavaScript protocols
   - Removes event handlers

2. **Validation**
   - Uses Zod schema validation
   - Validates email format
   - Checks field lengths
   - Validates character patterns

3. **Rate Limiting**
   - 1-minute cooldown between submissions
   - Stored in localStorage
   - Prevents spam

4. **Error Handling**
   - Generic error messages for users
   - Detailed logging in development mode
   - Graceful fallbacks

## Testing

### Development Testing
1. Ensure `.env` file has all required variables
2. Start the development server: `npm run dev`
3. Navigate to Contact or Careers page
4. Fill out and submit the form
5. Check your EmailJS dashboard for received emails

### Production Checklist
- [ ] All environment variables set in production
- [ ] EmailJS templates created and configured
- [ ] Email service connected and verified
- [ ] Test submissions working
- [ ] Rate limiting functioning
- [ ] Error messages displaying correctly

## Troubleshooting

### "Service unavailable" Error
- Check that all environment variables are set
- Verify variable names match exactly (including `VITE_` prefix)
- Restart development server after adding variables

### "Template ID missing" Error
- Ensure both template IDs are in `.env`
- Check that templates exist in EmailJS dashboard
- Verify template IDs are copied correctly

### Emails Not Sending
- Check EmailJS dashboard for quota limits
- Verify email service is connected
- Check browser console for detailed errors
- Ensure public key is initialized correctly

### Rate Limit Issues
- Clear localStorage to reset rate limit
- Adjust `RATE_LIMIT_DURATION` in `emailjs.js` if needed

## Support

For EmailJS-specific issues:
- Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

For project-specific issues:
- Check the console for error messages
- Review the `emailjs.js` file for configuration
- Ensure form field names match the expected schema
