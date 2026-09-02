/**
 * Rooted Wellness & Fitness — site content & links
 * =================================================
 * Edit this file to update offers, prices, payment links,
 * booking URL, contact info, and most page copy.
 * After editing, rebuild/redeploy (or refresh if using `npm run dev`).
 */

export const site = {
  brand: 'Rooted Wellness',
  brandFull: 'Rooted Wellness & Fitness',
  tagline: 'Get rooted. Grow stronger. Live better.',
  metaDescription:
    'Rooted Wellness & Fitness offers personalized strength training and nutrition coaching — Root, Build, Thrive, Rooted Mother, and 1:1 Reset. Book a free consult.',

  // Primary booking CTA — paste your Calendly (or similar) link here
  bookingUrl: '', // e.g. 'https://calendly.com/your-link'

  contact: {
    email: 'hello@rootedwellness.example',
    phone: '',
    // Formspree: create a form at formspree.io and paste the endpoint URL
    formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxx'
  },

  // Social links — paste profile URLs here to make footer Follow links live
  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    facebook: '',
    tiktok: '',
  },

  // Program guides — files live in public/downloads/
  downloads: [
    {
      label: "What's Included",
      description: 'Full breakdown of every program, month by month',
      href: './downloads/RootedWellness-WhatsIncluded.docx',
      filename: 'RootedWellness-WhatsIncluded.docx',
    },
    {
      label: 'Pricing Guide',
      description: 'Monthly and prepaid pricing for all programs',
      href: './downloads/RootedWellness-PricingGuide.docx',
      filename: 'RootedWellness-PricingGuide.docx',
    },
  ],

  about: {
    heading: 'Get rooted. Grow stronger. Live better.',
    body: `Rooted Wellness & Fitness is more than fitness. It is a lifestyle built around the belief that lasting change starts from within.

Rooted meets you where you are. There is no single definition of healthy. There is no finish line. There is only progress.`,
    credentials: [
      'Personalized strength training & habit-based nutrition guidance',
      'Programs for every stage — Root, Build, Thrive, and beyond',
      'Specialized prenatal & postpartum support (Rooted Mother)',
    ],
  },

  offersIntro: {
    eyebrow: 'Programs',
    heading: 'Choose Your Path',
    lede: 'Instead of forcing everyone into the same program, Rooted Wellness & Fitness gives you a starting point based on your goals, your lifestyle, and your stage of life.',
  },

  /**
   * Offers — add, remove, or reorder freely.
   * paymentUrl: Stripe Payment Link or PayPal button URL.
   * Leave paymentUrl empty to show a “Coming soon” state on the button.
   * includes: optional bullet list shown on the card.
   */
  offers: [
    {
      id: 'root',
      name: 'Root — Foundations',
      description: 'For creating healthy habits, learning the basics, and finally becoming consistent.',
      price: '$149',
      priceNote: 'per month',
      ctaLabel: 'Get started',
      paymentUrl: '',
      includes: [
        'Custom strength & movement program for your equipment',
        'Habit-based nutrition guidance',
        '1 monthly check-in · 48-hour message support',
        'Digital progress tracker',
      ],
    },
    {
      id: 'build',
      name: 'Build — Progression',
      description: 'For building muscle, getting stronger, improving body composition, and feeling confident in your body.',
      price: '$179',
      priceNote: 'per month',
      ctaLabel: 'Get started',
      paymentUrl: '',
      includes: [
        'Everything in Root',
        'Periodized training that progresses week to week',
        '2 check-ins per month · 24-hour message support',
        'Nutrition guidance refined monthly',
      ],
    },
    {
      id: 'thrive',
      name: 'Thrive — Advanced',
      description: 'For people who want to stay strong, energetic, mobile, and capable throughout life.',
      price: '$209',
      priceNote: 'per month',
      ctaLabel: 'Get started',
      paymentUrl: '',
      includes: [
        'Everything in Build',
        'Advanced periodization, deloads & training blocks',
        'Deeper nutrition periodization',
        'Priority messaging with same-day response',
      ],
    },
    {
      id: 'rooted-mother',
      name: 'Rooted Mother',
      description:
        'Specialized strength and wellness support through pregnancy and the postpartum journey — built around what’s safe and effective at each stage.',
      price: '$299',
      priceNote: 'per month',
      ctaLabel: 'Get started',
      paymentUrl: '',
      includes: [
        'Trimester- or recovery-stage specific programming',
        'Nutrition guidance adapted for pregnancy/postpartum',
        'Weekly check-ins · same-day message access',
        'Safety-first pacing with medical clearance in mind',
      ],
    },
    {
      id: 'reset-1on1',
      name: '1:1 Reset',
      description:
        'A fully customized lifestyle transformation with direct access to your coach — the highest level of support.',
      price: '$399',
      priceNote: 'per month',
      ctaLabel: 'Get started',
      paymentUrl: '',
      featured: true,
      badge: 'Most personal',
      includes: [
        'Fully custom training & nutrition coaching',
        'Weekly call or video check-ins',
        'Same-day, ongoing coach access',
        'Real-time plan adjustments as life changes',
      ],
    },
  ],

  nutritionNote:
    'Nutrition guidance at Rooted Wellness & Fitness is general, education- and habit-based coaching — not medical nutrition therapy, and not a substitute for care from a physician or a registered dietitian/nutritionist. If you’re already working with a doctor or dietitian, we build around their guidance rather than in place of it.',

  testimonials: [
    {
      quote:
        'I finally have a plan that fits around my kids and work — and I actually look forward to training again.',
      name: 'Client name',
      detail: 'Build coaching',
    },
    {
      quote:
        'The nutrition guidance was clear without being rigid. I learned how to fuel myself, not just restrict.',
      name: 'Client name',
      detail: 'Root coaching',
    },
    {
      quote:
        'Postpartum programming that felt safe and empowering. I rebuilt strength at a pace that made sense for me.',
      name: 'Client name',
      detail: 'Rooted Mother',
    },
  ],

  faqs: [
    {
      question: 'What’s actually included when I sign up?',
      answer:
        'Every program pairs strength training with nutrition guidance built around real life — plus a tracker to log progress and regular check-ins so you’re never guessing. Exactly what’s included depends on your package; we’ll walk through the difference on your free consult.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Book a free consult and tell us a bit about your goals, your schedule, and where you’re starting from. From there we’ll recommend the program or coaching package that fits — no pressure, no obligation to continue.',
    },
    {
      question: 'Do I need a gym membership or special equipment?',
      answer:
        'No. We build around what you actually have access to — a full gym, a home setup, or just your bodyweight. Tell us what you’re working with and your program is built around it.',
    },
    {
      question: 'I’ve never done strength training before — is this for me?',
      answer:
        'Yes. Most of what we build is for people starting from exactly where you are right now, not where a generic program assumes you are. If you’re new to training, your program is paced and cued accordingly.',
    },
    {
      question: 'Do you work with pregnant or postpartum clients?',
      answer:
        'Yes — prenatal and postpartum support is one of our specialties, with programming built around what’s safe and effective at each stage, not a generic plan with a disclaimer stapled on.',
    },
    {
      question: 'What if I have an injury or a health condition?',
      answer:
        'Tell us during your intake. We build around limitations rather than ignoring them, and for anything requiring medical judgment, we’ll ask you to get clearance from your doctor first — your safety comes before your program.',
    },
    {
      question: 'Will I have to follow a strict meal plan?',
      answer:
        'No. Our nutrition coaching is built around sustainable habits and food you’ll actually eat — not restriction, elimination, or a plan designed to be abandoned in six weeks.',
    },
    {
      question: 'I’m on a GLP-1 medication (like Ozempic or Wegovy) — can you still help me?',
      answer:
        'Yes. Coaching alongside GLP-1 medications is increasingly common. We build your strength training and general nutrition education around what matters most in that context — supporting muscle through resistance training and habits like adequate protein intake as your body changes. We coordinate around your prescribing provider’s guidance on the medication itself, rather than replacing it.',
    },
    {
      question: 'How often will I hear from my coach?',
      answer:
        'Check-in frequency depends on your package, ranging from periodic async check-ins to more frequent direct contact — this gets set clearly during onboarding so you know exactly what to expect.',
    },
    {
      question: 'How long until I see results?',
      answer:
        'It depends on where you’re starting and what you’re working toward, but we’re built for sustainable pace, not a crash timeline. Most clients feel a difference in energy and strength within the first few weeks, with visible changes building steadily from there.',
    },
    {
      question: 'Can I cancel or change my plan later?',
      answer:
        'Yes. Life changes, and your coaching should be able to change with it — reach out any time and we’ll adjust or pause your plan.',
    },
    {
      question: 'What’s Rooted’s mission and philosophy?',
      answer:
        'Our mission is to make healthy living accessible, sustainable, and empowering — bringing strength training, nutrition, mindfulness, and habit-building into one personalized approach, without extremes or pressure to be perfect. Our philosophy fits in one line: Get rooted. Grow stronger. Live better. Looking better can be a result of getting healthier and stronger — but it’s never the only reason to take care of yourself.',
    },
  ],
};
