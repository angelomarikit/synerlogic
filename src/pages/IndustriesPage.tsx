import { Building2, Cpu, Globe, Hotel, LineChart, Store } from 'lucide-react'
import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { IndustryCard } from '../components/IndustryCard'
import { PageHero } from '../components/PageHero'
import { SeoHead } from '../components/SeoHead'
import { closingCta, industries, industriesPage, seo } from '../content/siteContent'
import { visuals } from '../content/visuals'
import { VisualPanel } from '../components/VisualPanel'

const icons = {
  'integrated-resorts': Building2,
  'standalone-venues': Store,
  'online-platforms': Globe,
  investors: LineChart,
  hospitality: Hotel,
  'hardware-dealers': Cpu,
} as const

export default function IndustriesPage() {
  return (
    <>
      <SeoHead {...seo.industries} />
      <PageHero title={industriesPage.heading} lede={industriesPage.intro} />
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <VisualPanel
            src={visuals.industries}
            alt="Integrated resorts, standalone venues, online platforms, hospitality groups, and gaming hardware and system dealers."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                id={industry.id}
                title={industry.title}
                body={industriesPage.cardBody}
                icon={icons[industry.id]}
              />
            ))}
          </div>
        </Container>
      </section>
      <ClosingBand heading={closingCta.heading} cta={closingCta.cta} />
    </>
  )
}
