type VisualPanelProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

function floatDelay(src: string) {
  let total = 0
  for (let index = 0; index < src.length; index += 1) total += src.charCodeAt(index)
  return `${(total % 5) * 0.8}s`
}

export function VisualPanel({
  src,
  alt,
  width = 1024,
  height = 576,
  priority = false,
  className = '',
}: VisualPanelProps) {
  return (
    <div className="visual-float-stage" style={{ ['--float-delay' as string]: floatDelay(src) }}>
      <div className="visual-float-shadow" aria-hidden="true" />
      <div className="visual-float">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`block h-auto w-full ${className}`}
        />
        <div className="visual-sheen" aria-hidden="true" />
      </div>
    </div>
  )
}
