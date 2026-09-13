import type { AgeGroup, Community, Occasion, Relation, Vibe } from '../types'

export const OCCASIONS: { value: Occasion; label: string; emoji: string }[] = [
  { value: 'mehendi', label: 'Mehendi', emoji: '🌿' },
  { value: 'haldi', label: 'Haldi', emoji: '🌼' },
  { value: 'sangeet', label: 'Sangeet / Garba Night', emoji: '💃' },
  { value: 'engagement', label: 'Engagement', emoji: '💍' },
  { value: 'pooja', label: 'Ganesh Sthapna / Pooja', emoji: '🪔' },
  { value: 'wedding', label: 'Wedding Ceremony', emoji: '👰' },
  { value: 'reception', label: 'Reception', emoji: '✨' },
]

export const COMMUNITIES: { value: Community; label: string }[] = [
  { value: 'gujarati', label: 'Gujarati' },
  { value: 'punjabi', label: 'Punjabi' },
  { value: 'marwari', label: 'Marwari / Rajasthani' },
  { value: 'marathi', label: 'Marathi' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'south-indian', label: 'South Indian' },
  { value: 'sindhi', label: 'Sindhi' },
  { value: 'muslim', label: 'Muslim' },
  { value: 'christian', label: 'Christian' },
  { value: 'pan-indian', label: 'No particular / Mixed' },
]

export const VIBES: { value: Vibe; label: string; hint: string }[] = [
  { value: 'traditional', label: 'Traditional', hint: 'Full ethnic, classic drapes & work' },
  { value: 'indo-western', label: 'Indo-Western', hint: 'Fusion cuts, mixed silhouettes' },
  { value: 'trendy', label: 'Trendy / Modern', hint: 'Contemporary, pastel, minimal work' },
]

export const AGE_GROUPS: { value: AgeGroup; label: string }[] = [
  { value: 'kids', label: 'Kids (under 12)' },
  { value: 'teen', label: 'Teen (13-19)' },
  { value: '20s-30s', label: '20s - 30s' },
  { value: '40-plus', label: '40+' },
]

export const RELATIONS: { value: Relation; label: string }[] = [
  { value: 'bride', label: "I'm the bride" },
  { value: 'close-family', label: 'Close family (sister, cousin, mom)' },
  { value: 'relative-friend', label: 'Relative / friend of bride or groom' },
  { value: 'guest', label: 'Guest' },
]
