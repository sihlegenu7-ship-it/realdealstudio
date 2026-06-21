# Real Deal Studios

A multi-page marketing website for **Real Deal Studios**, a South African web design studio offering affordable, professional websites for artists, musicians, and other creatives. Built with static HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

🔗 Live structure: `INDEX.html` → `ABOUT.html` → `SERVICES.html` → `CONTACT.html`, plus `AUTH.html` for sign in / sign up.

## Pages

| File | Purpose |
|---|---|
| `INDEX.html` | Sign in / sign up page (self-contained — includes its own `<style>` and `<script>` blocks rather than the shared `STYLE.css`/`SCRIPT.js`) |
| `AUTH.html` | Marketing hero ("Your Art Deserves a Stage") with a CTA into Contact |
| `ABOUT.html` | Studio mission, "why you need this" value props, key stats |
| `SERVICES.html` | Service catalogue (web design, redesigns, SEO, domain & hosting, maintenance) |
| `CONTACT.html` | Contact form, WhatsApp link, studio details, floating WhatsApp button |

> **Note:** `INDEX.html` and `AUTH.html` currently appear to have swapped roles relative to what their nav links and content imply — every page's "Home" link points to `INDEX.html`, but `INDEX.html` renders the sign-in/sign-up screen, while `AUTH.html` renders the marketing homepage hero. See [Known Issues](#known-issues) below.

## Tech stack

- **HTML5** — semantic markup, ARIA labels on nav/landmarks
- **CSS3** — custom properties (`:root` variables), CSS Grid/Flexbox, no preprocessor
- **Vanilla JavaScript** — no dependencies, no bundler
- **Google Fonts** — Bebas Neue, DM Sans, Space Mono
- **Font Awesome** (CDN, `CONTACT.html` only) — WhatsApp icon

## Project structure

```
.
├── INDEX.html          # Sign in / sign up
├── AUTH.html            # Marketing homepage
├── ABOUT.html
├── SERVICES.html
├── CONTACT.html
├── STYLE.css            # Shared stylesheet (all pages except INDEX.html)
├── SCRIPT.js             # Shared behavior (nav highlight, hamburger, contact form, sign-out)
├── about.png
├── contact.png           # currently unused — see Known Issues
├── deal.png
├── office.png
├── real.png
├── services.png
├── studioimage.png
└── team-photo.png
```

## Running locally

This is a static site — no build tools or server-side code required.

```bash
# Option 1: just open the file
open INDEX.html

# Option 2: serve it (recommended, avoids relative-path quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- Responsive layout with a custom hamburger menu below 900px
- Animated content reveals (`fade-up` keyframes) on hero sections
- Active nav-link highlighting based on current page (`SCRIPT.js`)
- Simulated contact form submission with loading/success states
- Simulated sign in / sign up flow with client-side password-strength meter
- Floating WhatsApp contact button (`CONTACT.html`)
- Scrolling services ticker on every marketing page

## Known issues

These are flagged for the next pass — see full review notes for detail:

1. **Home navigation is inverted.** Every page's "Home" nav link points to `INDEX.html`, but `INDEX.html` is the auth screen, not the marketing homepage. `AUTH.html` holds the actual homepage content. Likely needs a file swap/rename.
2. **`INDEX.html` doesn't load `SCRIPT.js`.** It duplicates nav-toggle/hamburger logic inline instead, which means the two implementations can drift out of sync over time.
3. **"Log Out" on the auth page.** `AUTH.html`'s nav shows a "Log Out" link even on the sign-in screen, and there's no real session state anywhere in the codebase — it's a placeholder, not functional auth.
4. **`contact.png` is unused.** Every other image is referenced in `STYLE.css` except this one; `CONTACT.html`'s hero currently reuses `office.png`.
5. **Forms don't submit anywhere.** Contact and auth forms simulate success with `setTimeout` only — no backend, no email delivery. Fine for a prototype, needs wiring before launch.
6. **Duplicated responsive CSS.** `INDEX.html`'s inline `<style>` reimplements the same `@media (max-width: 900px)` rules already in `STYLE.css`, so layout fixes need to be made twice.

## License

Add a license here once decided (e.g. MIT, or "All rights reserved" if proprietary). Currently unspecified.

---

© 2026 Real Deal Studios — 128 New Road, Midrand, Johannesburg, South Africa
