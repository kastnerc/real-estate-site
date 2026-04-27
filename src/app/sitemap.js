const baseUrl = 'https://yourdomain.com'

export default function sitemap() {
  const locales = ['en', 'fr']

  const routes = ['', '/about', '/contact', '/privacy-policy']

  const priorityMap = {
    '': 1,
    '/about': 0.7,
    '/contact': 0.6,
    '/privacy-policy': 0.3,
  }

  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url:
        route === ''
          ? `${baseUrl}/${locale}`
          : `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: priorityMap[route],
    }))
  )

  return pages
}