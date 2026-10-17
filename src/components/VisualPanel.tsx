type VisualPanelProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  floating?: boolean
  className?: string
}

export function VisualPanel({
  src,
  alt,
  width = 1024,
  height = 576,
  priority = false,
  floating = false,
  className = '',
}: VisualPanelProps) {
  const image = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-auto w-full rounded-2xl border border-line bg-white ${floating ? 'visual-float' : ''} ${className}`}
    />
  )

  if (!floating) return image

  return (
    <div className="visual-float-stage">
      <div className="visual-float-shadow" aria-hidden="true" />
      {image}
    </div>
  )
}
