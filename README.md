# Good Boys & Gals

UK dog wellbeing site: behaviour guides, free tools, affiliate kit slots and email capture. Next.js (App Router), no database.

## Run

```
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Deploy (Vercel)

Import the repo in Vercel and set two environment variables:

- `NEXT_PUBLIC_SITE_URL`: the live URL, e.g. `https://goodboysandgals.co.uk`
- `SUBSCRIBE_WEBHOOK_URL`: endpoint that receives `{email, source, at}` as JSON. Until this is set the sign-up form returns an error instead of pretending to save the address.

## Where things live

| File | What it holds |
|---|---|
| `data/hubs.ts` | The four behaviour guides. Add a guide by adding an object. |
| `data/safety.ts` | Foods and plants for "Is it safe for my dog?". One page per item; every item needs a source. |
| `data/costs.ts` | PDSA cost figures (2024). |
| `data/gear.ts` | Affiliate slots. Add `url` and `merchant` to turn a slot into a link. |
| `data/sources.ts` | Every source, with URL and date last checked. |

## Rules the content follows

- No fact without a source in `data/sources.ts`.
- `reviewedBy` on a guide stays `null` until a qualified person has reviewed it. The page shows nothing until then.
- Gear slots without a `url` render as text, never as a dead link. The affiliate disclosure line appears only when a list contains a live link.
