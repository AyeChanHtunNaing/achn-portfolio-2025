# ACHN Portfolio

Personal portfolio website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

Live site: [https://peacechan.dev/](https://peacechan.dev/)

The current UI is a dark, responsive portfolio layout with:
- desktop sticky left sidebar navigation
- mobile top navigation with menu drawer
- section-based homepage (`About`, `Resume`, `Projects`, `Writing`, `Contact`)
- custom cartoon avatar in the About card

## Design Inspiration

This portfolio rebrand is inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/), especially the dark visual style and desktop sidebar + content layout approach.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- React Router
- shadcn/ui + Radix UI
- TanStack Query (base app setup)

## Getting Started

```bash
npm install
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - build production bundle into `dist/`
- `npm run build:dev` - build using development mode
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  components/
    layout/        # Header / Footer
    sections/      # Homepage sections
    ui/            # shadcn/ui primitives
  constants/       # Navigation constants
  data/            # Projects and articles data
  hooks/           # Reusable hooks
  lib/             # Utilities
  pages/           # Route pages (home, projects, articles)
public/
  avatars/         # Avatar assets (current cartoon avatar lives here)
```

## Customize Content

### Text and Section Content

- Home hero: `src/components/sections/HomeHero.tsx`
- About section: `src/components/sections/About.tsx`
- Resume section: `src/components/sections/Resume.tsx`
- Contact section: `src/components/sections/Contact.tsx`

### Projects and Articles Data

- Projects list: `src/data/projects.ts`
- Articles list: `src/data/blog-posts.ts`

### Navigation / Layout

- Header: `src/components/layout/Header.tsx`
- Footer: `src/components/layout/Footer.tsx`
- Nav items: `src/constants/navigation.ts`

### Avatar Image

Current avatar image used in the About section:
- `public/avatars/avatar-cartoon.png`

If you replace this file with a new image using the same name, the site will update automatically.

## Styling Notes

- Global theme and shared utility classes live in `src/index.css`
- The site uses a dark palette with emerald accents
- The About avatar card is responsive and scales across mobile/tablet/desktop

## Build and Deploy (Static Hosting / Nginx)

This app builds to static files in `dist/`.

### 1. Build

```bash
npm install
npm run build
```

### 2. Upload `dist/` to your server

```bash
scp -r dist/* root@your_droplet_ip:/var/www/html/
```

### 3. Configure Nginx (SPA routing)

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 4. Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Optional HTTPS (Certbot)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Notes

- `public/` stores static assets (logo, avatar, profile images, robots.txt)
- Because this is a client-side routed app, Nginx must fall back to `index.html`
