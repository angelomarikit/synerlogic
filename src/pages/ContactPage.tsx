import { MapPin } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { SeoHead } from '../components/SeoHead'
import { company, contactPage, seo } from '../content/siteContent'

export default function ContactPage() {
  return (
    <>
      <SeoHead {...seo.contact} />
      <PageHero title={contactPage.heading} lede={contactPage.supporting} />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="rounded-2xl border border-line bg-ice p-6">
            <MapPin aria-hidden="true" className="size-5 text-blue" />
            <h2 className="mt-4 font-display text-xl font-semibold text-navy">Location</h2>
            <p className="mt-2 text-base leading-7 text-muted">{company.location}</p>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  )
}
