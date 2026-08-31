# Pongsakorn — Software Engineer Portfolio

A static, responsive portfolio for showcasing software development projects,
technical skills, and contact information. Built with TypeScript, React Server
Components, App Router conventions, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Project content is stored in `data/portfolio.ts`. Add real project screenshots
under `public/projects/` using the filenames referenced in that data file; safe
screenshot-style placeholders appear automatically when an image is missing.

This is a static showcase only. It contains no API routes, authentication,
database connection, or server-side data mutations.
