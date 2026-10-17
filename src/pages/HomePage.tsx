import { ArrowRight, Boxes, ClipboardCheck, Compass, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../components/Button'
import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { HeroDiagram } from '../components/diagrams/HeroDiagram'
import { PillarCard } from '../components/PillarCard'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { SectionHeading } from '../components/SectionHeading'
import { SeoHead } from '../components/SeoHead'
import { services } from '../content/services'
import { friction, home, homeProcess, industries, seo } from '../content/siteContent'
import { visuals } from '../content/visuals'
import { VisualPanel } from '../components/VisualPanel'

const icons = {
  'strategic-consultancy': Compass,
  'systems-technology': Cpu,
  'gaming-equipment': Boxes,
  'operational-support': ClipboardCheck,
} as const

export default function HomePage() {
  return (
    <>
      <SeoHead {...seo.home} />
      <section className="border-b border-line">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{home.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-navy sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {home.headline}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink">{home.subheadline}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">{home.supporting}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton to="/contact">{home.primaryCta}</LinkButton>
              <LinkButton to="/services" variant="secondary">
                {home.secondaryCta}
              </LinkButton>
            </div>
          </div>
          <div className="reveal">
            <HeroDiagram />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="intro-heading">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <SectionHeading eyebrow={home.introKicker} title={home.introHeadline} id="intro-heading" />
            <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">{home.introBody}</p>
          </div>
          <div className="mt-12">
            <VisualPanel
              src={visuals.friction}
              alt="The gap between strategic intent and operational reality, marked by margin erosion, compliance risk, and stalled timelines."
              height={572}
            />
          </div>
          <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">{friction.heading}</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-ice p-6">
              <h4 className="font-display text-lg font-semibold text-navy">{friction.intentLabel}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{friction.intent}</p>
            </article>
            <article className="rounded-2xl border border-line bg-ice p-6">
              <h4 className="font-display text-lg font-semibold text-navy">{friction.realityLabel}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{friction.reality}</p>
            </article>
          </div>
          <ul className="mt-5 grid gap-5 lg:grid-cols-3">
            {friction.points.map((point) => (
              <li key={point.title} className="rounded-2xl border border-line p-6">
                <h4 className="font-display text-lg font-semibold text-navy">{point.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ice py-16 sm:py-20 lg:py-28" aria-labelledby="pillars-heading">
        <Container>
          <SectionHeading title={home.pillarsHeading} id="pillars-heading" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <PillarCard
                key={service.id}
                number={service.number}
                title={service.title}
                summary={service.summary}
                href={`/services#${service.id}`}
                icon={icons[service.id as keyof typeof icons]}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="process-heading">
        <Container>
          <SectionHeading title={home.processHeading} lede={home.processBody} id="process-heading" />
          <div className="mt-12">
            <ProcessTimeline steps={homeProcess} labelledBy="process-heading" />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="sectors-heading">
        <Container>
          <SectionHeading title={home.industriesHeading} lede={home.industriesBody} id="sectors-heading" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {industries.map((industry) => (
              <li key={industry.id}>
                <Link
                  to={`/industries#${industry.id}`}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                  <span className="font-display text-lg font-semibold tracking-tight group-hover:text-blue">{industry.title}</span>
                  <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-blue" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingBand heading={home.closingHeadline} body={home.closingBody} cta={home.closingCta} />
    </>
  )
}
