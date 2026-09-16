import { NavLink } from 'react-router-dom'
import { useWishlist } from '../lib/wishlist'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive ? 'bg-rose-600 text-white' : 'text-rose-800 hover:bg-rose-100'
  }`

export function NavBar() {
  const { saved } = useWishlist()

  return (
    <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 pt-6">
      <NavLink to="/" className="text-lg font-bold text-rose-950">
        Wedding Vibe ✨
      </NavLink>
      <div className="flex flex-wrap gap-2">
        <NavLink to="/" end className={linkClass}>
          Find Outfits
        </NavLink>
        <NavLink to="/trends" className={linkClass}>
          Trends & Picks
        </NavLink>
        <NavLink to="/saved" className={linkClass}>
          Saved {saved.length > 0 && `(${saved.length})`}
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          How it works
        </NavLink>
      </div>
    </nav>
  )
}
