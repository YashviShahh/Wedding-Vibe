# Wedding Vibe

Pick your **function** (Mehendi, Haldi, Sangeet/Garba, Wedding, Reception...),
your **community** (Gujarati, Punjabi, Marwari, Bengali, South Indian...),
your **vibe** (Traditional / Indo-Western / Trendy), your **age group**, and
your **relation** to the bride/groom — and get outfit suggestions with direct
search links into Myntra, Ajio, Nykaa Fashion, Kalki Fashion, Mirraw, and
Pinterest, instead of browsing each site separately.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (fastest path — Vercel, free)

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. "Add New Project" → import this repo → framework preset auto-detects
   **Vite** → click Deploy.
4. You get a live URL (`your-project.vercel.app`) in under 2 minutes. Every
   push to the branch you deploy from auto-redeploys.

(Netlify works the same way if you prefer it.)

## How it works right now (Phase 1 — MVP)

- No backend, no database. All the "which outfit fits which occasion/
  community/vibe/age/relation" logic lives in
  `src/data/outfitEngine.ts` as hand-written rules.
- `src/data/shoppingLinks.ts` turns a suggestion into direct search-result
  links on real shopping sites (`?q=` style search deep-links).
- This is enough to demo the full user flow end-to-end and is 100% static,
  so it's free to host.

## Roadmap

**Phase 2 — Content without code**
Move outfit rules into a small database (e.g. Supabase, free tier) with a
simple admin form, so new looks/trends can be added without touching code.

**Phase 3 — Actual monetization**
Replace plain search links with **affiliate links** via an aggregator
network (EarnKaro / INRDeals / Admitad / vCommission) that covers Myntra,
Ajio, Nykaa, Meesho, etc. Every outbound click becomes a tracked, paid
click. Add sponsored placements for boutiques/designers.

**Phase 4 — AI layer**
- Free-text box ("describe your wedding") → LLM maps it to filters.
- Use an LLM to read trend content (captions, descriptions) and
  auto-tag new looks by occasion/community/vibe instead of hand-writing
  every rule.

**Phase 5 — Scale**
Sizes, colors, price range filters, saved outfits, accounts, real product
data (not just search links) via retailer APIs/feeds where available.

## Monetization summary

1. Affiliate commission on outbound shopping clicks (primary).
2. Paid/sponsored boutique & designer listings.
3. Premium "AI stylist" — full wedding wardrobe planning (later).
4. Lead-gen commission with local boutiques for custom stitching.
