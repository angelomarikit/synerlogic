import { Container } from './Container'
import { LinkButton } from './Button'

type ClosingBandProps = {
  heading: string
  body?: string
  cta: string
}

export function ClosingBand({ heading, body, cta }: ClosingBandProps) {
  return (
    <section className="bg-navy" aria-labelledby="closing-heading">
      <Container className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-12">
        <div className="max-w-2xl">
          <h2 id="closing-heading" className="font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {heading}
          </h2>
          {body ? <p className="mt-4 text-base leading-7 text-balance text-ice sm:text-lg">{body}</p> : null}
          <LinkButton to="/contact" variant="inverse" className="mt-6">
            {cta}
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
