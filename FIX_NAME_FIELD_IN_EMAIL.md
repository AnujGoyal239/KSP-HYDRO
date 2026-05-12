# 🔧 Fix: Name Field Not Showing in Emails

## Problem
When submitting forms, the name field is not appearing in the received emails.

## Root Cause
The EmailJS template is not using the correct variable name for the sender's name.

## Solution: Update Your EmailJS Templates

### Step 1: Go to EmailJS Dashboard
1. Visit: [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Click on **"Email Templates"** in the left sidebar

### Step 2: Fix Contact Form Template

1. Find your **Contact Form Template** (ID: `template_kdx3d2t`)
2. Click **"Edit"** on the template
3. Update the template content to use `{{from_name}}`:

```
Subject: New Contact Form Submission from {{from_name}}

---

Contact Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from the KSP Hydro Contact Form
Reply to: {{reply_to}}
```

4. Click **"Save"**

### Step 3: Fix Careers Form Template

1. Find your **Careers Application Template** (ID: `template_p9advyb`)
2. Click **"Edit"** on the template
3. Update the template content:

```
Subject: New Job Application from {{from_name}}

---

Applicant Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Area of Interest: {{interest}}

Application Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This application was submitted via KSP Hydro Careers Page
Reply to: {{reply_to}}
```

4. Click **"Save"**

## Variable Mapping Reference

The form sends these variables to EmailJS:

| Form Field | EmailJS Variable | Usage in Template |
|-----------|------------------|-------------------|
| Full Name | `{{from_name}}` | Sender's name |
| Email | `{{reply_to}}` | Sender's email |
| Phone | `{{phone}}` | Phone number |
| Company | `{{company}}` | Company name (Contact form only) |
| Subject | `{{subject}}` | Message subject (Contact form only) |
| Area of Interest | `{{interest}}` | Job interest (Careers form only) |
| Message | `{{message}}` | Main message content |

## Important Notes

### ✅ Correct Variable Names
- Use `{{from_name}}` for the sender's name
- Use `{{reply_to}}` for the sender's email
- Use `{{phone}}` for phone number

### ❌ Common Mistakes
- Don't use `{{name}}` - use `{{from_name}}`
- Don't use `{{email}}` - use `{{reply_to}}`
- Don't use `{{user_name}}` - use `{{from_name}}`

## Testing After Fix

1. **Save both templates** in EmailJS dashboard
2. **Go to your website** (no need to restart server)
3. **Fill out the Contact form** and submit
4. **Check your email** - the name should now appear
5. **Test the Careers form** as well

## Debugging Tips

### Check Console Logs
When you submit a form, check the browser console for:
```
📋 Sanitized data being sent: {
  from_name: "John Doe",
  reply_to: "john@example.com",
  phone: "+91 1234567890",
  ...
}
```

This confirms the data is being sent correctly from the website.

### Check EmailJS Dashboard
1. Go to **"History"** in EmailJS dashboard
2. Find your recent email
3. Click on it to see the data that was sent
4. Verify `from_name` has a value

### Test Email Template
1. In EmailJS template editor
2. Click **"Test it"** button
3. Fill in test values for all variables
4. Send test email
5. Check if name appears in received email

## Example: Complete Contact Template

Here's a complete, tested template for the Contact form:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #333; margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">From:</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">{{reply_to}}</div>
            </div>
            <div class="field">
                <div class="label">Phone:</div>
                <div class="value">{{phone}}</div>
            </div>
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">{{company}}</div>
            </div>
            <div class="field">
                <div class="label">Subject:</div>
                <div class="value">{{subject}}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">{{message}}</div>
            </div>
        </div>
    </div>
</body>
</html>
```

## Still Not Working?

If the name still doesn't appear after updating templates:

1. **Clear browser cache** and reload the page
2. **Check EmailJS quota** - free tier has 200 emails/month
3. **Verify template is saved** - sometimes changes don't save
4. **Check spam folder** - emails might be filtered
5. **Contact EmailJS support** if issue persists

## Summary

✅ Update both templates to use `{{from_name}}`  
✅ Save templates in EmailJS dashboard  
✅ Test both forms  
✅ Check received emails  

The name field should now appear correctly in all emails! 🎉
