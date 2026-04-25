# GitHub Pages Deployment Setup

Your project is now configured for GitHub Pages deployment!

## Steps to Deploy:

1. **Push to GitHub**
   - Make sure your code is pushed to your GitHub repository
   - The workflow will trigger automatically on push to `main` or `master` branch

2. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Build and deployment":
     - Source: Select "Deploy from a branch"
     - Branch: Select `gh-pages` (the action will create this)
     - Folder: Select `/ (root)`
   - Click Save

3. **Wait for Deployment**
   - Go to Actions tab to see the workflow running
   - Once complete, your site will be live at: `https://<username>.github.io/TheWorkerZone-web/`

## Files Modified:

- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
- `vite.config.ts` - Added base path configuration for GitHub Pages

## Custom Domain (Optional):

If you want to use a custom domain (like `theworkingzone.com`):
- Update the `cname` field in `.github/workflows/deploy.yml`
- Configure your domain's DNS to point to GitHub Pages
- Add your custom domain in repository Settings → Pages

## Local Build:

To test the build locally:
```bash
bun run build
bun run preview
```
