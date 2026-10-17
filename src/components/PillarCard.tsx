import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PillarCardProps = {
  number: string
  title: string
  summary: string
  href: string
  icon: LucideIcon
}

export function PillarCard({ number, title, summary, href, icon: Icon }: PillarCardProps) {
  return (
    <Link
      to={href}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_12px_30px_-22px_rgba(6,29,56,0.55)] transition-colors hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold tracking-[0.14em] text-blue">{number}</span>
        <Icon aria-hidden="true" className="size-5 text-navy" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{summary}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue">
        View capabilities
        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
