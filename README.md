# Northline registration landing page

A single-page, responsive React landing page for Northline's career-focused learning workshops, built from the supplied desktop (1440px) and mobile (390px) design references. It includes an accessible registration enquiry form that validates in the browser and confirms locally. **No data is sent anywhere:** there is no backend, payment, tracking or external service.

**Live site:** https://northline-registration-landing.vercel.app (deployed on Vercel from the `main` branch)

## Requirements

- Node.js 18 or newer (tested with Node 25.1.0 and npm 11.6.3)
- No other global tools are needed

## Setup and scripts

```bash
npm install        # install React, React DOM and Vite
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build into dist/
npm run preview    # serve the production build (http://localhost:4173)
```

## Deploying

The site is static. Any static host serves `dist/` as is.

- **Vercel:** import the repository. The framework preset is Vite, the build command is `npm run build` and the output directory is `dist`.
- **Netlify:** the build command is `npm run build` and the publish directory is `dist`.

The Privacy and Contact pages live in `public/` and are copied to `/privacy.html` and `/contact.html` on build.

## Project structure

```
index.html                  App shell (lang, meta description, favicon)
vite.config.js              Enables the automatic JSX runtime (no extra plugin)
public/
  assets/                   Supplied artwork: northline_logo.svg, hero_illustration.png
  favicon.svg               Logo mark used as the favicon
  privacy.html, contact.html  Local footer pages
  pages.css                 Shared styles for those two pages
src/
  main.jsx                  Mounts <App /> and loads base.css
  App.jsx                   Page composition and skip link
  data/content.js           All approved copy and lists (single source of truth)
  utils/validateEnquiry.js  Pure validation rules for the form
  styles/
    base.css                Brand colour tokens (CSS custom properties) and a minimal reset
    shared.module.css       Shared primitives: container, eyebrow, section heading, button, skip link
  components/
    Header.jsx + .module.css        Logo, primary nav, "Register now" (shows "Join" on mobile)
    Hero.jsx + .module.css          Eyebrow, H1, intro, two CTAs, hero artwork
    Capabilities.jsx + .module.css  Three numbered benefit cards (ordered list, data-driven)
    EnquiryForm.jsx + .module.css   Registration enquiry form, validation and status message
    FormField.jsx                   Reusable label + control + error wrapper
    Footer.jsx + .module.css        Tagline, Privacy and Contact links
```

## Components

| Component | Responsibility |
| --- | --- |
| `Header` | `<header>` with the logo link to the top of the page, a `<nav aria-label="Primary">` with Programs, and the Register CTA. |
| `Hero` | `<section id="top">` with the H1. "Reserve my seat" goes to `#register` and "Explore programs" to `#benefits`. The artwork has descriptive alt text. |
| `Capabilities` | `<section id="benefits">` that renders the cards from `content.js` as an `<ol>`, so the numbers carry meaning. |
| `EnquiryForm` | `<section id="register">` holding the `<form noValidate>`. Fields are full name, email, learning interest and consent. |
| `FormField` | Ties each `<label htmlFor>` to its control and wires `aria-invalid` and `aria-describedby` to the error text. |
| `Footer` | `<footer>` with a `<nav aria-label="Footer">` linking to `/privacy.html` and `/contact.html`. |

## Enquiry form behaviour

- **Validation rules:**
  - Name must be at least 2 characters after trimming.
  - Email must have valid syntax.
  - A learning interest must be selected (Practical Workshops, Mentor Sessions or Career Projects).
  - The consent box must be ticked.
- **On submit with errors:**
  - Each invalid field gets `aria-invalid="true"` and an error message linked by `aria-describedby`.
  - Focus moves to the first invalid field.
  - A `role="status"` message says how many fields need fixing.
- **While correcting:** after the first attempt, errors update as the user types.
- **On success:**
  - The form resets.
  - The `role="status"` region shows: "Thanks, your request has been recorded in this browser. The team has not yet received an email."
- **Local only:**
  - The only thing stored is a confirmation flag (interest and timestamp) in `localStorage`. The name and email are not stored.
  - No request is made. Tests confirmed zero network requests during form use.

## Styling approach

- **CSS Modules** are used per component. There are no inline `style` attributes anywhere, including the Privacy and Contact pages.
- **Layout:**
  - CSS Grid for the hero, cards and enquiry columns.
  - Flexbox for the header, actions, fields and footer.
- **Breakpoints:**
  - `max-width: 1023px`: cards become 2 + 1 and the form stacks under its intro.
  - `max-width: 767px`: the hero stacks with the artwork below the copy.
  - `max-width: 599px`: mobile header ("Join"), single-column cards and the full-width form.
- **Brand tokens** live in `base.css`:
  - Colours: forest `#123A37`, accent `#1A7669`, mint `#EAF5EF`, soft green `#C8E8CB`, ivory `#F8F6EE`, text `#172B2A`, muted `#536965`, highlight `#FFBA75`.
  - Type: system Arial stack, no web fonts.
  - Maximum content width: 1300px.
- **Accessibility:**
  - Visible `:focus-visible` outlines and a skip link.
  - Smooth scrolling is turned off for `prefers-reduced-motion`.
  - Body text contrast is at least 4.9:1, and input borders are 3:1 against their background.

## Dependencies

- **Runtime:** `react`, `react-dom` (18.3)
- **Dev:** `vite` (5.4)
- No UI libraries, CSS frameworks, routers or analytics.
