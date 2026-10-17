import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { SeoHead } from '../components/SeoHead'
import { company, privacyPage, seo } from '../content/siteContent'

export default function PrivacyPage() {
  return (
    <>
      <SeoHead {...seo.privacy} />
      <PageHero title={privacyPage.heading} lede={privacyPage.status} />
      <section className="py-16 sm:py-20">
        <Container>
          <ul className="max-w-3xl space-y-4">
            {privacyPage.points.map((point) => (
              <li key={point} className="rounded-2xl border border-line px-5 py-4 text-base leading-7 text-navy">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-6 text-muted">{company.location}</p>
        </Container>
      </section>
    </>
  )
}
