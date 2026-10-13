# Zarein Energy — website

The Zarein Energy website: **Next.js 15 (App Router) + Tailwind CSS 4**. It is one responsive codebase. The desktop and mobile designs are the same pages, and they adapt to the screen size.

## Run it locally

You need [Node.js 20 or newer](https://nodejs.org).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Put it online (free, about 5 minutes)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), choose **Add New → Project**, and import the repository. Keep the default settings and press **Deploy**.
3. To use zareinenergy.com, open the project's **Settings → Domains** in Vercel, add the domain, and follow the DNS instructions it shows.

To check the production build on your own machine first, run `npm run build && npm start`.

## Where things live

| What | Where |
| --- | --- |
| **All text, projects, team, partners, news** | `lib/content.ts` (edit copy here) |
| Pages | `app/page.tsx` (home), `app/about`, `app/projects`, `app/investors`, `app/partners`, `app/sustainability`, `app/news`, `app/contact` |
| Header and mobile menu | `components/SiteHeader.tsx` |
| Inner-page hero | `components/PageHero.tsx` |
| Footer | `components/SiteFooter.tsx` |
| Colours, font settings, animations | `app/globals.css` (the `@theme` block) |
| Photos | `public/images/` |
| Logos | `public/logos/` |

## Before launch: content to fill in

Anything in `[square brackets]` is a placeholder. Search the project for `[` to find them all. Most are in `lib/content.ts`.

- **Project data:** capacities (MW / MMscfd), status, and the UPDC location.
- **Numbers:** generation capacity, offtake term, and capital being raised (home and investors pages).
- **Contact details:** phone number and office address (`site` in `lib/content.ts`).
- **Social links:** LinkedIn, X and Instagram URLs (`site.social`).
- **Team portraits:** replace the initials blocks in `app/about/page.tsx` with photos.
- **News:** real articles to replace the sample headlines (`newsItems`, `homeInsights`).
- **ESG figures:** the numbers on the sustainability page (`impactStats`).
- **Map:** embed a map on the contact page once the address is confirmed.
- **Photos:** the stock photos are placeholders. Confirm their licences or replace them with Zarein's own photography. The technician photo on the Partners page shows another company's logo, so replace it before launch.

## Forms

- **Contact form** (`components/ContactForm.tsx`): this opens the visitor's email app with the message filled in. It sends to `invest@` for investment enquiries and to `info@` for everything else. To have the site send messages itself, connect a form service such as Formspree or Resend in `handleSubmit`.
- **Newsletter** (`components/NewsletterForm.tsx`): this shows a confirmation only. Connect it to the email provider you choose (for example Mailchimp or Brevo).

## Notes

- **Font:** Archivo loads from Google Fonts, including its wide "expanded" cut used for headings.
- **Images:** these go through `next/image`, so phones receive smaller, modern-format files, which suits mobile data.
- **Motion:** this is turned off automatically for visitors who set "reduce motion" on their device.
