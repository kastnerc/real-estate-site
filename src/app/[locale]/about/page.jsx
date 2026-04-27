import Hero from '@/components/Hero'
import CardCarousel from '@/components/CardCarousel'
import TeamSection from '@/components/TeamSection'
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
                <Hero
                    title={t('hero.title')}
                    subtitle={t('hero.subtitle')}
                    scroll={t('hero.scroll')}
                    imageSrc="/images/gatineau-skyline.jpg"
                    imageAlt={t('hero.imageAlt')}
                />
            </section>

            <section className="snap-start min-h-screen">
                <TeamSection
                    imageAlt1={t('teamSection.imageAlt1')}
                    imageAlt2={t('teamSection.imageAlt2')}
                />
            </section>

            <section className="snap-start min-h-screen">
                <CardCarousel
                    title={t('cardCarousel.title')}
                    cardTitles={[
                        t('cardCarousel.cardTitle1'),
                        t('cardCarousel.cardTitle2'),
                        t('cardCarousel.cardTitle3'),
                    ]}
                    paragraphs={[
                        t('cardCarousel.paragraph1'),
                        t('cardCarousel.paragraph2'),
                        t('cardCarousel.paragraph3'),
                    ]}
                    imageSrc="/images/gatineau-skyline.jpg"
                    transparency={30}
                />
            </section>
        </>
    )
}
