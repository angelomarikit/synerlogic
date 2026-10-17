type PillarDiagramProps = {
  items: readonly { number: string; title: string }[]
}

export function PillarDiagram({ items }: PillarDiagramProps) {
  return (
    <svg viewBox="0 0 1040 148" aria-hidden="true" className="mt-10 hidden h-auto w-full md:block">
      <line x1="36" y1="28" x2="1004" y2="28" stroke="#0879CD" strokeOpacity="0.4" />
      {items.map((item, index) => {
        const x = 16 + index * 256
        return (
          <g key={item.number}>
            <circle cx={x + 12} cy="28" r="7" fill="#ffffff" stroke="#00B7EA" strokeWidth="2" />
            <text x={x} y="64" fill="#0879CD" fontFamily="Manrope, Inter, sans-serif" fontSize="12" fontWeight="700">
              {item.number}
            </text>
            <foreignObject x={x} y="74" width="240" height="64">
              <div
                style={{
                  color: '#061D38',
                  fontFamily: 'Manrope, Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </div>
            </foreignObject>
          </g>
        )
      })}
    </svg>
  )
}
