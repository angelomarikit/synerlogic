import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { SeoHead } from '../components/SeoHead'
import { VisualPanel } from '../components/VisualPanel'
import { closingCta, lifecycle, seo, solutionExamples, solutionsPage } from '../content/siteContent'
import { visuals } from '../content/visuals'

export default function SolutionsPage() {
  return (
    <>
      <SeoHead {...seo.solutions} />
      <PageHero title={solutionsPage.heading} lede={solutionsPage.intro} />

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="journey-heading">
        <Container>
          <h2 id="journey-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {solutionsPage.journeyHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{solutionsPage.journeyNote}</p>
          <div className="mt-8">
            <VisualPanel
              src={visuals.lifecycle}
              alt="Validate, build, launch, and sustain, connecting consultancy, technology, equipment, and operational support."
            />
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={lifecycle} labelledBy="journey-heading" />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white pb-16 sm:pb-20 lg:pb-28" aria-labelledby="examples-heading">
        <Container>
          <h2 id="examples-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {solutionsPage.examplesHeading}
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {solutionExamples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-line p-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">{solutionsPage.exampleLabel}</p>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{example.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-line bg-ice px-5 py-4 text-sm leading-6 text-navy">{solutionsPage.note}</p>
        </Container>
      </section>

      <ClosingBand heading={closingCta.heading} cta={closingCta.cta} />
    </>
  )
}
