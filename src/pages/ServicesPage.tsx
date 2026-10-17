import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { SeoHead } from '../components/SeoHead'
import { VisualPanel } from '../components/VisualPanel'
import { services } from '../content/services'
import { home, servicesPage, seo } from '../content/siteContent'
import { serviceVisuals } from '../content/visuals'

const visualAlt = {
  'strategic-consultancy':
    'Strategic consultancy for market entry, operations optimisation, player development, regulatory guidance, and turnaround.',
  'systems-technology':
    'Systems and technology covering digital transformation, analytics, player tracking, systems audit, and casino management integration.',
  'gaming-equipment':
    'Gaming equipment and supply covering vendor coordination, machine sourcing, table games, and lifecycle maintenance.',
  'operational-support':
    'Operational support from pre-launch and operating procedures through staff development and ongoing audit.',
} as const

export default function ServicesPage() {
  return (
    <>
      <SeoHead {...seo.services} />
      <PageHero title={servicesPage.heading} lede={servicesPage.intro} />

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          aria-labelledby={`${service.id}-title`}
          className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${index % 2 === 1 ? 'bg-ice' : 'bg-white'}`}
        >
          <Container>
            <div className="max-w-3xl">
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-blue">{service.number}</p>
              <h2 id={`${service.id}-title`} className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{service.intro}</p>
              <p className="mt-3 text-base leading-7 text-navy">{service.lead}</p>
            </div>
            <div className="mt-8">
              <VisualPanel
                src={serviceVisuals[service.id as keyof typeof serviceVisuals]}
                alt={visualAlt[service.id as keyof typeof visualAlt]}
              />
            </div>
            <h3 className="mt-10 text-sm font-semibold tracking-[0.14em] text-navy uppercase">{servicesPage.capabilitiesLabel}</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {service.capabilities.map((capability) => (
                <li key={capability.name} className="rounded-2xl border border-line bg-white p-5 transition-colors hover:border-blue">
                  <h4 className="font-display text-lg font-semibold tracking-tight text-navy">{capability.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted">{capability.detail}</p>
                </li>
              ))}
            </ul>
            {service.phases ? (
              <ol className="mt-8 grid gap-4 lg:grid-cols-4">
                {service.phases.map((phase, phaseIndex) => (
                  <li key={phase.title} className="rounded-2xl border border-line bg-white p-5">
                    <p className="font-display text-sm font-semibold text-blue">0{phaseIndex + 1}</p>
                    <h4 className="mt-2 font-display text-lg font-semibold text-navy">{phase.title}</h4>
                    <p className="mt-1 text-sm text-muted">{phase.note}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-navy">
                      {phase.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            ) : null}
          </Container>
        </section>
      ))}

      <ClosingBand heading={servicesPage.cta} cta={home.primaryCta} />
    </>
  )
}
