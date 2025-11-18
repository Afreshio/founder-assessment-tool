# API Key Troubleshooting

## Common Issues After Changing API Key

### Issue 1: "RESEND_API_KEY is missing"
**Cause**: Environment variable not set or site not redeployed

**Fix**:
1. Go to Vercel/Netlify → Environment Variables
2. Make sure `RESEND_API_KEY` exists
3. **Redeploy** (this is critical!)

### Issue 2: "Invalid Resend API key format"
**Cause**: API key doesn't start with `re_` or has extra spaces

**Fix**:
1. Check your API key starts with `re_`
2. Remove any spaces before/after the key
3. Copy the full key from Resend dashboard
4. Update environment variable and redeploy

### Issue 3: API Key Not Working
**Check**:
1. ✅ Is the key active in Resend dashboard?
2. ✅ Did you copy the FULL key (not truncated)?
3. ✅ Did you redeploy after changing it?
4. ✅ Are there any spaces in the key?

## Step-by-Step Fix

### 1. Get Your API Key
- Go to https://resend.com/api-keys
- Copy the FULL key (should start with `re_` and be ~40+ characters)

### 2. Update Environment Variable
**Vercel**:
- Settings → Environment Variables
- Edit `RESEND_API_KEY`
- Paste the new key (no spaces!)
- Save

**Netlify**:
- Site settings → Environment variables
- Edit `RESEND_API_KEY`
- Paste the new key
- Save

### 3. REDEPLOY (Critical!)
**Vercel**:
- Go to Deployments tab
- Click "..." on latest deployment → "Redeploy"
- OR push a new commit

**Netlify**:
- Go to Deployments tab
- Click "Trigger deploy" → "Deploy site"

### 4. Test
- Complete the diagnostic
- Check browser console for errors
- Check server logs for `[API]` messages

## Validation Checklist

Your API key should:
- ✅ Start with `re_`
- ✅ Be 40+ characters long
- ✅ Have no spaces before/after
- ✅ Be active in Resend dashboard
- ✅ Be set in environment variables
- ✅ Site redeployed after setting it

## Still Not Working?

Check server logs for:
- `[API] Resend API key present: Yes/No`
- `[API] Resend API key length: X`
- `[API] Resend error details: {...}`

These logs will tell you exactly what's wrong!

