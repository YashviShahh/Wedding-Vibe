export function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-10 pb-16">
      <h1 className="text-3xl font-bold text-rose-950">How Wedding Vibe works</h1>

      <section className="mt-6 space-y-3 text-rose-800">
        <h2 className="text-lg font-semibold text-rose-950">The problem</h2>
        <p>
          Finding a wedding-function outfit means checking Myntra, Ajio, Nykaa Fashion, Kalki,
          Mirraw and more separately — and none of them let you filter by occasion (mehendi vs
          sangeet vs reception), community (a Gujarati garba look is not a Bengali wedding look),
          or vibe (a Mumbai sangeet reads very differently from one in Gujarat).
        </p>
        <h2 className="text-lg font-semibold text-rose-950">Why not just use Google Shopping?</h2>
        <p>
          Google Shopping is genuinely good at showing product photos and prices in one place —
          but it has no idea what a "haldi function" or "Gujarati garba vibe" means. It filters by
          product attributes (size, color, brand), not by occasion, community, or cultural
          context. That gap — the cultural/occasion layer — is what this site adds on top.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-rose-800">
        <h2 className="text-lg font-semibold text-rose-950">What's real right now vs. what isn't</h2>
        <p>
          The outfit visuals you see are <strong>original illustrations</strong> (a colour
          palette, a pattern, and a garment silhouette), not live photos pulled from Myntra or
          Ajio. That's a deliberate choice, not a shortcut: pulling real product photos and prices
          requires either an approved affiliate/product-feed partnership with retailers, or
          manually sourcing and licensing each image — both take real setup time and, for
          scraping retailer sites directly, would likely violate their terms of service anyway.
        </p>
        <p>
          The filtering logic (which garments suit which occasion/community/vibe/age/relation) is
          hand-written rules and hand-curated editorial picks — genuine domain knowledge, not a
          trained AI model yet.
        </p>
      </section>

      <section className="mt-8 space-y-3 text-rose-800">
        <h2 className="text-lg font-semibold text-rose-950">Roadmap to the real version</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            <strong>Affiliate product feeds</strong> — apply to networks like EarnKaro, INRDeals,
            Admitad, or vCommission. Once approved, they provide licensed product data (real
            photos, live prices, stock status) for participating retailers, which replaces the
            illustrations with real product cards.
          </li>
          <li>
            <strong>A small content database</strong> — move curated looks out of code into a
            simple database so new looks can be added without a developer.
          </li>
          <li>
            <strong>Real AI matching</strong> — an LLM-based free-text understanding layer
            (replacing today's keyword-based "Smart Match"), and using AI to help tag new looks by
            occasion/community/vibe as they're added.
          </li>
          <li>
            <strong>Sizes, colors, price-range filters</strong> — once real product data is
            flowing in from a feed, these become meaningful filters instead of decorative ones.
          </li>
        </ol>
      </section>

      <section className="mt-8 space-y-3 text-rose-800">
        <h2 className="text-lg font-semibold text-rose-950">How this makes money</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Affiliate commission on outbound shopping clicks — the primary revenue path.</li>
          <li>Paid/sponsored placements for boutiques and independent designers.</li>
          <li>A premium "full wedding wardrobe planning" tier, later.</li>
          <li>Lead-gen commission with local boutiques for custom stitching.</li>
        </ul>
      </section>
    </main>
  )
}
