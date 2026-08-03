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
  document.title = `${site.brand} Coaching — Fitness & Nutrition for Women`;
  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute('content', site.metaDescription);
  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', site.brand);
  const ogDesc = $('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', site.metaDescription);
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

  root.innerHTML = site.offers
    .map((offer) => {
      const ready = isConfiguredUrl(offer.paymentUrl);
      const featured = offer.featured ? ' offer-card--featured' : '';
      const cta = ready
        ? `<a class="btn btn--primary" href="${escapeHtml(offer.paymentUrl.trim())}" target="_blank" rel="noopener noreferrer">${escapeHtml(offer.ctaLabel)}</a>`
        : `<button class="btn btn--primary btn--disabled" type="button" disabled aria-disabled="true">${escapeHtml(offer.ctaLabel)} <span class="coming-soon">Coming soon</span></button>`;

      return `
        <article class="offer-card${featured} reveal" id="${escapeHtml(offer.id)}">
          ${offer.featured ? '<p class="offer-card__badge">Most personal</p>' : ''}
          <h3 class="offer-card__name">${escapeHtml(offer.name)}</h3>
          <p class="offer-card__desc">${escapeHtml(offer.description)}</p>
          <p class="offer-card__price">
            <span class="offer-card__amount">${escapeHtml(offer.price)}</span>
            ${offer.priceNote ? `<span class="offer-card__note">${escapeHtml(offer.priceNote)}</span>` : ''}
          </p>
          <div class="offer-card__cta">${cta}</div>
        </article>
      `;
    })
    .join('');
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

function renderContact() {
  const details = $('[data-contact-details]');
  if (details) {
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
    details.innerHTML = items.join('');
  }

  const social = $('[data-social]');
  if (social) {
    const links = [
      ['instagram', 'Instagram'],
      ['facebook', 'Facebook'],
      ['tiktok', 'TikTok'],
    ]
      .filter(([key]) => isConfiguredUrl(site.social[key]))
      .map(
        ([key, label]) =>
          `<li><a href="${escapeHtml(site.social[key].trim())}" target="_blank" rel="noopener noreferrer">${label}</a></li>`,
      );
    social.innerHTML = links.join('');
    social.hidden = links.length === 0;
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
