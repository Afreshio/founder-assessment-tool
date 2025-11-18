# Local Testing Guide

## Option 1: Using Vercel CLI (Recommended)

Vercel CLI lets you run serverless functions locally.

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Link Your Project (Optional)

```bash
vercel link
```

### Step 4: Add Environment Variable

Create `.env.local` file in project root:
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 5: Run Local Dev Server

```bash
vercel dev
```

This will:
- Start your Vite dev server (frontend)
- Run your API functions locally (`/api/send-report`)
- Use environment variables from `.env.local`

The app will be available at `http://localhost:3000` and API at `http://localhost:3000/api/send-report`

---

## Option 2: Using Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Link Your Project

```bash
netlify link
```

### Step 4: Add Environment Variable

Create `.env.local` file:
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 5: Run Local Dev Server

```bash
netlify dev
```

This will start both frontend and API functions locally.

---

## Option 3: Test in Production (Easiest)

If you just want to test quickly:

1. Add `RESEND_API_KEY` to Vercel/Netlify environment variables
2. Push your code or redeploy
3. Test on your live site

This is the fastest way to test if everything works.

---

## Quick Setup for Local Testing

1. **Create `.env.local`** file:
   ```
   RESEND_API_KEY=re_your_key_here
   ```

2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Run locally**:
   ```bash
   vercel dev
   ```

4. **Test**: Complete the diagnostic and check if emails send

---

## Troubleshooting Local Testing

- **API not found**: Make sure you're using `vercel dev` or `netlify dev`, not just `npm run dev`
- **Environment variable not working**: Make sure `.env.local` is in the project root
- **Port conflicts**: Vercel dev uses port 3000 by default, change with `vercel dev -p 3001`

