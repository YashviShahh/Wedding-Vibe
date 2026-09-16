import { useState } from 'react'
import { FilterForm } from '../components/FilterForm'
import { LookCard } from '../components/LookCard'
import { generateSuggestions } from '../data/outfitEngine'
import { smartMatch } from '../lib/smartMatch'
import type { Filters, Look } from '../types'

const DEFAULT_FILTERS: Filters = {
  occasion: 'sangeet',
  community: 'gujarati',
  vibe: 'traditional',
  ageGroup: '20s-30s',
  relation: 'relative-friend',
}

export function Home() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [results, setResults] = useState<Look[] | null>(null)
  const [smartText, setSmartText] = useState('')

  function runSearch(f: Filters) {
    setFilters(f)
    setResults(generateSuggestions(f))
  }

  return (
    <>
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-bold text-rose-950 sm:text-4xl">
          Find the right outfit, function by function
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-rose-800">
          Tell us your function, your culture, and your vibe — we'll point you straight to the
          right outfits, no more scrolling through ten apps.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 rounded-2xl border border-rose-100 bg-white/70 p-4 shadow-sm">
          <label className="block text-sm font-medium text-rose-900" htmlFor="smart-match">
            Smart Match (beta) — describe your function in your own words
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              id="smart-match"
              type="text"
              placeholder="e.g. Gujarati sangeet in Mumbai, trendy, I'm a guest in my 20s"
              className="flex-1 rounded-lg border border-rose-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none"
              value={smartText}
              onChange={(e) => setSmartText(e.target.value)}
            />
            <button
              type="button"
              onClick={() => runSearch(smartMatch(smartText, filters))}
              className="rounded-lg bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-200"
            >
              Match filters
            </button>
          </div>
          <p className="mt-1 text-xs text-rose-400">
            This is simple keyword matching, not a live AI model yet — it fills in the filters
            below so you can double check them.
          </p>
        </div>

        <FilterForm filters={filters} onChange={setFilters} onSubmit={() => runSearch(filters)} />

        {results && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-rose-950">
              Picks for your {filters.occasion.replace('-', ' ')}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <LookCard key={r.id} look={r} />
              ))}
            </div>
            <p className="mt-6 text-xs text-rose-500">
              Visuals here are original style illustrations (palette + pattern + silhouette), not
              live retailer photos yet — see "How it works" for why, and what's next.
            </p>
          </section>
        )}
      </main>
    </>
  )
}
