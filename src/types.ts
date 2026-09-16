export type Occasion =
  | 'mehendi'
  | 'haldi'
  | 'sangeet'
  | 'wedding'
  | 'reception'
  | 'engagement'
  | 'pooja'

export type Community =
  | 'gujarati'
  | 'punjabi'
  | 'marwari'
  | 'bengali'
  | 'south-indian'
  | 'marathi'
  | 'muslim'
  | 'sindhi'
  | 'christian'
  | 'pan-indian'

export type Vibe = 'traditional' | 'indo-western' | 'trendy'

export type AgeGroup = 'kids' | 'teen' | '20s-30s' | '40-plus'

export type Relation = 'bride' | 'close-family' | 'relative-friend' | 'guest'

export type PriceRange = '₹' | '₹₹' | '₹₹₹'

export interface Filters {
  occasion: Occasion
  community: Community
  vibe: Vibe
  ageGroup: AgeGroup
  relation: Relation
}

export type PatternType =
  | 'mirror-dot'
  | 'paisley'
  | 'sequin-scatter'
  | 'floral-block'
  | 'geometric-weave'
  | 'gota-lattice'
  | 'phulkari-stitch'
  | 'plain-gradient'

export type SilhouetteType =
  | 'lehenga'
  | 'saree'
  | 'sharara'
  | 'gown'
  | 'coord-set'
  | 'anarkali'

export interface VisualSpec {
  palette: [string, string, string]
  pattern: PatternType
  silhouette: SilhouetteType
}

export interface Look {
  id: string
  title: string
  note: string
  priceRange: PriceRange
  trendTag?: string
  visual: VisualSpec
  searchQuery: string
  occasion: Occasion
  community: Community
}

export interface ShoppingLink {
  label: string
  url: string
}
