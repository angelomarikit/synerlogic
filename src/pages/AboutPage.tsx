import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { SeoHead } from '../components/SeoHead'
import { about, closingCta, seo } from '../content/siteContent'
import { visuals } from '../content/visuals'
import { VisualPanel } from '../components/VisualPanel'

export default function AboutPage() {
  return (
    <>
      <SeoHead {...seo.about} />
      <PageHero title={about.heading} lede={about.introduction} />

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="philosophy-heading">
        <Container>
          <h2 id="philosophy-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {about.philosophyHeading}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-ice p-7">
              <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{about.logicTitle}</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">{about.logicBody}</p>
            </article>
            <article className="rounded-2xl border border-line bg-white p-7 shadow-[0_12px_30px_-22px_rgba(6,29,56,0.45)]">
              <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">{about.synergyTitle}</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">{about.synergyBody}</p>
            </article>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted sm:text-lg">{about.philosophyClose}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{about.philosophyNote}</p>
          <div className="mt-10">
            <VisualPanel
              src={visuals.philosophy}
              alt="Logic is the blueprint of strategic thinking and data-driven design. Synergy is operational support and tangible implementation."
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ice py-16 sm:py-20 lg:py-28" aria-labelledby="mission-heading">
        <Container>
          <h2 id="mission-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {about.missionHeading}
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-navy">{about.visionLabel}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{about.vision}</p>
            </article>
            <article className="rounded-2xl border border-line bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-navy">{about.missionLabel}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{about.mission}</p>
            </article>
          </div>
          <p className="mt-8 border-l-2 border-cyan pl-5 font-display text-2xl font-semibold tracking-tight text-navy">
            {about.positioning}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{about.purposeNote}</p>
          <div className="mt-10">
            <VisualPanel
              src={visuals.purpose}
              alt="Vision and mission: a long-term partner in operational excellence for gaming and entertainment."
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="why-heading">
        <Container>
          <h2 id="why-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {about.whyHeading}
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {about.why.map((point, index) => (
              <li key={point} className="rounded-2xl border border-line p-6">
                <span className="font-display text-sm font-semibold text-blue">0{index + 1}</span>
                <p className="mt-3 text-base leading-7 text-navy">{point}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ClosingBand heading={closingCta.heading} cta={closingCta.cta} />
    </>
  )
}
