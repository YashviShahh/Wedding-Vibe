import type { Filters } from '../types'

const OCCASION_KEYWORDS: [RegExp, Filters['occasion']][] = [
  [/mehendi|mehndi/i, 'mehendi'],
  [/haldi/i, 'haldi'],
  [/garba|sangeet/i, 'sangeet'],
  [/reception/i, 'reception'],
  [/engagement|roka/i, 'engagement'],
  [/pooja|puja|sthapna|ganesh/i, 'pooja'],
  [/wedding|shaadi|vivah/i, 'wedding'],
]

const COMMUNITY_KEYWORDS: [RegExp, Filters['community']][] = [
  [/gujarat/i, 'gujarati'],
  [/punjab/i, 'punjabi'],
  [/marwari|rajasthan/i, 'marwari'],
  [/marathi|maharashtra/i, 'marathi'],
  [/bengali|bangla/i, 'bengali'],
  [/south indian|tamil|telugu|kannada|kerala/i, 'south-indian'],
  [/sindhi/i, 'sindhi'],
  [/muslim|nikah|walima/i, 'muslim'],
  [/christian/i, 'christian'],
]

const VIBE_KEYWORDS: [RegExp, Filters['vibe']][] = [
  [/mumbai|trendy|modern|fusion/i, 'trendy'],
  [/indo.?western/i, 'indo-western'],
  [/traditional|classic|full ethnic/i, 'traditional'],
]

const AGE_KEYWORDS: [RegExp, Filters['ageGroup']][] = [
  [/kid|child/i, 'kids'],
  [/teen/i, 'teen'],
  [/40|mom|mother|aunt|older/i, '40-plus'],
]

const RELATION_KEYWORDS: [RegExp, Filters['relation']][] = [
  [/i'?m the bride|as the bride/i, 'bride'],
  [/sister|cousin|close family|my mom|my mother/i, 'close-family'],
  [/guest/i, 'guest'],
  [/friend|relative/i, 'relative-friend'],
]

function firstMatch<T>(text: string, rules: [RegExp, T][]): T | undefined {
  for (const [regex, value] of rules) {
    if (regex.test(text)) return value
  }
  return undefined
}

export function smartMatch(text: string, current: Filters): Filters {
  return {
    occasion: firstMatch(text, OCCASION_KEYWORDS) ?? current.occasion,
    community: firstMatch(text, COMMUNITY_KEYWORDS) ?? current.community,
    vibe: firstMatch(text, VIBE_KEYWORDS) ?? current.vibe,
    ageGroup: firstMatch(text, AGE_KEYWORDS) ?? current.ageGroup,
    relation: firstMatch(text, RELATION_KEYWORDS) ?? current.relation,
  }
}
