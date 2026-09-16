import type { Filters, Look, PatternType, PriceRange, SilhouetteType } from '../types'
import { COMMUNITY_STYLE } from './communityStyle'

interface GarmentBase {
  title: string
  keyword: string
  vibeFit: Filters['vibe'][]
  silhouette: SilhouetteType
  patternOverride?: PatternType
  priceRange: PriceRange
  trendTag?: string
}

const OCCASION_GARMENTS: Record<Filters['occasion'], GarmentBase[]> = {
  mehendi: [
    { title: 'Flowy sharara set', keyword: 'sharara set mehendi', vibeFit: ['traditional', 'trendy'], silhouette: 'sharara', priceRange: '₹₹' },
    { title: 'Ethnic co-ord set', keyword: 'ethnic co-ord set green', vibeFit: ['indo-western', 'trendy'], silhouette: 'coord-set', patternOverride: 'floral-block', priceRange: '₹', trendTag: 'Rising this season' },
    { title: 'Cape-style anarkali', keyword: 'cape anarkali mehendi outfit', vibeFit: ['indo-western'], silhouette: 'anarkali', priceRange: '₹₹' },
  ],
  haldi: [
    { title: 'Yellow cotton lehenga', keyword: 'yellow cotton lehenga haldi', vibeFit: ['traditional'], silhouette: 'lehenga', patternOverride: 'floral-block', priceRange: '₹' },
    { title: 'Flowy sundress with dupatta', keyword: 'yellow floral dress haldi function', vibeFit: ['trendy', 'indo-western'], silhouette: 'gown', patternOverride: 'floral-block', priceRange: '₹', trendTag: 'Rising this season' },
    { title: 'Palazzo & crop top set', keyword: 'yellow palazzo crop top set haldi', vibeFit: ['indo-western', 'trendy'], silhouette: 'coord-set', patternOverride: 'floral-block', priceRange: '₹' },
  ],
  sangeet: [
    { title: 'Chaniya choli', keyword: 'chaniya choli sangeet garba', vibeFit: ['traditional'], silhouette: 'lehenga', priceRange: '₹₹' },
    { title: 'Sequined lehenga', keyword: 'sequin lehenga sangeet night', vibeFit: ['trendy', 'traditional'], silhouette: 'lehenga', patternOverride: 'sequin-scatter', priceRange: '₹₹₹', trendTag: 'Trending for 2026' },
    { title: 'Indo-western gown', keyword: 'indo western gown sangeet night', vibeFit: ['indo-western'], silhouette: 'gown', patternOverride: 'sequin-scatter', priceRange: '₹₹', trendTag: 'Trending for 2026' },
  ],
  engagement: [
    { title: 'Pastel lehenga', keyword: 'pastel lehenga engagement', vibeFit: ['traditional', 'trendy'], silhouette: 'lehenga', patternOverride: 'plain-gradient', priceRange: '₹₹', trendTag: 'Trending for 2026' },
    { title: 'Shimmer gown', keyword: 'shimmer gown engagement party', vibeFit: ['indo-western', 'trendy'], silhouette: 'gown', patternOverride: 'sequin-scatter', priceRange: '₹₹' },
    { title: 'Silk saree', keyword: 'silk saree engagement', vibeFit: ['traditional'], silhouette: 'saree', priceRange: '₹₹' },
  ],
  pooja: [
    { title: 'Silk saree', keyword: 'silk saree pooja ganesh sthapna', vibeFit: ['traditional'], silhouette: 'saree', priceRange: '₹₹' },
    { title: 'Simple cotton kurta set', keyword: 'cotton kurta set pooja function', vibeFit: ['trendy', 'traditional'], silhouette: 'coord-set', patternOverride: 'plain-gradient', priceRange: '₹' },
  ],
  wedding: [
    { title: 'Heavy bridal lehenga', keyword: 'bridal heavy lehenga wedding', vibeFit: ['traditional'], silhouette: 'lehenga', priceRange: '₹₹₹' },
    { title: 'Kanjeevaram / Banarasi silk saree', keyword: 'banarasi silk saree wedding', vibeFit: ['traditional'], silhouette: 'saree', priceRange: '₹₹₹' },
    { title: 'Embellished gown-lehenga fusion', keyword: 'gown lehenga fusion wedding reception', vibeFit: ['indo-western', 'trendy'], silhouette: 'gown', patternOverride: 'sequin-scatter', priceRange: '₹₹₹', trendTag: 'Trending for 2026' },
  ],
  reception: [
    { title: 'Shimmer sequin gown', keyword: 'sequin gown reception party wear', vibeFit: ['trendy', 'indo-western'], silhouette: 'gown', patternOverride: 'sequin-scatter', priceRange: '₹₹₹', trendTag: 'Trending for 2026' },
    { title: 'Statement saree with designer blouse', keyword: 'designer saree reception', vibeFit: ['traditional', 'trendy'], silhouette: 'saree', priceRange: '₹₹₹' },
    { title: 'Off-shoulder indo-western dress', keyword: 'off shoulder indo western dress reception', vibeFit: ['indo-western'], silhouette: 'gown', priceRange: '₹₹' },
  ],
}

const AGE_NOTE: Record<Filters['ageGroup'], string> = {
  kids: 'comfortable fabric, easy to move and play in',
  teen: 'fun colours, lighter work, easy draping',
  '20s-30s': 'bold colours and statement detailing',
  '40-plus': 'rich fabric and elegant, refined detailing',
}

const RELATION_NOTE: Record<Filters['relation'], string> = {
  bride: 'the most elaborate, custom/bridal-grade option',
  'close-family': 'a heavy festive pick, but not competing with the bride',
  'relative-friend': 'a mid-range festive look that photographs well',
  guest: 'a simple, elegant pick that respects the occasion without overdoing it',
}

function slugify(...parts: string[]): string {
  return parts.join('-').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function generateSuggestions(filters: Filters): Look[] {
  const garments = OCCASION_GARMENTS[filters.occasion]
  const matched = garments.filter((g) => g.vibeFit.includes(filters.vibe))
  const pool = matched.length > 0 ? matched : garments

  const community = COMMUNITY_STYLE[filters.community]
  const ageNote = AGE_NOTE[filters.ageGroup]
  const relationNote = RELATION_NOTE[filters.relation]

  return pool.slice(0, 3).map((g) => {
    const styleTag = filters.community === 'pan-indian' ? '' : `${community.label}, `
    return {
      id: slugify(filters.occasion, filters.community, filters.vibe, filters.ageGroup, filters.relation, g.title),
      title: g.title,
      note: `${styleTag}${ageNote} — ${relationNote}.`,
      priceRange: g.priceRange,
      trendTag: g.trendTag,
      searchQuery: `${filters.community === 'pan-indian' ? '' : filters.community + ' '}${g.keyword}`.trim(),
      occasion: filters.occasion,
      community: filters.community,
      visual: {
        palette: community.palette,
        pattern: g.patternOverride ?? community.pattern,
        silhouette: g.silhouette,
      },
    }
  })
}
