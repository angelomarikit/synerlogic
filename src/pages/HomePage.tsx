import { ArrowRight, Boxes, ClipboardCheck, Compass, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { PillarCard } from '../components/PillarCard'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { SectionHeading } from '../components/SectionHeading'
import { SeoHead } from '../components/SeoHead'
import { services } from '../content/services'
import { friction, home, homeProcess, industries, seo } from '../content/siteContent'
import { visuals } from '../content/visuals'
import { VisualPanel } from '../components/VisualPanel'
import heroBanner from '../assets/visuals/hero-banner.jpg'

const heroButtonClass =
  'min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0668b3] to-[#0879CD] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(6,29,56,0.65)] transition duration-200 hover:-translate-y-0.5 hover:from-[#0879CD] hover:to-[#0a8ed4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0879CD]'

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
      <section
        aria-label="Synerlogic Global Solutions"
        className="w-full bg-[linear-gradient(90deg,#e7f3fc_0_50%,#012a6a_50%_100%)]"
      >
        <div className="hero-frame relative mx-auto w-full max-w-[1024px] overflow-hidden">
          <img
            src={heroBanner}
            alt="Synerlogic Global Solutions Corporation. Strategic solutions for a connected tomorrow, covering strategic consultancy, technology solutions, operational excellence, and global partnerships."
            width={1024}
            height={384}
            decoding="async"
            fetchPriority="high"
            className="hero-frame-image block h-auto w-full object-contain"
          />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-sheen" aria-hidden="true" />
          <Link to="/contact" className={`${heroButtonClass} absolute bottom-[22%] left-[4.5%] hidden lg:inline-flex`}>
            Get in Touch
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <div className="px-5 py-4 lg:hidden">
          <Link to="/contact" className={`${heroButtonClass} inline-flex w-full`}>
            Get in Touch
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
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
