import { useState } from 'react'
import type { Look } from '../types'
import { buildShoppingLinks } from '../data/shoppingLinks'
import { useWishlist } from '../lib/wishlist'
import { LookVisual } from './LookVisual'

export function LookCard({ look }: { look: Look }) {
  const { isSaved, toggle } = useWishlist()
  const [expanded, setExpanded] = useState(false)
  const links = buildShoppingLinks(look.searchQuery)
  const saved = isSaved(look.id)

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-md">
      <div className="relative">
        <LookVisual visual={look.visual} />
        <button
          type="button"
          onClick={() => toggle(look)}
          aria-label={saved ? 'Remove from saved looks' : 'Save this look'}
          aria-pressed={saved}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-sm transition ${
            saved ? 'bg-rose-600 text-white' : 'bg-white/90 text-rose-500 hover:bg-white'
          }`}
        >
          {saved ? '♥' : '♡'}
        </button>
        {look.trendTag && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-400/95 px-2 py-0.5 text-xs font-semibold text-amber-950 shadow-sm">
            {look.trendTag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-rose-950">{look.title}</h3>
          <span className="shrink-0 text-sm font-medium text-rose-500">{look.priceRange}</span>
        </div>
        <p className="text-sm text-rose-700">{look.note}</p>

        <div className="mt-auto pt-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-semibold text-rose-600 hover:text-rose-800"
          >
            {expanded ? 'Hide shopping links ▲' : 'Shop this look ▾'}
          </button>
          {expanded && (
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
          )}
        </div>
      </div>
    </div>
  )
}
