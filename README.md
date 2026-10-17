# Synerlogic Global Solutions Corporation

Corporate website for Synerlogic Global Solutions Corporation. Copy follows the approved website blueprint. The site does not add contact details, licenses, metrics, clients, or case studies that were not supplied.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

`npm run build` typechecks, then creates a Vite production bundle. `vercel.json` rewrites unknown paths to `index.html` so direct route loads work on Vercel.

## Contact form

The form validates in the browser. It does not show a success message unless a configured endpoint returns HTTP 2xx.

Set these in `.env` (see `.env.example`):

- `VITE_CONTACT_ENDPOINT` — HTTPS URL that accepts `POST` `application/json` with `{ name, email, company, inquiryType, message }`. Return 2xx only after the message is stored or delivered. Leave empty until that recipient is verified. While empty, the form states that delivery is not configured.
- `VITE_SITE_URL` — production origin without a trailing slash, used for canonical URLs and the sitemap. Leave empty until the domain is approved.

Server-side validation and spam protection still need to live on that endpoint. No API keys belong in this frontend.

## Before launch

Still needed from the client:

- Verified inquiry recipient and a tested delivery endpoint
- Approved privacy notice, consent language, and retention owner
- Domain and DNS access
- Any office photography, social profiles, testimonials, or credentials that should appear — only after written approval

The logo in `src/assets/logo.png` is the supplied globe-and-S file, used unchanged. `public/favicon.png` is the same file, not a cropped redraw.
