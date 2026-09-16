import { Link } from 'react-router-dom'
import { LookCard } from '../components/LookCard'
import { useWishlist } from '../lib/wishlist'

export function Saved() {
  const { saved } = useWishlist()

  return (
    <main className="mx-auto max-w-5xl px-6 pt-10 pb-16">
      <h1 className="text-3xl font-bold text-rose-950">Your Saved Looks</h1>
      <p className="mt-2 text-rose-800">
        Tap the heart on any look to save it here — it stays on this device.
      </p>

      {saved.length === 0 ? (
        <p className="mt-8 rounded-xl bg-rose-50 p-6 text-center text-rose-700">
          Nothing saved yet.{' '}
          <Link to="/" className="font-semibold text-rose-600 underline">
            Find outfits
          </Link>{' '}
          or browse{' '}
          <Link to="/trends" className="font-semibold text-rose-600 underline">
            Trends & Picks
          </Link>{' '}
          to save some.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      )}
    </main>
  )
}
