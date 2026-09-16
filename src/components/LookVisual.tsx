import type { PatternType, SilhouetteType, VisualSpec } from '../types'

function PatternOverlay({ pattern, accent }: { pattern: PatternType; accent: string }) {
  const dots = Array.from({ length: 24 }, (_, i) => ({
    cx: 15 + (i % 6) * 32,
    cy: 15 + Math.floor(i / 6) * 32,
  }))

  switch (pattern) {
    case 'mirror-dot':
      return (
        <g opacity={0.55}>
          {dots.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={4} fill={accent} stroke="white" strokeWidth={0.6} />
          ))}
        </g>
      )
    case 'sequin-scatter':
      return (
        <g opacity={0.6}>
          {dots.map((d, i) => (
            <circle
              key={i}
              cx={d.cx + (i % 2 === 0 ? 8 : -6)}
              cy={d.cy + (i % 3 === 0 ? 10 : -4)}
              r={2}
              fill={accent}
            />
          ))}
        </g>
      )
    case 'floral-block':
      return (
        <g opacity={0.5}>
          {dots.map((d, i) => (
            <g key={i} transform={`translate(${d.cx} ${d.cy})`}>
              <circle r={5} fill={accent} />
              <circle r={2} fill="white" />
            </g>
          ))}
        </g>
      )
    case 'geometric-weave':
      return (
        <g opacity={0.45} stroke={accent} strokeWidth={2}>
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1={0} y1={i * 30} x2={200} y2={i * 30 - 40} />
          ))}
        </g>
      )
    case 'gota-lattice':
      return (
        <g opacity={0.5} stroke={accent} strokeWidth={1.5} fill="none">
          {Array.from({ length: 5 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 40 - 10}
                y={row * 40 - 10}
                width={20}
                height={20}
                transform={`rotate(45 ${col * 40} ${row * 40})`}
              />
            )),
          )}
        </g>
      )
    case 'phulkari-stitch':
      return (
        <g opacity={0.55} stroke={accent} strokeWidth={2.5} strokeLinecap="round">
          {dots.map((d, i) => (
            <path key={i} d={`M ${d.cx - 6} ${d.cy} L ${d.cx} ${d.cy - 6} L ${d.cx + 6} ${d.cy} L ${d.cx} ${d.cy + 6} Z`} />
          ))}
        </g>
      )
    case 'paisley':
      return (
        <g opacity={0.45} fill={accent}>
          {dots.slice(0, 12).map((d, i) => (
            <path
              key={i}
              transform={`translate(${d.cx} ${d.cy}) scale(0.5)`}
              d="M0 0 C 10 -10, 10 10, 0 18 C -8 12, -6 2, 0 0 Z"
            />
          ))}
        </g>
      )
    default:
      return null
  }
}

function Silhouette({ type }: { type: SilhouetteType }) {
  const fill = 'rgba(255,255,255,0.92)'
  const stroke = 'rgba(60,20,30,0.35)'
  switch (type) {
    case 'lehenga':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M85 60 L115 60 L122 110 L78 110 Z" />
          <path d="M78 110 L122 110 L155 215 L45 215 Z" />
        </g>
      )
    case 'saree':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M88 55 L112 55 L118 215 L82 215 Z" />
          <path d="M100 58 L150 210 L136 216 L92 70 Z" opacity={0.85} />
        </g>
      )
    case 'sharara':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M82 55 L118 55 L124 130 L76 130 Z" />
          <path d="M76 130 L98 130 L88 215 L55 215 Z" />
          <path d="M102 130 L124 130 L145 215 L112 215 Z" />
        </g>
      )
    case 'gown':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M88 55 L112 55 L120 140 L112 145 L88 145 L80 140 Z" />
          <path d="M80 140 L120 140 L138 215 L62 215 Z" />
        </g>
      )
    case 'coord-set':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M83 55 L117 55 L121 95 L79 95 Z" />
          <path d="M75 130 L125 130 L135 215 L65 215 Z" />
        </g>
      )
    case 'anarkali':
      return (
        <g fill={fill} stroke={stroke} strokeWidth={1.5}>
          <path d="M87 55 L113 55 L120 95 L80 95 Z" />
          <path d="M80 95 L120 95 L160 215 L40 215 Z" />
        </g>
      )
    default:
      return null
  }
}

export function LookVisual({ visual, className = '' }: { visual: VisualSpec; className?: string }) {
  const [c1, c2, c3] = visual.palette
  const gradId = `grad-${c1.replace('#', '')}-${c2.replace('#', '')}`

  return (
    <svg viewBox="0 0 200 240" className={`w-full rounded-xl ${className}`} role="img" aria-label="Outfit style preview">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="200" height="240" rx="14" fill={`url(#${gradId})`} />
      <PatternOverlay pattern={visual.pattern} accent={c3} />
      <Silhouette type={visual.silhouette} />
    </svg>
  )
}
