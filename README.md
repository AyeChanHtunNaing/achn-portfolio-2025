# ACHN Portfolio (Vite + React + TypeScript)

Personal portfolio site built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- React Router
- shadcn/ui + Radix UI
- TanStack Query (app shell setup)

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - production build to `dist/`
- `npm run build:dev` - build using development mode
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

```text
src/
  components/
    layout/       # shared page chrome (header/footer)
    sections/     # homepage and reusable content sections
    ui/           # shadcn/ui primitives
  constants/      # shared navigation config
  data/           # portfolio/article seed content
  hooks/          # reusable hooks
  lib/            # utilities
  pages/          # route pages
```

## Content Customization

- Update article list data in `src/data/blog-posts.ts`
- Update project cards in `src/data/projects.ts`
- Update social/contact info in:
  - `src/components/sections/About.tsx`
  - `src/components/layout/Footer.tsx`
- Update page copy/hero content in `src/components/sections/HomeHero.tsx`

## Build and Deploy (DigitalOcean + Nginx)

This is a static site build, so the production output is generated in `dist/`.

### 1. Build locally or on the server

```bash
npm install
npm run build
```

### 2. Copy `dist/` to the server

```bash
scp -r dist/* root@your_droplet_ip:/var/www/html/
```

### 3. Configure Nginx for SPA routing

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

### 5. (Optional) Enable HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Notes

- `public/` contains static assets (for example `profile.jpeg` and `robots.txt`)
- The app uses client-side routing, so `try_files ... /index.html` is required in Nginx
