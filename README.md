# MiKu Beratung — Frontend

Static site built with Vite + React 18 + TypeScript and Tailwind CSS. Single-page app routing with DE locale, a contact page with obfuscated mailto link, and a technical-cookies banner (stored in `localStorage`).

## Requirements
- Node 18+ (LTS recommended)

## Setup
```bash
cd frontend
npm install
```

## Development
```bash
npm run dev
```
(Default port: 5173)

## Production build
```bash
npm run build
```
Output is placed in `dist/`.

## Tests
```bash
npm run test
```
Vitest + React Testing Library (watch: `npm run test:watch`, UI: `npm run test:ui`).

## Scripts
- `dev` — start Vite dev server
- `build` — production build
- `preview` — preview the build
- `test`, `test:watch`, `test:ui`
- `lint` — ESLint

## Tech stack
- React 18, TypeScript, Vite 6
- Tailwind CSS (forms/typography/animate)
- React Router DOM 7
- react-helmet-async (SEO)
- react-hook-form + zod (contact form currently replaced by mailto CTA)
- @tanstack/react-query (client initialized)
- Vitest + React Testing Library

## Localization
- Language: DE (`src/locales/de/*`), types in `src/locales/types.ts`, registration in `src/locales/resources.ts`.

## Routing
- `/` (Home), `/about`, `/kontakt`, `/datenschutz`, `/cookies`, `*` (404).

## Notes
- Cookie banner (technical cookies only) shows if `cookie_notice_accepted` is not set in `localStorage`.
- Contact email is assembled on the client to reduce bot scraping.
