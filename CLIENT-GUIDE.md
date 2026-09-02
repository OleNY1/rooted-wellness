# Rooted Wellness — Client Update Guide

This site is a single-page marketing site. Most day-to-day edits happen in **one file**.

## The file to edit

Open:

```
src/config.js
```

Change values there, save, then rebuild/redeploy (or refresh the local preview).

---

## Common updates

### Offers (name, description, price)

Find the `offers` array. Each offer looks like:

```js
{
  id: 'digital-programs',
  name: 'Digital Fitness Programs',
  description: '…',
  price: '$79',
  priceNote: 'one-time',
  ctaLabel: 'Get this program',
  paymentUrl: '', // paste Stripe/PayPal link here
}
```

- Add a new offer: copy an existing object and paste it into the array.
- Remove an offer: delete that object (watch commas).
- Reorder offers: move objects up/down in the array.

### Payment links (Stripe Payment Link or PayPal)

1. Create a payment link in Stripe or PayPal.
2. Paste the full URL into that offer’s `paymentUrl`.
3. Leave `paymentUrl` as `''` to keep the **Coming soon** button state.

### Booking link (Calendly or similar)

Set:

```js
bookingUrl: 'https://calendly.com/your-link',
```

All “Book a Free Consult” buttons use this value. If empty, the site shows a placeholder that points people to the contact form.

### Contact email, phone, social

Update `contact.email`, `contact.phone`, and `social.instagram` / `facebook` / `tiktok`.

Footer social links only appear when those URLs are filled in. Empty values stay hidden so visitors never see broken links.

### Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io).
2. Paste the endpoint into `contact.formEndpoint`.

If `formEndpoint` is empty, the form falls back to opening the visitor’s email app (`mailto:`).

### About copy & testimonials & FAQ

Edit `about`, `testimonials`, and `faqs` in the same config file. Keep quote/name/detail structure for testimonials so layout stays intact.

### Downloadable guides

Program PDFs/DOCX files live in `public/downloads/`. Links are listed in the `downloads` array in `src/config.js`. Replace a file in that folder (same filename) or update the `href` / `filename` fields when you swap guides.

---

## Swapping in real photos / branding

Marked image slots in the page:

| Slot | Where | How to replace |
|------|--------|----------------|
| Hero background video | `public/hero.mp4` | Replace this file with a new muted looping MP4 (keep the same filename, or update the `<source>` in `index.html`). |
| About portrait | `.photo-slot--portrait` | Replace the empty slot with an `<img src="…" alt="…">` (keep descriptive alt text). |

Brand colors live as CSS variables at the top of `src/styles.css` (`:root`). Update those when final brand colors arrive. Fonts are loaded in `index.html` (Fraunces + Figtree).

---

## Local preview & deploy

```bash
npm install
npm run dev      # local preview
npm run build    # outputs static files to dist/
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

Optional analytics: add your GA / Plausible snippet in `index.html` before `</head>` when ready.
