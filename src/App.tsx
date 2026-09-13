import { useState } from 'react'
import { FilterForm } from './components/FilterForm'
import { ResultCard } from './components/ResultCard'
import { generateSuggestions } from './data/outfitEngine'
import type { Filters, OutfitSuggestion } from './types'

const DEFAULT_FILTERS: Filters = {
  occasion: 'sangeet',
  community: 'gujarati',
  vibe: 'traditional',
  ageGroup: '20s-30s',
  relation: 'relative-friend',
}

function App() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [results, setResults] = useState<OutfitSuggestion[] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50">
      <header className="mx-auto max-w-5xl px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl font-bold text-rose-950 sm:text-4xl">
          Wedding Vibe <span className="text-rose-600">✨</span>
        </h1>
        <p className="mt-2 text-rose-800">
          Tell us your function, your culture, and your vibe — we'll point you straight to the
          right outfits, no more scrolling through ten apps.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <FilterForm
          filters={filters}
          onChange={setFilters}
          onSubmit={() => setResults(generateSuggestions(filters))}
        />

        {results && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-semibold text-rose-950">
              Picks for your {filters.occasion.replace('-', ' ')}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <ResultCard key={r.title} suggestion={r} />
              ))}
            </div>
            <p className="mt-6 text-xs text-rose-500">
              Links open live search results on each store filtered to your pick. More stores,
              sizes, colours and price filters are coming soon.
            </p>
          </section>
        )}
      </main>

      <footer className="border-t border-rose-100 py-6 text-center text-xs text-rose-400">
        Built with 💛 for wedding season — follow the build on X.
      </footer>
    </div>
  )
}

export default App
