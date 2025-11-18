# Quick Debug Steps

## Step 1: Check Browser Console

1. Open your site
2. Press **F12** (or right-click → Inspect)
3. Go to **Console** tab
4. Complete the diagnostic and enter email
5. Look for messages starting with `[Email]`

**What to look for:**
- `[Email] Sending report to...` ✅ Good - request is being sent
- `[Email] Response status: 200` ✅ Success!
- `[Email] Response status: 500` ❌ Error - check the response body
- `[Email] Response body: {...}` - This shows the actual error

## Step 2: Check Network Tab

1. In Developer Tools, go to **Network** tab
2. Complete the diagnostic
3. Find the request to `/api/send-report`
4. Click on it
5. Check:
   - **Status**: Should be 200 (green) or 500 (red)
   - **Response**: Shows the error message

## Step 3: Check Server Logs

### Vercel:
1. Go to https://vercel.com → Your Project
2. Click **Functions** tab
3. Find `/api/send-report`
4. Click to see logs
5. Look for `[API]` messages

### Netlify:
1. Go to https://app.netlify.com → Your Site
2. Click **Functions** → **send-report**
3. View logs

## Common Errors & Fixes

### Error: "RESEND_API_KEY is missing"
**Fix**: Add environment variable and redeploy

### Error: "Invalid Resend API key format"
**Fix**: Make sure key starts with `re_` and has no spaces

### Error: "Failed to send email via Resend"
**Check**: 
- Is API key correct?
- Is it active in Resend dashboard?
- Check server logs for detailed error

### Error: HTTP 500
**Check server logs** - they'll show the exact error

## What Error Are You Seeing?

Please share:
1. Browser console error (copy the `[Email]` messages)
2. Network tab response (copy the response body)
3. Server logs (copy the `[API]` messages)

This will help identify the exact issue!

