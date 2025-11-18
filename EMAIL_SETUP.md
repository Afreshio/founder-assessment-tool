# Email Setup Guide

This guide will help you configure email sending for the Scalability Diagnostic PDF reports.

## Option 1: Resend (Recommended - Easiest)

Resend is the easiest option and works great with Vercel/Netlify.

### Step 1: Install Resend

```bash
npm install resend
```

### Step 2: Get Your API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `re_`)

### Step 3: Add Domain (Optional but Recommended)

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `afresh.io`)
3. Add the DNS records Resend provides to your domain registrar
4. Wait for verification (usually a few minutes)

### Step 4: Set Environment Variable

**For Vercel:**
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add: `RESEND_API_KEY` = `your_api_key_here`
4. Redeploy

**For Netlify:**
1. Go to your Netlify site dashboard
2. Site settings → Environment variables
3. Add: `RESEND_API_KEY` = `your_api_key_here`
4. Redeploy

**For Local Development:**
Create a `.env.local` file in the project root:
```
RESEND_API_KEY=your_api_key_here
```

### Step 5: Update the API Endpoint

Uncomment and configure the Resend code in `/api/send-report.ts` (see instructions below).

---

## Option 2: SendGrid

### Step 1: Install SendGrid

```bash
npm install @sendgrid/mail
```

### Step 2: Get Your API Key

1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up (free tier: 100 emails/day)
3. Go to Settings → API Keys
4. Create a new API key with "Mail Send" permissions
5. Copy the key

### Step 3: Set Environment Variable

Add `SENDGRID_API_KEY` to your environment variables (same process as Resend above).

### Step 4: Update the API Endpoint

Uncomment and configure the SendGrid code in `/api/send-report.ts`.

---

## Option 3: Gmail SMTP (Simple but Less Secure)

If you want to use your Gmail account:

### Step 1: Install Nodemailer

```bash
npm install nodemailer
```

### Step 2: Enable App Password

1. Go to your Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Generate new app password
4. Copy the 16-character password

### Step 3: Set Environment Variables

Add to your environment:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Step 4: Update API Endpoint

You'll need to add Nodemailer code (see example in API file comments).

---

## Quick Setup Instructions

1. **Choose Resend** (easiest option)
2. **Install**: `npm install resend`
3. **Get API key** from resend.com
4. **Add environment variable** `RESEND_API_KEY` in Vercel/Netlify
5. **Update `/api/send-report.ts`** - uncomment the Resend code and change:
   - `from: 'ScaleOS <noreply@yourdomain.com>'` → Use your verified domain email
   - Or use `from: 'onboarding@resend.dev'` for testing (Resend's test domain)

---

## Testing

After setup, test by:
1. Completing the diagnostic
2. Entering your email
3. Checking your inbox for the PDF report
4. Check Vercel/Netlify function logs for any errors

---

## Troubleshooting

- **Emails not sending**: Check function logs in Vercel/Netlify dashboard
- **API key errors**: Make sure environment variable is set correctly
- **Domain errors**: Use Resend's test domain (`onboarding@resend.dev`) for testing
- **PDF too large**: PDFs are typically 50-200KB, should be fine for most services

