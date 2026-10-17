import { Container } from '../components/Container'
import { LinkButton } from '../components/Button'
import { SeoHead } from '../components/SeoHead'
import { notFoundPage, seo } from '../content/siteContent'

export default function NotFoundPage() {
  return (
    <>
      <SeoHead {...seo.notFound} />
      <section className="py-20 sm:py-28">
        <Container>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-navy">{notFoundPage.heading}</h1>
          <p className="mt-4 text-base leading-7 text-muted">{notFoundPage.body}</p>
          <LinkButton to="/" className="mt-8">
            {notFoundPage.cta}
          </LinkButton>
        </Container>
      </section>
    </>
  )
}
