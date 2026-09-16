import { useState } from 'react'
import { LookCard } from '../components/LookCard'
import { COMMUNITIES } from '../data/options'
import { EDITORS_PICKS } from '../data/looks'
import { TREND_NOTES } from '../data/trendNotes'
import type { Community } from '../types'

export function Trends() {
  const [community, setCommunity] = useState<Community | 'all'>('all')

  const picks =
    community === 'all'
      ? EDITORS_PICKS
      : EDITORS_PICKS.filter((l) => l.community === community || l.community === 'pan-indian')

  return (
    <main className="mx-auto max-w-5xl px-6 pt-10 pb-16">
      <h1 className="text-3xl font-bold text-rose-950">Trends & Editor's Picks</h1>
      <p className="mt-2 max-w-2xl text-rose-800">
        Hand-curated looks for common wedding-season functions, plus what's trending by
        community for the 2026 season.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCommunity('all')}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
            community === 'all' ? 'bg-rose-600 text-white' : 'bg-white text-rose-800 hover:bg-rose-100'
          }`}
        >
          All
        </button>
        {COMMUNITIES.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCommunity(c.value)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              community === c.value ? 'bg-rose-600 text-white' : 'bg-white text-rose-800 hover:bg-rose-100'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {community !== 'all' && (
        <p className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-800">
          {TREND_NOTES[community]}
        </p>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((look) => (
          <LookCard key={look.id} look={look} />
        ))}
      </div>
    </main>
  )
}
