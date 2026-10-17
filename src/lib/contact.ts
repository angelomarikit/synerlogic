import { inquiryTypes } from '../content/siteContent'

export type InquiryPayload = {
  name: string
  email: string
  company: string
  inquiryType: string
  message: string
}

export type ContactFields = InquiryPayload & {
  consent: boolean
}

export type FieldErrors = Partial<Record<keyof ContactFields, string>>

export type DeliveryResult = { status: 'unconfigured' } | { status: 'sent' } | { status: 'failed' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isDeliveryConfigured(): boolean {
  return getContactEndpoint() !== null
}

/**
 * Integration point for inquiry delivery.
 * Set VITE_CONTACT_ENDPOINT to an HTTPS URL that accepts POST application/json
 * with { name, email, company, inquiryType, message } and returns 2xx only
 * after the message is stored or sent. Leave it unset until that recipient
 * is verified. The form must not report success without that confirmation.
 */
export function getContactEndpoint(): string | null {
  const value = import.meta.env.VITE_CONTACT_ENDPOINT
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

export function validateContact(fields: ContactFields): FieldErrors {
  const errors: FieldErrors = {}
  if (fields.name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!emailPattern.test(fields.email.trim())) errors.email = 'Enter a valid business email address.'
  if (fields.company.trim().length < 2) errors.company = 'Enter your company or organisation.'
  if (!inquiryTypes.includes(fields.inquiryType as (typeof inquiryTypes)[number])) {
    errors.inquiryType = 'Select an inquiry type.'
  }
  if (fields.message.trim().length < 20) errors.message = 'Enter a message of at least 20 characters.'
  if (!fields.consent) errors.consent = 'Consent is required before an inquiry can be reviewed.'
  return errors
}

export function toPayload(fields: ContactFields): InquiryPayload {
  return {
    name: fields.name.trim(),
    email: fields.email.trim(),
    company: fields.company.trim(),
    inquiryType: fields.inquiryType,
    message: fields.message.trim(),
  }
}

export async function submitInquiry(fields: ContactFields): Promise<DeliveryResult> {
  const endpoint = getContactEndpoint()
  if (!endpoint) return { status: 'unconfigured' }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(toPayload(fields)),
    })
    if (!response.ok) return { status: 'failed' }
    return { status: 'sent' }
  } catch {
    return { status: 'failed' }
  }
}
