import { useEffect } from 'react'

const defaultDescription =
  'Learn fast mental math tricks, practice calculation shortcuts, and build confidence without a calculator.'

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function SEO({ title, description = defaultDescription, path = '/' }) {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin
    const canonicalUrl = new URL(path, siteUrl).href

    document.title = title
    setMeta('description', description)
    setMeta('robots', 'index, follow')
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:type', 'website')
    setProperty('og:url', canonicalUrl)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [description, path, title])

  return null
}
