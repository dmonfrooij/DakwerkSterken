# AGENTS.md

## Project snapshot
- Vite + React + TypeScript single-page marketing site for Dakwerk Sterken, styled with Tailwind (`src/main.tsx`, `src/App.tsx`, `src/index.css`).
- Routing is minimal: `/` renders section-based homepage and `/projecten` renders a dedicated projects page (`src/main.tsx`).
- `Header`, `Footer`, and `ScrollToTop` are mounted outside route elements so they stay active across routes (`src/main.tsx`).

## Big-picture architecture and data flow
- Homepage composition is a linear stack of presentational components (`Hero -> Services -> Materials -> Gallery -> Videos -> Contact -> Reviews`) in `src/App.tsx`.
- Cross-section navigation depends on DOM ids (`home`, `services`, `gallery`, `videos`, `contact`) and smooth scrolling, not route fragments (`src/components/Header.tsx`, `src/components/Hero.tsx`).
- From `/projecten`, header buttons navigate back to `/` first, then scroll after a delay; preserve this behavior when changing navigation (`src/components/Header.tsx`).
- Contact form submits directly to backend endpoint `/api/send-mail` with `fetch` and local status state (`src/components/ContactForm.tsx`).
- Mail backend is a separate Express app in `server/server.js`; it validates fields and sends via SMTP env vars.

## Developer workflows (discoverable)
- Frontend scripts from `package.json`:
  - `npm run dev` (Vite dev server)
  - `npm run build`
  - `npm run lint`
  - `npm run preview`
- No root npm script exists for the backend server; start it manually from project root with `node server/server.js` after installing backend deps (`express`, `nodemailer`, `cors`, `dotenv`).
- Backend expects `server/.env` values: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, optional `PORT` (`server/server.js`).

## Project-specific conventions and patterns
- UI copy and comments are primarily Dutch; keep new customer-facing text in Dutch unless asked otherwise.
- Components are mostly self-contained and keep content data inline as local arrays (see `Services`, `Gallery`, `Projects`, `Videos`).
- Styling is utility-first Tailwind with occasional custom animations in `src/index.css` (`animate-fade-in-out`, `animate-float*`).
- Static media is referenced via absolute `/photos/...` or root paths from `public/`; many image URLs include query-style suffixes but are still static files.
- There is no shared API/service layer, global store, or test suite currently; changes usually happen directly in component files.

## Integrations and external boundaries
- Google Analytics is injected directly in `index.html` via `gtag.js` with measurement id `G-QGGCR87T6J`.
- Reviews widget loads Elfsight script dynamically and renders `elfsight-app-6e10676d-fba0-4e7a-b91c-fa5a92bb4a9d` (`src/components/Reviews.tsx`).
- Video cards open external YouTube URLs in a new tab (`src/components/Videos.tsx`).
- Mail sending crosses frontend/backend boundary at `/api/send-mail`; if frontend and backend run on different origins, CORS is enabled in backend (`server/server.js`).

## High-value files to read first
- `src/main.tsx` (routing shell + always-mounted layout)
- `src/components/Header.tsx` (navigation behavior and cross-route scroll logic)
- `src/components/ContactForm.tsx` + `server/server.js` (only active data submission flow)
- `index.html` + `src/components/Reviews.tsx` (third-party scripts)
- `package.json` + `eslint.config.js` + `tsconfig.app.json` (tooling constraints)

