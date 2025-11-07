# Pushing Code to GitHub

Your code is ready to push! Follow these steps:

## Step 1: Create a GitHub Repository

1. **Go to GitHub**: [github.com](https://github.com)
2. **Sign in** (or create an account if you don't have one)
3. **Click the "+" icon** in the top right → "New repository"
4. **Repository settings**:
   - Repository name: `founder-assessment-tool` (or any name you like)
   - Description: "Assessment tool for founders to determine their founder type"
   - Visibility: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

### Option A: Using HTTPS (Easier)

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with the repository name you created

### Option B: Using SSH (More Secure)

If you have SSH keys set up:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Authenticate

- **HTTPS**: GitHub will prompt for your username and a Personal Access Token (not password)
  - Create token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
  - Select scopes: `repo` (full control)
  - Copy the token and use it as your password

- **SSH**: If you haven't set up SSH keys, use HTTPS instead

## Quick Commands Summary

Once you have your repository URL, run:

```bash
cd /Users/douglasstevens/Cursor
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Future Updates

After making changes to your code:

```bash
git add .
git commit -m "Description of changes"
git push
```

## Need Help?

If you share your GitHub username, I can provide the exact commands with your repository URL!

