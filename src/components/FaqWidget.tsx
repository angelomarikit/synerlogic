import { ChevronDown, MessageCircle, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../content/faqs'

export function FaqWidget() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<number | null>(0)
  const panelId = useId()
  const titleId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      launcherRef.current?.focus()
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="fixed right-4 bottom-4 z-40 flex w-[min(100vw-2rem,24rem)] flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <p className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy shadow-[0_12px_30px_-18px_rgba(6,29,56,0.65)]">
        Do you have questions?
      </p>

      {open ? (
        <section
          id={panelId}
          role="dialog"
          aria-labelledby={titleId}
          className="flex max-h-[min(32rem,calc(100dvh-8.5rem))] w-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-28px_rgba(6,29,56,0.55)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-line bg-ice px-4 py-3">
            <h2 id={titleId} className="font-display text-base font-semibold text-navy">
              Frequently asked questions
            </h2>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-navy hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
              onClick={() => {
                setOpen(false)
                launcherRef.current?.focus()
              }}
            >
              <span className="sr-only">Close questions</span>
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
          <div className="overflow-y-auto px-2 py-2">
            {faqs.map((item, index) => {
              const expanded = active === index
              const answerId = `${panelId}-answer-${index}`
              return (
                <article key={item.question} className="border-b border-line last:border-b-0">
                  <h3>
                    <button
                      type="button"
                      className="flex min-h-11 w-full items-start justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-navy hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                      aria-expanded={expanded}
                      aria-controls={answerId}
                      onClick={() => setActive(expanded ? null : index)}
                    >
                      {item.question}
                      <ChevronDown aria-hidden="true" className={`mt-0.5 size-4 shrink-0 transition ${expanded ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {expanded ? (
                    <p id={answerId} className="px-3 pb-4 text-sm leading-6 text-muted">
                      {item.answer}
                    </p>
                  ) : null}
                </article>
              )
            })}
            <p className="px-3 py-4 text-sm leading-6 text-muted">
              <Link
                to="/contact"
                className="font-semibold text-blue underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                onClick={() => setOpen(false)}
              >
                Contact us
              </Link>{' '}
              to talk through your objectives.
            </p>
          </div>
        </section>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        className="inline-flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-[0_16px_32px_-16px_rgba(6,29,56,0.8)] transition hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? 'Close questions' : 'Open questions'}</span>
        {open ? <X aria-hidden="true" className="size-6" /> : <MessageCircle aria-hidden="true" className="size-6" />}
      </button>
    </div>
  )
}
