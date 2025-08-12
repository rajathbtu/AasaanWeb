# Aasaan (Services Marketplace) — Landing Website

A static, responsive marketing site for Aasaan — a services marketplace for India. Built with vanilla HTML/CSS/JS.

## Live URL
- Production: https://aasaanapp.in/ (update if different)

## Tech Stack
- HTML5, CSS3, JavaScript (no framework)
- Google Fonts (Inter)

## Project Structure
- `index.html` — Main landing page
- `styles.css` — Global styles
- `script.js` — Interactions (nav toggle, reveal-on-scroll, forms, scroll restore)
- `assets/screens/` — App screen images used in hero and tour
- `privacy.html`, `terms.html`, `security.html` — Legal pages
- `robots.txt`, `sitemap.xml` — SEO crawl and indexing
- `PRD/` — Product specs (ignored in robots and .gitignore)

## Run Locally
```bash
# from project root
python3 -m http.server 5500
# open http://localhost:5500
```

## Deploy
- Any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages
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
- Replace `og:image` with a real 1200×630 PNG hosted on your domain
- Update Play/App Store links in `index.html` when available

## Images (screens)
- Put exported screens in `assets/screens/`
- Suggested size: ~900×1950 (portrait); SVG or PNG
- Filenames must match those referenced in `index.html`

## Editing tips
- Device preview sizing is controlled by `.device` and `.hero-device` in `styles.css`
- Screenshots are non-interactive and have rounded corners

## License
Proprietary — All rights reserved.

## Contact
hello@aasaanapp.in | Noida, India
