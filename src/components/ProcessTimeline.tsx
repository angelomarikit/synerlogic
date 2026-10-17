export type TimelineStep = {
  index: string
  title: string
  body?: string
}

type ProcessTimelineProps = {
  steps: readonly TimelineStep[]
  labelledBy?: string
}

export function ProcessTimeline({ steps, labelledBy }: ProcessTimelineProps) {
  return (
    <ol className="grid gap-8 md:grid-cols-4 md:gap-6" aria-labelledby={labelledBy}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-4 left-4 hidden h-px w-[calc(100%+1.5rem)] bg-line md:block"
            />
          ) : null}
          <div className="relative">
            <span className="inline-flex size-8 items-center justify-center rounded-full border border-blue bg-white font-display text-xs font-semibold text-blue">
              {step.index}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">{step.title}</h3>
            {step.body ? <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
