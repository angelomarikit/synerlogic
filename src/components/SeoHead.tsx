import { useEffect } from 'react'
import { company } from '../content/siteContent'

type SeoHeadProps = {
  title: string
  description: string
  path: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string | null) {
  const existing = document.head.querySelector(`link[rel="${rel}"]`)
  if (!href) {
    existing?.remove()
    return
  }
  const element = existing ?? document.createElement('link')
  element.setAttribute('rel', rel)
  element.setAttribute('href', href)
  if (!existing) document.head.appendChild(element)
}

export function SeoHead({ title, description, path }: SeoHeadProps) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:site_name', company.name)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)

    const site = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '')
    const image = site ? `${site}/og.jpg` : '/og.jpg'
    const imageAlt =
      'Synerlogic Global Solutions Corporation. Synergy meets Logic, with logic as the blueprint, synergy as operational reality, and the stages Assess, Design, Implement, and Optimise.'
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:width', '1024')
    upsertMeta('property', 'og:image:height', '576')
    upsertMeta('property', 'og:image:alt', imageAlt)
    upsertMeta('name', 'twitter:image', image)
    upsertMeta('name', 'twitter:image:alt', imageAlt)

    if (site && path) {
      const url = `${site}${path}`
      upsertLink('canonical', url)
      upsertMeta('property', 'og:url', url)
    } else {
      upsertLink('canonical', null)
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [title, description, path])

  return null
}
