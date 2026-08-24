# AM Dienstleistungen GmbH – Portfolio Website

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Content architecture

All visible business copy currently lives in:

`src/content/site.ts`

The page does **not** hardcode business text across components. Later, only replace `getSiteContent()` with a backend/CMS fetch. The UI can stay unchanged.

## Animations

- Hero headline enters from left, right and bottom with staggered timing.
- Section elements animate on scroll using `IntersectionObserver`.
- Animations respect `prefers-reduced-motion`.
- Service/reference cards include subtle hover motion.

## Contact form

Currently demo-only. Later connect `ContactForm.tsx` to the backend/API.
