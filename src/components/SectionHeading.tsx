import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lede?: string
  id?: string
  as?: 'h1' | 'h2'
  align?: 'left' | 'center'
  tone?: 'default' | 'inverse'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  as = 'h2',
  align = 'left',
  tone = 'default',
  children,
}: SectionHeadingProps) {
  const Title = as
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''
  const titleColor = tone === 'inverse' ? 'text-white' : 'text-navy'
  const ledeColor = tone === 'inverse' ? 'text-ice' : 'text-muted'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{eyebrow}</p>
      ) : null}
      <Title id={id} className={`font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${titleColor} ${eyebrow ? 'mt-3' : ''}`}>
        {title}
      </Title>
      {lede ? <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${ledeColor}`}>{lede}</p> : null}
      {children}
    </div>
  )
}
