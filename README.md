# Bean & Brew Coffee Shop Landing Page

A warm, earthy, and inviting static landing page for a boutique coffee shop, built with modern web technologies and designed for performance, accessibility, and responsiveness.

## Features

- **Hero Section**: Shop name, tagline, and a "View Menu" button that smoothly scrolls to the menu.
- **About Section**: Two descriptive paragraphs with a placeholder image showcasing the shop's ambiance.
- **Menu Section**: Responsive 3×2 grid displaying six coffee items with name, description, and price.
- **Hours Section**: Clean table layout showing opening hours for weekdays and weekends.
- **Contact Section**: Functional form that logs submissions to the console (client-side only), alongside address, phone, and email display.
- **Footer**: Social media links (Instagram, Facebook, Twitter) and copyright notice.

## Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + React + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom warm earthy color palette
- **Fonts**: Fraunces (display), Space Grotesk (body) via Google Fonts
- **Build Tool**: Vite (fast dev server, optimized builds)
- **Deployment Ready**: Fully static — deployable on Vercel, Netlify, GitHub Pages, etc.

### Design System

- **Colors**: 
  - Background: `#F5F5DC` (Cream)
  - Text: `#2F4F2F` (Dark Green)
  - Accent: `#8B4513` (Saddle Brown), `#6F4E37` (Coffee Brown)
  - Surface: `#E8DCC5` (Light Beige)
- **Typography**:
  - Headings: **Fraunces**, 700 weight
  - Body: **Space Grotesk**, 500 weight
- **Layout**: Max-width container (1200px), generous vertical spacing, mobile-first responsive design.

## Setup & Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bean-and-brew.git
cd bean-and-brew

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This starts the Vite development server at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Generates optimized static assets in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the built assets locally to simulate production.

## Usage

- Clicking **"View Menu"** in the hero smoothly scrolls to the menu section.
- The **Contact Form** logs input (`name`, `email`, `message`) to the browser console on submission. No backend is required.
- Layout adapts to screen size:
  - Mobile: Stacked content
  - Desktop: Side-by-side layout for About and Contact sections

## Folder Structure

```
app_7884/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Hours.tsx
│   │   └── Menu.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Deployment

This is a **fully static site** with no backend, database, or authentication. It can be deployed to any static hosting provider:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

### Example: Deploy to Vercel

1. Push your code to a GitHub/GitLab repository.
2. Go to [vercel.com](https://vercel.com) and import the project.
3. Vercel will automatically detect it as a Vite app and configure the build settings.
4. Deploy with one click.

No additional configuration needed.

## Accessibility & SEO

- Semantic HTML structure
- Proper heading hierarchy
- Form labels and accessibility attributes
- Meta tags, Open Graph, and Twitter cards included
- Schema.org structured data (`CafeOrCoffeeShop`) for rich search results
- Responsive design for all devices

## License

This project is for educational and demonstration purposes. Use freely with attribution.