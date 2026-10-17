import { Link } from 'react-router-dom'
import logo from '../assets/logo-mark-light.png'
import { company, nav } from '../content/siteContent'
import { services } from '../content/services'
import { Container } from './Container'

const footerLinkClass =
  'flex items-center py-1 text-sm leading-5 text-ice hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <Container className="grid items-start gap-x-12 gap-y-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
        <div>
          <img src={logo} alt="" width={697} height={666} className="h-20 w-auto" />
          <p className="mt-4 max-w-[16rem] text-sm leading-6 text-ice">{company.name}</p>
          <p className="mt-3 max-w-[16rem] text-sm leading-6 text-ice">
            <span className="block">Makati City</span>
            <span className="block">National Capital Region, Philippines</span>
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-cyan uppercase">Navigate</h2>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className={footerLinkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-cyan uppercase">Services</h2>
          <ul className="mt-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className={footerLinkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-cyan uppercase">Location</h2>
          <p className="mt-3 max-w-[16rem] text-sm leading-6 text-ice">
            <span className="block">Makati City</span>
            <span className="block">National Capital Region, Philippines</span>
          </p>
          <Link to="/privacy" className={`${footerLinkClass} mt-1 w-fit underline decoration-white/30 underline-offset-4`}>
            Privacy notice
          </Link>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-xs leading-5 text-ice">© {year} {company.name}</p>
        </Container>
      </div>
    </footer>
  )
}
