# Debugging Email Issues

## Step 1: Check Browser Console

1. Open your browser's Developer Tools (F12)
2. Go to the **Console** tab
3. Complete the diagnostic and enter your email
4. Look for log messages starting with `[Email]`

You should see:
- `[Email] Sending report to your@email.com...`
- `[Email] PDF size: X bytes, Base64 length: Y`
- `[Email] Response status: 200` (or error status)
- `[Email] Response body: {...}`

## Step 2: Check Network Tab

1. In Developer Tools, go to **Network** tab
2. Complete the diagnostic
3. Find the request to `/api/send-report`
4. Click on it to see:
   - **Request** (what was sent)
   - **Response** (what came back)
   - **Status code** (200 = success, 500 = error)

## Step 3: Check Server Logs

### If using Vercel:
1. Go to https://vercel.com → Your Project
2. Click on **Functions** tab
3. Find `/api/send-report`
4. Click to see logs
5. Look for `[API]` log messages

### If using Netlify:
1. Go to https://app.netlify.com → Your Site
2. Click **Functions** → **send-report**
3. View logs

## Common Error Messages

### "RESEND_API_KEY is missing"
**Fix**: Add the environment variable and redeploy

### "Failed to send email via Resend"
**Check**:
- Is your API key correct?
- Is it active in Resend dashboard?
- Check server logs for detailed error

### "Invalid API key"
**Fix**: 
- Get a new API key from Resend
- Make sure you copied the full key (starts with `re_`)
- Update environment variable and redeploy

### HTTP 500 Error
**Check server logs** for the specific error message

## Quick Test

After fixing, test again and check:
1. ✅ Browser console shows `[Email] Success response: {success: true}`
2. ✅ Network tab shows status 200
3. ✅ Server logs show "Email sent successfully via Resend"
4. ✅ Email arrives in inbox (check spam folder too)

## Still Not Working?

Share these details:
1. Browser console logs (copy all `[Email]` messages)
2. Network tab response (copy the response body)
3. Server logs (copy all `[API]` messages)

