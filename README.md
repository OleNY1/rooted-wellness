# Rooted Wellness Coaching

One-page marketing site for Rooted Wellness Coaching — digital programs, 1:1 coaching, nutrition plans, and free consult booking.

**Live site:** [https://rootedwf.com](https://rootedwf.com)

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Static output lands in `dist/`. Pushing to `main` deploys automatically to GitHub Pages.

### Custom domain (GoDaddy → GitHub Pages)

DNS at GoDaddy should point to GitHub Pages:

**A records** for `@` (rootedwf.com):

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME** for `www` → `oleny1.github.io`

After DNS propagates, GitHub Pages will serve the site at https://rootedwf.com and can enforce HTTPS.

## Edit content without touching layout

All offers, prices, payment URLs, booking link, contact info, and most copy live in:

**`src/config.js`**

See **`CLIENT-GUIDE.md`** for step-by-step update instructions.
