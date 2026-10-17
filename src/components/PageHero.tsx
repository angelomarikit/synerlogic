import type { ReactNode } from 'react'
import { Container } from './Container'

type PageHeroProps = {
  eyebrow?: string
  title: string
  lede?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-ice">
      <Container className="blueprint-grid py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{eyebrow}</p>
          ) : null}
          <h1 className={`font-display text-4xl font-semibold tracking-tight text-balance text-navy sm:text-5xl ${eyebrow ? 'mt-3' : ''}`}>
            {title}
          </h1>
          {lede ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{lede}</p> : null}
          {children}
        </div>
      </Container>
    </section>
  )
}
