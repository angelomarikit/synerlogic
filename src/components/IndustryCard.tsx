import type { LucideIcon } from 'lucide-react'

type IndustryCardProps = {
  id: string
  title: string
  body: string
  icon: LucideIcon
}

export function IndustryCard({ id, title, body, icon: Icon }: IndustryCardProps) {
  return (
    <article id={id} className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 shadow-[0_12px_30px_-22px_rgba(6,29,56,0.5)]">
      <Icon aria-hidden="true" className="size-5 text-blue" strokeWidth={1.5} />
      <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-navy">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
    </article>
  )
}
