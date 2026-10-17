import { ClosingBand } from '../components/ClosingBand'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { SeoHead } from '../components/SeoHead'
import { VisualPanel } from '../components/VisualPanel'
import { approachPage, closingCta, comparison, operatingPhases, processSteps, seo } from '../content/siteContent'
import { visuals } from '../content/visuals'

export default function ApproachPage() {
  return (
    <>
      <SeoHead {...seo.approach} />
      <PageHero title={approachPage.heading} lede={approachPage.intro} />

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="approach-steps">
        <Container>
          <h2 id="approach-steps" className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {approachPage.visualHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">{approachPage.visualBody}</p>
          <div className="mt-8">
            <VisualPanel
              src={visuals.approach}
              alt="Assess, Design, Implement, and Optimise shown as a continuous execution spiral."
            />
          </div>
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} labelledBy="approach-steps" />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ice py-16 sm:py-20 lg:py-28" aria-labelledby="phases-heading">
        <Container>
          <h2 id="phases-heading" className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {approachPage.phasesHeading}
          </h2>
          <div className="mt-8">
            <VisualPanel
              src={visuals.operations}
              alt="Operational phases from pre-launch and operating procedures through people and ongoing performance."
            />
          </div>
          <div className="mt-10">
            <ProcessTimeline steps={operatingPhases} labelledBy="phases-heading" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-28" aria-labelledby="comparison-heading">
        <Container>
          <p className="max-w-3xl border-l-2 border-cyan pl-5 text-lg leading-8 text-navy">{approachPage.differentiation}</p>
          <h2 id="comparison-heading" className="mt-12 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {comparison.heading}
          </h2>
          <div className="mt-8">
            <VisualPanel
              src={visuals.comparison}
              alt="Comparison of traditional consultancy and the Synerlogic approach across expertise, delivery, technology, procurement, and regulatory alignment."
            />
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-semibold text-navy">Category</th>
                  <th className="py-3 pr-4 font-semibold text-muted">{comparison.traditional}</th>
                  <th className="py-3 font-semibold text-blue">{comparison.synerlogic}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.category} className="border-b border-line">
                    <th scope="row" className="py-4 pr-4 font-semibold text-navy">
                      {row.category}
                    </th>
                    <td className="py-4 pr-4 text-muted">{row.traditional}</td>
                    <td className="py-4 text-navy">{row.synerlogic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <ClosingBand heading={closingCta.heading} cta={closingCta.cta} />
    </>
  )
}
