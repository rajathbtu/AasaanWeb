# Aasaanly (Services Marketplace) — Landing Website

A static, responsive marketing site for Aasaanly — a services marketplace for India. Built with vanilla HTML/CSS/JS.

## Live URL
- Production: https://aasaanly.com/ (GitHub Pages, custom domain)

## Tech Stack
- HTML5, CSS3, JavaScript (no framework)
- Google Fonts (Inter)

## Project Structure
- `index.html` — Main landing page
- `assets/` — Landing page assets: `styles.css` (landing styles), `app.js` (interactions), `i18n.js` (EN/HI switching), `hi.js` (Hindi copy), brand icons
- `styles.css`, `script.js` — Styles and interactions for the legal pages only
- `privacy.html`, `terms.html`, `security.html` — Legal pages
- `robots.txt`, `sitemap.xml` — SEO crawl and indexing
- `CNAME` — GitHub Pages custom domain (`aasaanly.com`)
- `PRD/` — Product specs (ignored in robots and .gitignore)

## Run Locally
```bash
# from project root
python3 -m http.server 5500
# open http://localhost:5500
```

## Deploy
- GitHub Pages (branch: `main`, custom domain `aasaanly.com`) or any static host: Netlify, Vercel, Cloudflare Pages
- Ensure the final domain matches canonical and Open Graph URLs

## SEO (already implemented)
- Canonical and robots meta tags
- `robots.txt` (allows all; disallows `/PRD/`)
- `sitemap.xml` with key pages
- Open Graph + Twitter cards
- JSON‑LD: Organization, WebSite, MobileApplication, FAQPage, HowTo
- `hreflang` for `en-IN`
- Preload LCP hero image with correct MIME type

### To customize for production
- Replace domain in:
  - `<link rel="canonical">`, `og:url`, `twitter:site` (if applicable)
  - `sitemap.xml` and `robots.txt` sitemap URL
- Update Play/App Store links in `index.html` when available

## Editing tips
- Device preview sizing is controlled by `.device` and `.hero-device` in `assets/styles.css`
- Screenshots are non-interactive and have rounded corners

## License
Proprietary — All rights reserved.

## Contact
hello@aasaanly.com | Noida, India
