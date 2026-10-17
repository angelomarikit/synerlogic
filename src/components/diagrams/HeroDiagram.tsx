const nodes = [
  { x: 24, y: 36, title: 'Strategic', detail: 'consultancy' },
  { x: 416, y: 36, title: 'Systems &', detail: 'technology' },
  { x: 24, y: 392, title: 'Gaming', detail: 'equipment' },
  { x: 416, y: 392, title: 'Operational', detail: 'support' },
]

export function HeroDiagram() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-labelledby="hero-diagram-title hero-diagram-desc" className="h-auto w-full">
      <title id="hero-diagram-title">Connected operating disciplines</title>
      <desc id="hero-diagram-desc">
        A schematic linking strategic consultancy, systems and technology, gaming equipment, and operational support through execution.
      </desc>
      <rect width="640" height="520" rx="24" fill="#EAF3F9" />
      <g stroke="#0879CD" strokeOpacity="0.14">
        {Array.from({ length: 17 }, (_, index) => (
          <line key={`v-${index}`} x1={32 + index * 36} y1="20" x2={32 + index * 36} y2="500" />
        ))}
        {Array.from({ length: 14 }, (_, index) => (
          <line key={`h-${index}`} x1="20" y1={20 + index * 36} x2="620" y2={20 + index * 36} />
        ))}
      </g>
      <g fill="none" stroke="#061D38" strokeWidth="1.25">
        <path d="M24 24h16M24 24v16M616 24h-16M616 24v16M24 496h16M24 496v-16M616 496h-16M616 496v-16" />
      </g>
      <g fill="none" stroke="#0879CD" strokeWidth="1.4">
        <path d="M224 84C300 84 286 210 320 214" />
        <path d="M416 84C340 84 354 210 320 214" />
        <path d="M224 436C300 436 286 310 320 306" />
        <path d="M416 436C340 436 354 310 320 306" />
      </g>
      <circle cx="320" cy="260" r="52" fill="#ffffff" stroke="#061D38" strokeWidth="1.25" />
      <text x="320" y="265" textAnchor="middle" fill="#061D38" fontFamily="Manrope, Inter, sans-serif" fontSize="14" fontWeight="700">
        Execution
      </text>
      {nodes.map((node) => (
        <g key={`${node.title}-${node.y}`}>
          <rect x={node.x} y={node.y} width="200" height="84" rx="16" fill="#ffffff" stroke="#d5e3ee" />
          <rect x={node.x} y={node.y} width="4" height="84" fill="#00B7EA" />
          <text x={node.x + 20} y={node.y + 38} fill="#061D38" fontFamily="Manrope, Inter, sans-serif" fontSize="16" fontWeight="700">
            {node.title}
          </text>
          <text x={node.x + 20} y={node.y + 60} fill="#475569" fontFamily="Inter, sans-serif" fontSize="14">
            {node.detail}
          </text>
        </g>
      ))}
    </svg>
  )
}
