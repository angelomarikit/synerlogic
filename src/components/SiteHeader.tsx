import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-mark.png'
import { company, nav } from '../content/siteContent'
import { Container } from './Container'
import { LinkButton } from './Button'

const linkClass =
  'inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-navy transition-colors hover:text-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

function itemClass(isActive: boolean) {
  return `${linkClass} ${isActive ? 'text-blue' : ''}`
}

export function SiteHeader() {
  const location = useLocation()
  const locationKey = `${location.pathname}${location.hash}`
  const menuId = useId()
  const servicesId = useId()
  const [mobileKey, setMobileKey] = useState<string | null>(null)
  const [servicesKey, setServicesKey] = useState<string | null>(null)
  const mobileOpen = mobileKey === locationKey
  const servicesOpen = servicesKey === locationKey
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)

  function closeMobile() {
    setMobileKey(null)
  }

  function closeServices() {
    setServicesKey(null)
  }

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const panel = panelRef.current
    const closeButton = panel?.querySelector<HTMLElement>('button')
    closeButton?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMobile()
        menuButtonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !panel) return
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!servicesOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeServices()
    }
    function onPointer(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) closeServices()
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [servicesOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link to="/" className="inline-flex min-h-11 items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan">
          <img src={logo} alt={company.name} width={697} height={666} className="h-14 w-auto sm:h-16" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              'children' in item ? (
                <li
                  key={item.to}
                  className="relative"
                  ref={servicesRef}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) closeServices()
                  }}
                >
                  <button
                    type="button"
                    className={linkClass}
                    aria-expanded={servicesOpen}
                    aria-controls={servicesId}
                    onClick={() => setServicesKey((current) => (current === locationKey ? null : locationKey))}
                    onFocus={() => setServicesKey(locationKey)}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </button>
                  <div
                    id={servicesId}
                    className={`absolute top-full left-0 z-20 w-80 pt-2 ${servicesOpen ? 'block' : 'hidden'}`}
                  >
                    <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_16px_40px_-24px_rgba(6,29,56,0.45)]">
                      <NavLink to={item.to} className="block rounded-xl px-3 py-3 text-sm font-semibold text-navy hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan">
                        All services
                      </NavLink>
                      <ul className="mt-1 border-t border-line pt-1">
                        {item.children.map((service) => (
                          <li key={service.id}>
                            <Link
                              to={`/services#${service.id}`}
                              className="block rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-ice hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                            >
                              <span className="mr-2 font-semibold text-blue">{service.number}</span>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => itemClass(isActive)} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <LinkButton to="/contact">Contact</LinkButton>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-line text-navy lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          onClick={() => setMobileKey(locationKey)}
        >
          <Menu aria-hidden="true" className="size-5" />
          <span className="sr-only">Open menu</span>
        </button>
      </Container>

      {mobileOpen
        ? createPortal(
            <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" className="absolute inset-0 bg-navy/40" aria-label="Close menu" onClick={closeMobile} />
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl"
          >
            <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-5">
              <span className="font-display text-sm font-semibold text-navy">Menu</span>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                onClick={() => {
                  closeMobile()
                  menuButtonRef.current?.focus()
                }}
              >
                <X aria-hidden="true" className="size-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => itemClass(isActive)}>
                      {item.label}
                    </NavLink>
                    {'children' in item ? (
                      <ul className="mt-1 mb-2 ml-3 border-l border-line pl-3">
                        {item.children.map((service) => (
                          <li key={service.id}>
                            <Link to={`/services#${service.id}`} className="inline-flex min-h-11 items-center text-sm text-muted">
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
              <LinkButton to="/contact" className="mt-4 w-full">
                Contact
              </LinkButton>
            </nav>
          </div>
        </div>,
            document.body,
          )
        : null}
    </header>
  )
}
