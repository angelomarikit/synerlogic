type VisualPanelProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
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
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-auto w-full rounded-2xl border border-line bg-white ${className}`}
    />
  )
}
