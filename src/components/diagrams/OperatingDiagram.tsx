type OperatingDiagramProps = {
  phases: readonly { index: string; title: string }[]
}

export function OperatingDiagram({ phases }: OperatingDiagramProps) {
  const width = 880
  const slot = width / phases.length

  return (
    <svg viewBox={`0 0 ${width} 150`} aria-hidden="true" className="h-auto w-full">
      <rect width={width} height="150" rx="18" fill="#EAF3F9" />
      <line x1="70" y1="58" x2={width - 70} y2="58" stroke="#0879CD" strokeOpacity="0.5" />
      {phases.map((phase, index) => {
        const x = slot * index + slot / 2
        return (
          <g key={phase.title}>
            <circle cx={x} cy="58" r="16" fill="#ffffff" stroke="#0879CD" />
            <text x={x} y="62" textAnchor="middle" fill="#0879CD" fontFamily="Manrope, Inter, sans-serif" fontSize="10" fontWeight="700">
              {phase.index}
            </text>
            <text x={x} y="108" textAnchor="middle" fill="#061D38" fontFamily="Manrope, Inter, sans-serif" fontSize="15" fontWeight="700">
              {phase.title}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
