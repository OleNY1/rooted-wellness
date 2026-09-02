import { site } from './config.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function isConfiguredUrl(url) {
  return typeof url === 'string' && url.trim().length > 0;
}

function bookingHref() {
  return isConfiguredUrl(site.bookingUrl) ? site.bookingUrl.trim() : '#book';
}

function renderMeta() {
  const fullBrand = site.brandFull || site.brand;
  document.title = `${fullBrand} — Strength Training & Nutrition Coaching`;
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', site.metaDescription);
  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', fullBrand);
  const ogDesc = $('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', site.metaDescription);
  const ogSite = $('meta[property="og:site_name"]');
  if (ogSite) ogSite.setAttribute('content', fullBrand);
}

function renderCopy() {
  const tagline = $('[data-tagline]');
  if (tagline) tagline.textContent = site.tagline;

  const aboutHeading = $('[data-about-heading]');
  if (aboutHeading) aboutHeading.textContent = site.about.heading;

  const aboutBody = $('[data-about-body]');
  if (aboutBody) {
    aboutBody.innerHTML = site.about.body
      .trim()
      .split(/\n\n+/)
      .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
      .join('');
  }

  const credentials = $('[data-credentials]');
  if (credentials) {
    credentials.innerHTML = site.about.credentials
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join('');
  }

  $$('[data-booking-cta]').forEach((el) => {
    const href = bookingHref();
    el.setAttribute('href', href);
    if (isConfiguredUrl(site.bookingUrl)) {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    } else {
      el.removeAttribute('target');
      el.removeAttribute('rel');
    }
  });
}

function renderOffers() {
  const root = $('[data-offers]');
  if (!root) return;

  const intro = site.offersIntro;
  if (intro) {
    const eyebrow = $('[data-offers-eyebrow]');
    const heading = $('[data-offers-heading]');
    const lede = $('[data-offers-lede]');
    if (eyebrow) eyebrow.textContent = intro.eyebrow;
    if (heading) heading.textContent = intro.heading;
    if (lede) lede.textContent = intro.lede;
  }

  root.innerHTML = site.offers
    .map((offer) => {
      const ready = isConfiguredUrl(offer.paymentUrl);
      const featured = offer.featured ? ' offer-card--featured' : '';
      const badgeLabel = offer.badge || (offer.featured ? 'Most popular' : '');
      const includes =
        Array.isArray(offer.includes) && offer.includes.length
          ? `<ul class="offer-card__includes">${offer.includes
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join('')}</ul>`
          : '';
      const cta = ready
        ? `<a class="btn btn--primary" href="${escapeHtml(offer.paymentUrl.trim())}" target="_blank" rel="noopener noreferrer">${escapeHtml(offer.ctaLabel)}</a>`
        : `<button class="btn btn--primary btn--disabled" type="button" disabled aria-disabled="true">${escapeHtml(offer.ctaLabel)} <span class="coming-soon">Coming soon</span></button>`;

      return `
        <article class="offer-card${featured} reveal" id="${escapeHtml(offer.id)}">
          ${badgeLabel ? `<p class="offer-card__badge">${escapeHtml(badgeLabel)}</p>` : ''}
          <h3 class="offer-card__name">${escapeHtml(offer.name)}</h3>
          <p class="offer-card__desc">${escapeHtml(offer.description)}</p>
          ${includes}
          <p class="offer-card__price">
            <span class="offer-card__amount">${escapeHtml(offer.price)}</span>
            ${offer.priceNote ? `<span class="offer-card__note">${escapeHtml(offer.priceNote)}</span>` : ''}
          </p>
          <div class="offer-card__cta">${cta}</div>
        </article>
      `;
    })
    .join('');

  const note = $('[data-nutrition-note]');
  if (note && site.nutritionNote) {
    note.textContent = site.nutritionNote;
    note.hidden = false;
  }

  const downloads = $('[data-downloads]');
  if (downloads) {
    const files = Array.isArray(site.downloads) ? site.downloads : [];
    if (!files.length) {
      downloads.hidden = true;
      downloads.innerHTML = '';
    } else {
      downloads.hidden = false;
      downloads.innerHTML = `
        <p class="offers__downloads-label">Download program guides</p>
        <ul class="offers__downloads-list">
          ${files
            .map(
              (file) => `
            <li>
              <a class="offers__download-link" href="${escapeHtml(file.href)}" download="${escapeHtml(file.filename || '')}">
                <span class="offers__download-title">${escapeHtml(file.label)}</span>
                ${file.description ? `<span class="offers__download-desc">${escapeHtml(file.description)}</span>` : ''}
              </a>
            </li>
          `,
            )
            .join('')}
        </ul>
      `;
    }
  }
}

function renderTestimonials() {
  const root = $('[data-testimonials]');
  if (!root) return;

  root.innerHTML = site.testimonials
    .map(
      (t) => `
      <blockquote class="testimonial reveal">
        <p class="testimonial__quote">“${escapeHtml(t.quote)}”</p>
        <footer class="testimonial__meta">
          <cite class="testimonial__name">${escapeHtml(t.name)}</cite>
          <span class="testimonial__detail">${escapeHtml(t.detail)}</span>
        </footer>
      </blockquote>
    `,
    )
    .join('');
}

