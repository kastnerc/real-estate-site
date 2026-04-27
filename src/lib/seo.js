const baseUrl = 'https://yourdomain.com'

export function getSeo({
  locale,
  path = '',
  title,
  description,
}) {
  const canonical = `${baseUrl}/${locale}${path}`

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}/en${path}`,
        fr: `${baseUrl}/fr${path}`,
        'x-default': `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Gendron & Kastner Immobilier Inc.',
      type: 'website',
    },
  }
}