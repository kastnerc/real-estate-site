import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Fahkwang } from 'next/font/google'

import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const fahkwang = Fahkwang({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fawkwang',
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export const metadata = {
  title: {
    default: 'Gendron & Kastner Immobilier Inc.',
    template: '%s - Gendron & Kastner Immobilier Inc.',
  },
  description:
    'Gendron & Kastner Immobilier Inc. helps clients discover real estate investment opportunities in Gatineau–Hull. Explore residential and investment properties with expert guidance in the Outaouais region.',
  keywords: [
    'real estate Gatineau',
    'Hull real estate',
    'Gatineau investment properties',
    'Outaouais real estate',
    'property investment Quebec',
    'Gendron Kastner immobilier',
  ],
  openGraph: {
    title: 'Gendron & Kastner Immobilier Inc.',
    description:
      'Real estate investment opportunities in Gatineau–Hull. Discover properties and expert guidance in the Outaouais region.',
    type: 'website',
    siteName: 'Gendron & Kastner Immobilier Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gendron & Kastner Immobilier Inc.',
    description:
      'Real estate investment opportunities in Gatineau–Hull.',
  },
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body
                className={`${fahkwang.className} antialiased`}
            >
                <NextIntlClientProvider>
                    <main className="snap-y snap-proximity h-screen overflow-y-scroll relative">
                        <Nav />

                        {children}

                        <section className="snap-end h-[50vh]">
                            <Footer />
                        </section>
                    </main>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
