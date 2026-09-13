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

export interface Filters {
  occasion: Occasion
  community: Community
  vibe: Vibe
  ageGroup: AgeGroup
  relation: Relation
}

export interface OutfitSuggestion {
  title: string
  description: string
  searchQuery: string
}

export interface ShoppingLink {
  label: string
  url: string
}