function renderFaq() {
  const root = $('[data-faq]');
  if (!root) return;

  root.innerHTML = site.faqs
    .map(
      (item, index) => `
      <details class="faq-item reveal" ${index === 0 ? 'open' : ''}>
        <summary>${escapeHtml(item.question)}</summary>
        <p>${escapeHtml(item.answer)}</p>
      </details>
    `,
    )
    .join('');
}

function renderBookingBlock() {
  const root = $('[data-booking-block]');
  if (!root) return;

  if (isConfiguredUrl(site.bookingUrl)) {
    root.innerHTML = `
      <a class="btn btn--primary btn--large" href="${escapeHtml(site.bookingUrl.trim())}" target="_blank" rel="noopener noreferrer">
        Book a Free Consult
      </a>
      <p class="book__hint">Opens your scheduling page in a new tab.</p>
    `;
  } else {
    root.innerHTML = `
      <a class="btn btn--primary btn--large btn--placeholder" href="#contact">
        Booking link coming soon
      </a>
    `;
  }
}

const socialIcons = {
  instagram: `<svg class="social-list__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.75"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.75"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></svg>`,
  facebook: `<svg class="social-list__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"/></svg>`,
  tiktok: `<svg class="social-list__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.5 4c.4 1.7 1.6 3 3.3 3.4v2.4c-1.2 0-2.3-.3-3.3-.9v5.5c0 3.1-2.5 5.6-5.6 5.6S5.3 17.5 5.3 14.4 7.8 8.8 10.9 8.8c.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.1-.9-.1-1.6 0-2.9 1.3-2.9 3s1.3 3 2.9 3 2.9-1.3 2.9-3V4h2.7z"/></svg>`,
};

function renderContact() {
  const items = [];
  if (site.contact.email) {
    items.push(
      `<li><a href="mailto:${escapeHtml(site.contact.email)}">${escapeHtml(site.contact.email)}</a></li>`,
    );
  }
  if (site.contact.phone) {
    items.push(
      `<li><a href="tel:${escapeHtml(site.contact.phone.replace(/\s+/g, ''))}">${escapeHtml(site.contact.phone)}</a></li>`,
    );
  }

  const details = $('[data-contact-details]');
  if (details) details.innerHTML = items.join('');

  const footerContact = $('[data-footer-contact]');
  if (footerContact) footerContact.innerHTML = items.join('');

  const social = $('[data-social]');
  const socialBlock = $('[data-social-block]');
  if (social) {
    const platforms = [
      ['instagram', 'Instagram'],
      ['facebook', 'Facebook'],
      ['tiktok', 'TikTok'],
    ];

    social.innerHTML = platforms
      .map(([key, label]) => {
        const icon = socialIcons[key] || '';
        if (isConfiguredUrl(site.social[key])) {
          return `<li><a class="social-list__link" href="${escapeHtml(site.social[key].trim())}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${icon}</a></li>`;
        }
        return `<li><span class="social-list__soon" aria-label="${label} coming soon" title="${label} coming soon">${icon}</span></li>`;
      })
      .join('');

    if (socialBlock) socialBlock.hidden = false;
  }

  const year = $('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupContactForm() {
  const form = $('[data-contact-form]');
  const status = $('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    status.className = 'form-status';

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.classList.add('form-status--error');
      return;
    }

    if (isConfiguredUrl(site.contact.formEndpoint)) {
      status.textContent = 'Sending…';
      try {
        const res = await fetch(site.contact.formEndpoint.trim(), {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        status.textContent = 'Thanks — your message is on its way.';
        status.classList.add('form-status--ok');
      } catch {
        status.textContent = 'Something went wrong. Please email directly instead.';
        status.classList.add('form-status--error');
      }
      return;
    }

    // mailto fallback when Formspree isn’t configured
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app…';
    status.classList.add('form-status--ok');
  });
}

function setupNav() {
  const toggle = $('[data-nav-toggle]');
  const nav = $('[data-nav]');
  const header = $('[data-header]');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  if (header) {
    const onScroll = () => {
      const scrolled = window.scrollY > 0;
      header.classList.toggle('is-scrolled', scrolled);
      document.body.classList.toggle('is-scrolled', scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

function setupReveal() {
  const items = $$('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  items.forEach((el) => observer.observe(el));
}

function setupHeroVideo() {
  const video = $('[data-hero-video]');
  if (!video) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncPlayback = () => {
    if (reduceMotion.matches) {
      video.pause();
      return;
    }
    const playPromise = video.play();
    if (playPromise?.catch) playPromise.catch(() => {});
  };

  syncPlayback();
  reduceMotion.addEventListener('change', syncPlayback);
}

renderMeta();
renderCopy();
renderOffers();
renderTestimonials();
renderFaq();
renderBookingBlock();
renderContact();
setupContactForm();
setupNav();
setupReveal();
setupHeroVideo();
