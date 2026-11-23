// All approved page copy lives here so components stay presentational (DRY).
// Source: INPUT_FILES/CONTENT/BRAND_AND_COPY.txt

export const brand = {
  name: 'NORTHLINE',
  tagline: 'Learn with purpose.',
};

export const navLinks = [{ label: 'Programs', href: '#benefits' }];

export const hero = {
  eyebrow: 'LEARN • CONNECT • ADVANCE',
  heading: 'Build the skills that move you forward.',
  body: 'Focused online workshops, practical projects, and guidance from experienced mentors.',
  primaryCta: { label: 'Reserve my seat', href: '#register' },
  secondaryCta: { label: 'Explore programs', href: '#benefits' },
  image: {
    src: '/assets/hero_illustration.png',
    alt: 'Illustration of a learning dashboard card titled Your next chapter, with Build skills and Grow with peers tiles and a Get started button',
    width: 720,
    height: 640,
  },
};

export const capabilities = {
  eyebrow: 'WHAT YOU WILL GAIN',
  heading: 'Learning designed for real progress',
  items: [
    { title: 'Practical workshops', text: 'Learn through hands-on, guided activities.' },
    { title: 'Experienced mentors', text: 'Get support from industry practitioners.' },
    { title: 'Supportive community', text: 'Grow alongside ambitious learners.' },
  ],
};

export const enquiry = {
  eyebrow: 'START YOUR LEARNING JOURNEY',
  heading: 'Reserve a place in our next cohort.',
  note: 'No payment is collected on this page.',
  interests: ['Practical Workshops', 'Mentor Sessions', 'Career Projects'],
  consentLabel: 'I agree to be contacted about my enquiry',
  submitLabel: 'Request registration',
  success:
    'Thanks, your request has been recorded in this browser. The team has not yet received an email.',
};

export const footerLinks = [
  { label: 'Privacy', href: '/privacy.html' },
  { label: 'Contact', href: '/contact.html' },
];
