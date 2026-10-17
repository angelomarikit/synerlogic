type LifecycleDiagramProps = {
  stages: readonly { index: string; title: string }[]
}

export function LifecycleDiagram({ stages }: LifecycleDiagramProps) {
  const width = 920
  const step = width / stages.length

  return (
    <svg viewBox={`0 0 ${width} 120`} aria-hidden="true" className="h-auto w-full">
      <line x1="48" y1="36" x2={width - 48} y2="36" stroke="#d5e3ee" strokeWidth="1.5" />
      {stages.map((stage, index) => {
        const x = step * index + step / 2
        return (
          <g key={stage.title}>
            <circle cx={x} cy="36" r="15" fill="#ffffff" stroke="#0879CD" />
            <text x={x} y="40" textAnchor="middle" fill="#0879CD" fontFamily="Manrope, Inter, sans-serif" fontSize="10" fontWeight="700">
              {stage.index}
            </text>
            <text x={x} y="78" textAnchor="middle" fill="#061D38" fontFamily="Manrope, Inter, sans-serif" fontSize="15" fontWeight="650">
              {stage.title}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
