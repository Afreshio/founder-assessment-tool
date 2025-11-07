# Deploying to afresh.io/quiz

The app is configured to run at the `/quiz` path on your domain.

## Configuration Changes Made

1. **Vite base path**: Set to `/quiz/` in `vite.config.js`
2. **React Router basename**: Set to `/quiz` in `src/main.jsx`
3. **Deployment configs**: Updated for Vercel and Netlify

## Deployment Options

### Option 1: Deploy as Subdirectory on Main Domain

If `afresh.io` is your main domain and you want the quiz at `afresh.io/quiz`:

**For Vercel:**
1. Deploy the project normally
2. In Vercel dashboard → Settings → Domains
3. Add your domain: `afresh.io`
4. The app will be available at `afresh.io/quiz` automatically

**For Netlify:**
1. Deploy the project
2. In Netlify dashboard → Domain settings
3. Add custom domain: `afresh.io`
4. The app will be available at `afresh.io/quiz`

### Option 2: Deploy to Subdomain

If you prefer a subdomain like `quiz.afresh.io`:
1. Change `base: '/quiz/'` to `base: '/'` in `vite.config.js`
2. Change `basename="/quiz"` to `basename="/"` in `src/main.jsx`
3. Deploy and add domain `quiz.afresh.io`

### Option 3: Deploy to Separate Directory on Existing Hosting

If you have existing hosting for afresh.io:
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to `/quiz/` directory on your server
3. Ensure your server is configured to serve the app from that directory

## Testing Locally

To test the `/quiz` path locally:
```bash
npm run dev
```

Then visit: `http://localhost:5173/quiz/`

## Routes

With the `/quiz` base path, your routes will be:
- Home: `afresh.io/quiz/` or `afresh.io/quiz`
- About: `afresh.io/quiz/about`
- Contact: `afresh.io/quiz/contact`

## Important Notes

- All internal links and navigation will automatically use the `/quiz` prefix
- Make sure your hosting provider supports serving from subdirectories
- The build output in `dist/` will have all assets correctly prefixed with `/quiz/`

