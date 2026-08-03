/**
 * Rooted Wellness Coaching — site content & links
 * =================================================
 * Edit this file to update offers, prices, payment links,
 * booking URL, contact info, and most page copy.
 * After editing, rebuild/redeploy (or refresh if using `npm run dev`).
 */

export const site = {
  brand: 'Rooted Wellness',
  tagline: 'Fitness and nutrition coaching that meets you where you are.',
  metaDescription:
    'Rooted Wellness Coaching offers digital fitness programs, 1:1 coaching, and nutrition plans for women — including prenatal and postpartum support. Book a free consult.',

  // Primary booking CTA — paste your Calendly (or similar) link here
  bookingUrl: '', // e.g. 'https://calendly.com/your-link'

  contact: {
    email: 'hello@rootedwellness.example',
    phone: '',
    // Formspree: create a form at formspree.io and paste the endpoint URL
    formEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxx'
  },

  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    facebook: '',
    tiktok: '',
  },

  about: {
    heading: 'Coaching that feels like support, not pressure',
    body: `I'm a certified fitness and nutrition coach helping women build strength, nourish their bodies, and feel confident through every season of life — including pregnancy and postpartum.

My approach is practical and personal: clear programming, realistic nutrition guidance, and accountability that fits real schedules. No extremes. No guilt. Just steady progress rooted in habits that last.`,
    credentials: [
      'Certified personal trainer & nutrition coach',
      'Prenatal & postpartum programming experience',
      'Macro-aware meal planning support',
    ],
  },

  /**
   * Offers — add, remove, or reorder freely.
   * paymentUrl: Stripe Payment Link or PayPal button URL.
   * Leave paymentUrl empty to show a “Coming soon” state on the button.
   */
  offers: [
    {
      id: 'digital-programs',
      name: 'Digital Fitness Programs',
      description:
        'Self-paced training plans designed for home or gym — strength, fat loss, and energy-focused programming you can start today.',
      price: '$79',
      priceNote: 'one-time',
      ctaLabel: 'Get this program',
      paymentUrl: '',
    },
    {
      id: 'coaching-1on1',
      name: '1:1 Coaching',
      description:
        'Personalized training and check-ins tailored to your goals, schedule, and season of life. Includes form feedback and ongoing accountability.',
      price: '$249',
      priceNote: 'per month',
      ctaLabel: 'Start coaching',
      paymentUrl: '',
      featured: true,
    },
    {
      id: 'nutrition-plans',
      name: 'Nutrition & Meal Plans',
      description:
        'Macro-aware meal guidance and simple templates so eating well feels doable — not like another full-time job.',
      price: '$99',
      priceNote: 'one-time',
      ctaLabel: 'Get meal plan',
      paymentUrl: '',
    },
  ],

  testimonials: [
    {
      quote:
        'I finally have a plan that fits around my kids and work — and I actually look forward to training again.',
      name: 'Client name',
      detail: '1:1 coaching',
    },
    {
      quote:
        'The nutrition guidance was clear without being rigid. I learned how to fuel myself, not just restrict.',
      name: 'Client name',
      detail: 'Nutrition coaching',
    },
    {
      quote:
        'Postpartum programming that felt safe and empowering. I rebuilt strength at a pace that made sense for me.',
      name: 'Client name',
      detail: 'Postpartum program',
    },
  ],

  faqs: [
    {
      question: 'Who is coaching with Rooted Wellness for?',
      answer:
        'Primarily women looking for sustainable fitness, fat loss support, nutrition guidance, or prenatal/postpartum programming. All fitness levels are welcome.',
    },
    {
      question: 'How does 1:1 coaching work?',
      answer:
        'After a free consult, you’ll get a personalized plan, regular check-ins, and form feedback. Delivery details (app, email, or shared docs) are confirmed during onboarding.',
    },
    {
      question: 'What happens after I purchase a digital program?',
      answer:
        'You’ll receive access instructions by email after payment. Digital delivery is currently handled manually — expect a short turnaround after purchase.',
    },
    {
      question: 'Do I need a gym?',
      answer:
        'Not necessarily. Programs can be adapted for home or gym equipment. We’ll match the plan to what you have access to.',
    },
    {
      question: 'Can I book a free consultation first?',
      answer:
        'Yes — that’s the best place to start. Use the Book a Free Consult button to grab a time that works for you.',
    },
  ],
};
