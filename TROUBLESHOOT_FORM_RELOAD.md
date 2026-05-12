# 🔧 Troubleshoot: Form Reloads on Submit

## Problem
When clicking the "Submit Application" button on the Careers form, the page reloads instead of sending the email.

## Changes Made to Fix

### 1. Enhanced Form Submit Handler
- Added `e.stopPropagation()` to prevent event bubbling
- Added explicit field validation before sending
- Better error handling with try-catch
- More detailed console logging

### 2. Form Element Updates
- Added `noValidate` attribute to prevent browser validation conflicts
- This allows our custom validation to run first

### 3. Improved Validation Schema
- Made phone validation more flexible
- Added better error messages
- Fixed optional field handling

### 4. Better Error Logging
- Console logs at each step of submission
- Shows exactly where the process fails
- Helps identify the root cause

## How to Debug

### Step 1: Open Browser Console
1. Press `F12` or right-click → "Inspect"
2. Go to the "Console" tab
3. Clear any existing messages

### Step 2: Fill Out the Form
Fill in all required fields:
- Full Name
- Email Address
- Phone Number
- Area of Interest
- Message

### Step 3: Click Submit and Watch Console

You should see these messages in order:

```
🚀 Form submission started
📝 Form data: {user_name: "...", user_email: "...", ...}
📧 Attempting to send email...
📧 Sending email with template: template_p9advyb
📋 Sanitized data being sent: {...}
✅ Validation passed
📤 Sending to EmailJS with data: {...}
📬 EmailJS Response: {status: 200, text: "OK"}
✅ Email result: {success: true, message: "..."}
✅ Form submission completed
```

### Step 4: Identify the Error

If the page reloads, check where the console logs stop:

#### Stops at "Form submission started"
**Problem**: Form handler not being called
**Solution**: Check if form has `onSubmit={handleSubmit}`

#### Stops at "Form data"
**Problem**: Missing required fields
**Solution**: Ensure all required fields are filled

#### Stops at "Attempting to send email"
**Problem**: EmailJS configuration issue
**Solution**: Check `.env` file has all credentials

#### Stops at "Validation passed"
**Problem**: EmailJS send error
**Solution**: Check EmailJS dashboard for errors

#### Shows "Validation failed"
**Problem**: Data doesn't match schema
**Solution**: Check console for which field failed validation

## Common Issues & Solutions

### Issue 1: "Name contains invalid characters"
**Cause**: Name has numbers or special characters
**Solution**: Use only letters, spaces, hyphens, apostrophes, and periods

### Issue 2: "Phone number is required"
**Cause**: Phone field is empty
**Solution**: Fill in the phone number field

### Issue 3: "Message must be at least 10 characters"
**Cause**: Message is too short
**Solution**: Write a longer message (minimum 10 characters)

### Issue 4: "Please enter a valid email address"
**Cause**: Email format is incorrect
**Solution**: Use format: name@domain.com

### Issue 5: "Please wait a minute before sending another message"
**Cause**: Rate limiting (1 minute cooldown)
**Solution**: Wait 60 seconds before trying again

### Issue 6: "Service unavailable"
**Cause**: Missing EmailJS credentials
**Solution**: Check `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=service_cpjpwx8
VITE_EMAILJS_TEMPLATE_CAREERS_ID=template_p9advyb
VITE_EMAILJS_PUBLIC_KEY=GwoVd1dcxDFqxs4x9
```

## Testing Checklist

- [ ] All `.env` variables are set correctly
- [ ] Dev server was restarted after changing `.env`
- [ ] Browser console is open to see logs
- [ ] All form fields are filled correctly
- [ ] No rate limit active (wait 1 minute between tests)
- [ ] EmailJS templates exist and are saved
- [ ] EmailJS service is connected

## Manual Test Steps

1. **Clear Rate Limit**
   ```javascript
   // Run in browser console
   localStorage.removeItem('emailjs_last_sent');
   ```

2. **Reload Page**
   - Press `Ctrl+Shift+R` (hard reload)

3. **Fill Form with Test Data**
   - Name: John Doe
   - Email: test@example.com
   - Phone: +91 1234567890
   - Interest: Engineering
   - Message: This is a test application message with more than 10 characters.

4. **Submit and Check Console**
   - Should see all success messages
   - Should see toast notification
   - Form should reset

5. **Check Email**
   - Go to your email inbox
   - Look for email from EmailJS
   - Verify all fields are present

## Still Having Issues?

### Check EmailJS Dashboard
1. Go to [EmailJS History](https://dashboard.emailjs.com/admin/history)
2. Look for recent attempts
3. Check if they show as "Sent" or "Failed"
4. Click on failed ones to see error details

### Check Browser Network Tab
1. Open DevTools → Network tab
2. Submit the form
3. Look for request to `api.emailjs.com`
4. Check the response status and body

### Verify Template Variables
Make sure your EmailJS template uses these variables:
- `{{from_name}}` - Sender's name
- `{{reply_to}}` - Sender's email
- `{{phone}}` - Phone number
- `{{interest}}` - Area of interest
- `{{message}}` - Application message

## Quick Fix Commands

### Clear All Browser Data for Site
```javascript
// Run in browser console
localStorage.clear();
sessionStorage.clear();
location.reload();
```

### Test EmailJS Directly
```javascript
// Run in browser console (after form is loaded)
const testData = {
  user_name: "Test User",
  user_email: "test@example.com",
  user_phone: "+91 1234567890",
  interest: "Engineering",
  message: "This is a test message with more than 10 characters."
};

// This will show you exactly what's being sent
console.log('Test data:', testData);
```

## Success Indicators

✅ Console shows all success messages  
✅ Toast notification appears  
✅ Form fields are cleared  
✅ Email received in inbox  
✅ All fields visible in email  

If all these are true, the form is working correctly! 🎉
