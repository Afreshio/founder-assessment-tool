# Email Troubleshooting Checklist

## ✅ What I Just Fixed

1. ✅ Installed `resend` package
2. ✅ Enabled Resend code in `/api/send-report.ts`
3. ✅ Added error handling and logging

## 🔧 What You Need to Do

### Step 1: Add Environment Variable

**If deploying to Vercel:**
1. Go to https://vercel.com → Your Project
2. Settings → Environment Variables
3. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
4. **IMPORTANT**: Click "Redeploy" or push a new commit

**If deploying to Netlify:**
1. Go to https://app.netlify.com → Your Site
2. Site settings → Environment variables
3. Add new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
4. **IMPORTANT**: Redeploy your site

**For local testing:**
Create `.env.local` file in project root:
```
RESEND_API_KEY=re_your_key_here
```

### Step 2: Verify Your Resend API Key

1. Go to https://resend.com/api-keys
2. Make sure your API key is active
3. Copy the full key (it should start with `re_`)

### Step 3: Test It

1. Complete the diagnostic
2. Enter your email
3. Check your inbox
4. Check the browser console (F12) for `[Email]` logs
5. Check Vercel/Netlify function logs for errors

## 🐛 Common Issues

### Issue: "RESEND_API_KEY is missing"
**Solution**: Make sure you added the environment variable AND redeployed

### Issue: "Failed to send email via Resend"
**Check**:
- Is your API key correct?
- Is it active in Resend dashboard?
- Check function logs for detailed error message

### Issue: Emails go to spam
**Solution**: 
- Use a verified domain email instead of `onboarding@resend.dev`
- Add your domain in Resend dashboard
- Verify DNS records

### Issue: Still not working
**Debug steps**:
1. Open browser console (F12)
2. Look for `[Email]` log messages
3. Check Network tab → find `/api/send-report` request
4. Check the response - does it say `success: true`?
5. Check Vercel/Netlify function logs for server-side errors

## 📝 Quick Test

After setting up, test by:
1. Running the diagnostic
2. Checking browser console for logs like:
   ```
   [Email] Sending report to your@email.com...
   [Email] Response status: 200
   [Email] Success response: {success: true}
   ```

If you see errors, check the function logs in Vercel/Netlify dashboard.

