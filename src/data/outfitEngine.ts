import type { Filters, OutfitSuggestion } from '../types'

interface GarmentBase {
  garment: string
  keyword: string
  vibeFit: Filters['vibe'][]
}

const OCCASION_GARMENTS: Record<Filters['occasion'], GarmentBase[]> = {
  mehendi: [
    { garment: 'flowy sharara set', keyword: 'sharara set mehendi', vibeFit: ['traditional', 'trendy'] },
    { garment: 'ethnic co-ord set', keyword: 'ethnic co-ord set green', vibeFit: ['indo-western', 'trendy'] },
    { garment: 'cape-style anarkali', keyword: 'cape anarkali mehendi outfit', vibeFit: ['indo-western'] },
  ],
  haldi: [
    { garment: 'yellow cotton lehenga', keyword: 'yellow cotton lehenga haldi', vibeFit: ['traditional'] },
    { garment: 'flowy sundress with dupatta', keyword: 'yellow floral dress haldi function', vibeFit: ['trendy', 'indo-western'] },
    { garment: 'palazzo & crop top set', keyword: 'yellow palazzo crop top set haldi', vibeFit: ['indo-western', 'trendy'] },
  ],
  sangeet: [
    { garment: 'chaniya choli', keyword: 'chaniya choli sangeet garba', vibeFit: ['traditional'] },
    { garment: 'sequined lehenga', keyword: 'sequin lehenga sangeet night', vibeFit: ['trendy', 'traditional'] },
    { garment: 'indo-western gown', keyword: 'indo western gown sangeet night', vibeFit: ['indo-western'] },
  ],
  engagement: [
    { garment: 'pastel lehenga', keyword: 'pastel lehenga engagement', vibeFit: ['traditional', 'trendy'] },
    { garment: 'shimmer gown', keyword: 'shimmer gown engagement party', vibeFit: ['indo-western', 'trendy'] },
    { garment: 'silk saree', keyword: 'silk saree engagement', vibeFit: ['traditional'] },
  ],
  pooja: [
    { garment: 'silk saree', keyword: 'silk saree pooja ganesh sthapna', vibeFit: ['traditional'] },
    { garment: 'simple cotton kurta set', keyword: 'cotton kurta set pooja function', vibeFit: ['trendy', 'traditional'] },
  ],
  wedding: [
    { garment: 'heavy bridal lehenga', keyword: 'bridal heavy lehenga wedding', vibeFit: ['traditional'] },
    { garment: 'kanjeevaram/banarasi silk saree', keyword: 'banarasi silk saree wedding', vibeFit: ['traditional'] },
    { garment: 'embellished gown-lehenga fusion', keyword: 'gown lehenga fusion wedding reception', vibeFit: ['indo-western', 'trendy'] },
  ],
  reception: [
    { garment: 'shimmer sequin gown', keyword: 'sequin gown reception party wear', vibeFit: ['trendy', 'indo-western'] },
    { garment: 'statement saree with designer blouse', keyword: 'designer saree reception', vibeFit: ['traditional', 'trendy'] },
    { garment: 'off-shoulder indo-western dress', keyword: 'off shoulder indo western dress reception', vibeFit: ['indo-western'] },
  ],
}

const COMMUNITY_STYLE: Record<Filters['community'], string> = {
  gujarati: 'Kutchi mirror-work & bandhani style',
  punjabi: 'Patiala / Phulkari inspired',
  marwari: 'Rajasthani gota-patti work',
  marathi: 'Paithani-inspired',
  bengali: 'Bengali red & white silk inspired',
  'south-indian': 'Kanjeevaram / temple jewellery inspired',
  sindhi: 'Sindhi aari embroidery',
  muslim: 'Gharara / sharara style',
  christian: 'Contemporary gown style',
  'pan-indian': 'Pan-Indian festive',
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

export function generateSuggestions(filters: Filters): OutfitSuggestion[] {
  const garments = OCCASION_GARMENTS[filters.occasion]
  const matched = garments.filter((g) => g.vibeFit.includes(filters.vibe))
  const pool = matched.length > 0 ? matched : garments

  const communityStyle = COMMUNITY_STYLE[filters.community]
  const ageNote = AGE_NOTE[filters.ageGroup]
  const relationNote = RELATION_NOTE[filters.relation]

  return pool.slice(0, 3).map((g) => {
    const styleTag = filters.community === 'pan-indian' ? '' : `${communityStyle}, `
    return {
      title: `${g.garment[0].toUpperCase()}${g.garment.slice(1)}`,
      description: `${styleTag}${ageNote} — ${relationNote}.`,
      searchQuery: `${filters.community === 'pan-indian' ? '' : filters.community + ' '}${g.keyword}`.trim(),
    }
  })
}
