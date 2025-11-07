# Founder Fit Quiz

A web application that helps founders determine their founder type through a 6-question quiz.

## Features

- 6-question quiz covering key founder traits
- Scoring system: 0-2 points per question
- Four founder types:
  - **Visionary**: Higher W (Wonder) and I (Invention) scores
  - **Catalyst**: Higher I (Invention) and G (Galvanizing) scores
  - **Architect**: Higher D (Discernment) and T (Tenacity) scores
  - **Operator**: Higher G (Galvanizing) and T (Tenacity) scores
- Beautiful, modern UI with smooth animations
- Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Quiz Questions

1. **W (Wonder)**: "I am comfortable sitting and contemplating the meaning of things longer than most others are."
2. **I (Invention)**: "People say I can't stop innovating or proposing new ideas."
3. **D (Discernment)**: "I am much more capable than most people in using my gut instincts when there is little data or information available."
4. **G (Galvanizing)**: "I have a gift for rallying people around a plan or idea, and inspiring them to take action."
5. **E (Enablement)**: "I find helping people to be more deeply fulfilling than others do."
6. **T (Tenacity)**: "I get more satisfaction and fulfillment than most people from seeing a project through to its finish."

## Scoring

Each question is scored on a 0-2 point scale:
- "Oh no, definitely not" = 0 points
- "Sometimes/somewhat" = 1 point
- "Oh yeah, definitely" = 2 points

## Technology Stack

- React 18
- Vite
- CSS3 (with modern features)

## Deployment

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, or use the web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or visit [vercel.com](https://vercel.com) and:
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite and deploy

3. Your app will be live at a URL like: `https://your-project.vercel.app`

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   npm run build
   netlify deploy --prod
   ```
   Or visit [netlify.com](https://netlify.com) and:
   - Sign up/login
   - Drag and drop your `dist` folder, or
   - Connect your Git repository for continuous deployment

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Build and Host Manually

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to any static hosting service:
   - AWS S3 + CloudFront
   - Google Cloud Storage
   - Azure Static Web Apps
   - Any web hosting service

### Using Your Custom Domain

For detailed instructions on connecting your custom domain, see [DEPLOYMENT.md](./DEPLOYMENT.md)

**Quick steps:**
1. Deploy to Vercel/Netlify/Cloudflare (see above)
2. Add your domain in the hosting dashboard
3. Update DNS records at your domain registrar
4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate will be automatically provisioned

## Future Enhancements

- Mobile app version (React Native)
- Share results functionality
- Detailed founder type descriptions
- Comparison with other founders

