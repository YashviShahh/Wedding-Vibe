import type { Community, PatternType } from '../types'

export interface CommunityStyle {
  label: string
  palette: [string, string, string]
  pattern: PatternType
}

export const COMMUNITY_STYLE: Record<Community, CommunityStyle> = {
  gujarati: { label: 'Kutchi mirror-work & bandhani', palette: ['#b3123a', '#f4a300', '#ffe8c2'], pattern: 'mirror-dot' },
  punjabi: { label: 'Patiala / Phulkari inspired', palette: ['#d94f70', '#ffd166', '#fff3e0'], pattern: 'phulkari-stitch' },
  marwari: { label: 'Rajasthani gota-patti work', palette: ['#e63946', '#f1c40f', '#fff0d9'], pattern: 'gota-lattice' },
  marathi: { label: 'Paithani-inspired', palette: ['#8e2434', '#e0a458', '#fbeee0'], pattern: 'geometric-weave' },
  bengali: { label: 'Bengali red & white silk inspired', palette: ['#a3123a', '#ffffff', '#f7c948'], pattern: 'geometric-weave' },
  'south-indian': { label: 'Kanjeevaram / temple jewellery inspired', palette: ['#7a1f3d', '#d4af37', '#fff8e1'], pattern: 'geometric-weave' },
  sindhi: { label: 'Sindhi aari embroidery', palette: ['#c1440e', '#f2a154', '#fff3e0'], pattern: 'mirror-dot' },
  muslim: { label: 'Gharara / sharara style', palette: ['#2e7d5b', '#d4af37', '#fdf6e3'], pattern: 'paisley' },
  christian: { label: 'Contemporary gown style', palette: ['#5b6470', '#b2bec3', '#ffffff'], pattern: 'plain-gradient' },
  'pan-indian': { label: 'Pan-Indian festive', palette: ['#c94277', '#f4a300', '#fff3e6'], pattern: 'plain-gradient' },
}
