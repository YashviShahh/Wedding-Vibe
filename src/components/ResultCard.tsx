import type { OutfitSuggestion } from '../types'
import { buildShoppingLinks } from '../data/shoppingLinks'

export function ResultCard({ suggestion }: { suggestion: OutfitSuggestion }) {
  const links = buildShoppingLinks(suggestion.searchQuery)

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-rose-100 bg-white p-5 shadow-md">
      <h3 className="text-lg font-semibold text-rose-950">{suggestion.title}</h3>
      <p className="text-sm text-rose-700">{suggestion.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-800 transition hover:bg-rose-100"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  )
}
