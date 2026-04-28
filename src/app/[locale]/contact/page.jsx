import ImageHero from '@/components/ImageHero'
import SplitContactSection from '@/components/SplitContactSection'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getSeo } from '@/lib/seo'

export async function generateMetadata({ params }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'meta.contact' })

    return getSeo({
        locale,
        path: '/contact',
        title: t('title'),
        description: t('description'),
    })
}

export default function Contact() {
    const t = useTranslations('pages.contact')

    return (
        <>
            <section className="snap-start min-h-dvh">
                <ImageHero
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    scroll={t('hero.scroll')}
                    imageSrc="/images/conference-room.jpg"
                    imageAlt={t('hero.imageAlt')}
                />
            </section>

            <section className="snap-start min-h-dvh">
                <SplitContactSection />
            </section>
        </>
    )
}
