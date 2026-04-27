import ImageHero from '@/components/ImageHero'
import CardCarouselSection from '@/components/CardCarouselSection'
import TeamGridSection from '@/components/TeamGridSection'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getSeo } from '@/lib/seo'

export async function generateMetadata({ params }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'meta.about' })

    return getSeo({
        locale,
        path: '/about',
        title: t('title'),
        description: t('description'),
    })
}

export default function About() {
    const t = useTranslations('pages.about')

    return (
        <>
            <section className="snap-start min-h-screen">
                <ImageHero
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    scroll={t('hero.scroll')}
                    imageSrc="/images/gatineau-skyline.jpg"
                    imageAlt={t('hero.imageAlt')}
                />
            </section>

            <section className="snap-start min-h-screen">
                <TeamGridSection />
            </section>

            <section className="snap-start min-h-screen">
                <CardCarouselSection
                    title={t('cardCarouselSection.title')}
                    cardTitles={[
                        t('cardCarouselSection.cardTitle1'),
                        t('cardCarouselSection.cardTitle2'),
                        t('cardCarouselSection.cardTitle3'),
                    ]}
                    paragraphs={[
                        t('cardCarouselSection.paragraph1'),
                        t('cardCarouselSection.paragraph2'),
                        t('cardCarouselSection.paragraph3'),
                    ]}
                    imageSrc="/images/gatineau-skyline.jpg"
                    transparency={30}
                />
            </section>
        </>
    )
}
