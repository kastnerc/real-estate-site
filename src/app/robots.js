export default function robots() {
    const baseUrl = 'https://yourdomain.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
