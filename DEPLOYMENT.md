# Deploying to Your Custom Domain

This guide will help you deploy the Founder Assessment Tool to your own domain.

## Step-by-Step Guide

### Option 1: Vercel (Recommended - Free SSL & Easy Setup)

#### Step 1: Deploy to Vercel

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"

#### Step 2: Add Your Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project
   - Click on the "Settings" tab
   - Click "Domains" in the sidebar
   - Enter your domain (e.g., `founderassessment.com` or `assessment.yourdomain.com`)
   - Click "Add"

2. **Configure DNS Records**:
   
   Vercel will show you the DNS records you need to add. You have two options:

   **Option A: Root Domain (e.g., yourdomain.com)**
   - Add an **A record**:
     - Name: `@` (or leave blank)
     - Value: `76.76.21.21`
     - TTL: Auto
   
   - Add a **CNAME record** for www:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
     - TTL: Auto

   **Option B: Subdomain (e.g., assessment.yourdomain.com)**
   - Add a **CNAME record**:
     - Name: `assessment` (or your subdomain name)
     - Value: `cname.vercel-dns.com`
     - TTL: Auto

3. **Update DNS at Your Domain Registrar**:
   - Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Go to DNS Management
   - Add the records shown above
   - Wait 5-60 minutes for DNS propagation

4. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates (HTTPS)
   - This happens automatically once DNS is configured correctly

### Option 2: Netlify (Also Free SSL)

#### Step 1: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Step 2: Add Your Custom Domain

1. **In Netlify Dashboard**:
   - Go to your site
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS**:
   
   Netlify will provide DNS records. For a subdomain:
   - Add a **CNAME record**:
     - Name: `assessment` (or your subdomain)
     - Value: `your-site-name.netlify.app`
     - TTL: Auto

   For root domain, Netlify will provide specific A records.

3. **SSL**: Netlify automatically provides SSL certificates via Let's Encrypt

### Option 3: Cloudflare Pages (Free + Fast CDN)

1. **Push to GitHub**

2. **Deploy to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Go to "Pages" → "Create a project"
   - Connect GitHub repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

3. **Add Custom Domain**:
   - In your Pages project, go to "Custom domains"
   - Add your domain
   - Cloudflare will automatically configure DNS if your domain is on Cloudflare
   - SSL is automatic

### Option 4: Traditional Web Hosting (cPanel, etc.)

If you have traditional web hosting:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload the entire contents of the `dist` folder to your web root
   - Usually via FTP/SFTP to `/public_html` or `/www`

3. **Configure domain**:
   - Point your domain's A record to your hosting IP
   - Or use your hosting provider's nameservers

## DNS Record Types Explained

- **A Record**: Points a domain to an IP address (for root domains)
- **CNAME Record**: Points a domain to another domain (for subdomains)
- **TTL**: Time to Live - how long DNS changes take to propagate (usually 300-3600 seconds)

## Common Domain Registrars

- **GoDaddy**: DNS Management → DNS → Add Record
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: DNS → Custom Records
- **Cloudflare**: DNS → Records
- **AWS Route 53**: Hosted Zones → Create Record

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full propagation
- Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation
- Clear your browser cache
- Try incognito/private browsing mode

### SSL Certificate Issues?
- Wait for DNS to fully propagate first
- Check that DNS records are correct
- Some providers take up to 24 hours to issue SSL

### Subdomain vs Root Domain?
- **Subdomain** (assessment.yourdomain.com): Easier, use CNAME
- **Root domain** (yourdomain.com): Requires A record or ALIAS/ANAME

## Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Deployed to hosting service (Vercel/Netlify/Cloudflare)
- [ ] Added custom domain in hosting dashboard
- [ ] Added DNS records at domain registrar
- [ ] Waited for DNS propagation (5-60 minutes)
- [ ] Verified SSL certificate is active
- [ ] Tested site on custom domain

## Need Help?

If you share your domain registrar and preferred hosting service, I can provide more specific instructions!

