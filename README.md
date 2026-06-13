# Masterflex Industrial Website

Bilingual B2B product catalogue and lead-generation website built with Next.js, TypeScript, Tailwind CSS and the App Router.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root route redirects to English at `/en`; Greek is available at `/el`.

## Production build

```bash
npm run build
npm run start
```

## Vercel deployment

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Set **Root Directory** to the repository root (`.`), not `masterflex`.
4. Keep the detected framework as Next.js.
5. Deploy with the default build command `npm run build`.

The included `vercel.json` explicitly identifies this repository as a Next.js
application. The public root route redirects server-side to `/en`.

No required environment variables are used in this version.

## Content updates

- Product categories: `data/categories.ts`
- Product records and filter mapping: `data/products.ts`
- Applications: `data/applications.ts`
- Technical articles: `data/resources.ts`
- Shared navigation translations: `data/translations.ts`
- Contact details: `components/Footer.tsx` and `app/[locale]/contact/page.tsx`
- Catalogue PDF: `public/catalogues/masterflex-catalogue.pdf`
- Product and application imagery: add approved assets under `public/images/`

The contact forms currently validate in the browser and show a success state. Connect them to a CRM, email service or Vercel server action before launch.

## Data quality

The starter product records are based on the supplied 2026 source catalogue. Records marked `status: "verify"` contain explicit technical placeholders and must be checked before public launch. Current certification wording, product availability, contact details and dedicated Masterflex email/domain should also receive final commercial approval.
