import type { ShoppingLink } from '../types'

export function buildShoppingLinks(searchQuery: string): ShoppingLink[] {
  const q = encodeURIComponent(searchQuery)

  return [
    { label: 'Myntra', url: `https://www.myntra.com/search?q=${q}` },
    { label: 'Ajio', url: `https://www.ajio.com/search/?text=${q}` },
    { label: 'Nykaa Fashion', url: `https://www.nykaafashion.com/search?q=${q}` },
    { label: 'Kalki Fashion', url: `https://www.kalkifashion.com/catalogsearch/result/?q=${q}` },
    { label: 'Mirraw', url: `https://www.mirraw.com/search?q=${q}` },
    { label: 'Pinterest (inspo)', url: `https://www.pinterest.com/search/pins/?q=${q}` },
  ]
}
