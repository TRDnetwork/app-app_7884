# Bean & Brew — Deploy Instructions

## Deploy to Vercel

1. Push code to a GitHub repository
2. Log in to [Vercel](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Use default settings:
   - Framework: Auto-detected (Vite)
   - Root directory: project root
   - Build command: `vite build`
   - Output directory: `dist`
5. Click "Deploy"

Site will be live at a `.vercel.app` URL. You can assign a custom domain later.

## Environment Variables

None required. This is a fully static site with no backend, API, or authentication.

## First-time setup

None required. All content is hard-coded or managed via an external CMS.
Contact form submissions log to browser console only — no serverless functions or database needed.