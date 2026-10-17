import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { contactPage, inquiryTypes } from '../content/siteContent'
import { isDeliveryConfigured, submitInquiry, validateContact, type ContactFields, type FieldErrors } from '../lib/contact'
import { Button } from './Button'

const emptyFields: ContactFields = {
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  message: '',
  consent: false,
}

type Status = 'idle' | 'submitting' | 'unconfigured' | 'failed' | 'sent'

const fieldClass =
  'mt-2 w-full min-h-11 rounded-xl border border-line bg-white px-3 text-base text-navy outline-none focus-visible:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

export function ContactForm() {
  const baseId = useId()
  const configured = isDeliveryConfigured()
  const [fields, setFields] = useState<ContactFields>(emptyFields)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function update<K extends keyof ContactFields>(key: K, value: ContactFields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    if (status === 'failed' || status === 'unconfigured') setStatus('idle')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContact(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }
    if (!configured) {
      setStatus('unconfigured')
      return
    }
    setStatus('submitting')
    const result = await submitInquiry(fields)
    setStatus(result.status)
    if (result.status === 'sent') setFields(emptyFields)
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-2xl border border-line bg-ice p-8">
        <p className="font-display text-2xl font-semibold text-navy">{contactPage.success}</p>
        <Button type="button" variant="secondary" className="mt-6" onClick={() => setStatus('idle')}>
          {contactPage.another}
        </Button>
      </div>
    )
  }

  const errorEntries = Object.entries(errors).filter((entry) => entry[1])
  const statusMessage =
    status === 'unconfigured' ? contactPage.unconfigured : status === 'failed' ? contactPage.failed : null

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_30px_-22px_rgba(6,29,56,0.5)] sm:p-7">
      {errorEntries.length > 0 ? (
        <div role="alert" className="mb-5 rounded-xl border border-line bg-ice px-4 py-3 text-sm text-navy">
          <p className="font-semibold">Check the highlighted fields.</p>
          <ul className="mt-2 list-disc pl-5">
            {errorEntries.map(([key, message]) => (
              <li key={key}>
                <a href={`#${baseId}-${key}`} className="underline">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${baseId}-name`} label={contactPage.labels.name} error={errors.name}>
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            className={fieldClass}
          />
        </Field>
        <Field id={`${baseId}-email`} label={contactPage.labels.email} error={errors.email}>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            className={fieldClass}
          />
        </Field>
        <Field id={`${baseId}-company`} label={contactPage.labels.company} error={errors.company}>
          <input
            id={`${baseId}-company`}
            name="organization"
            autoComplete="organization"
            value={fields.company}
            onChange={(event) => update('company', event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${baseId}-company-error` : undefined}
            className={fieldClass}
          />
        </Field>
        <Field id={`${baseId}-inquiryType`} label={contactPage.labels.inquiryType} error={errors.inquiryType}>
          <select
            id={`${baseId}-inquiryType`}
            name="inquiryType"
            value={fields.inquiryType}
            onChange={(event) => update('inquiryType', event.target.value)}
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={errors.inquiryType ? `${baseId}-inquiryType-error` : undefined}
            className={fieldClass}
          >
            <option value="">{contactPage.inquiryPlaceholder}</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id={`${baseId}-message`} label={contactPage.labels.message} error={errors.message}>
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={6}
            value={fields.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
            className={`${fieldClass} min-h-36 resize-y py-3`}
          />
        </Field>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-6 text-muted" htmlFor={`${baseId}-consent`}>
          <input
            id={`${baseId}-consent`}
            name="consent"
            type="checkbox"
            checked={fields.consent}
            onChange={(event) => update('consent', event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${baseId}-consent-error` : undefined}
            className="mt-1 size-5 shrink-0 accent-[#0879CD]"
          />
          <span>{contactPage.consentText}</span>
        </label>
        {errors.consent ? (
          <p id={`${baseId}-consent-error`} className="mt-2 text-sm font-medium text-navy">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {!configured ? (
        <p role="status" className="mt-5 rounded-xl border border-line bg-ice px-4 py-3 text-sm leading-6 text-navy">
          {status === 'unconfigured' ? 'Not sent. ' : null}
          {contactPage.unconfigured}
        </p>
      ) : null}

      {status === 'failed' && statusMessage ? (
        <p role="alert" className="mt-4 text-sm font-medium text-navy">
          {statusMessage}
        </p>
      ) : null}

      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
        {status === 'submitting' ? contactPage.sending : contactPage.labels.submit}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-navy">
          {error}
        </p>
      ) : null}
    </div>
  )
}
