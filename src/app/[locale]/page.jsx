import HeroHome from '@/components/HeroHome'
import SplitCarouselSection from '@/components/SplitCarouselSection'
import SplitVideoSection from '@/components/SplitVideoSection'
import CardSection from '@/components/CardSection'
import CardCarousel from '@/components/CardCarousel'
import ContactCTA from '@/components/ContactCTA'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getSeo } from '@/lib/seo'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })

  return getSeo({
    locale,
    path: '',
    title: t('title'),
    description: t('description'),
  })
}

export default function Home() {
    const t = useTranslations('pages.home')
    return (
        <>
            <section className="snap-start min-h-screen">
                <HeroHome />
            </section>

            <section className="snap-start min-h-screen">

                <SplitVideoSection
                    leftTitle={t('splitCarouselSection.leftTitle')}
                    leftParagraph={t('splitCarouselSection.leftParagraph')}
                    videoSrc="/videos/triplex-montage.mp4"
                />
            </section>

            <section className="hidden sm:block snap-start min-h-screen">
                <CardSection
                    title={t('cardSection.title')}
                    cards={[
                        {
                            title: t('cardSection.cardTitle1'),
                            paragraph: t('cardSection.paragraph1'),
                        },
                        {
                            title: t('cardSection.cardTitle2'),
                            paragraph: t('cardSection.paragraph2'),
                        },
                        {
                            title: t('cardSection.cardTitle3'),
                            paragraph: t('cardSection.paragraph3'),
                            isWide: true,
                        },
                    ]}
                    imageSrc="/images/gatineau-skyline.jpg"
                    transparency={30}
                />
            </section>

            <section className="block sm:hidden snap-start min-h-screen">
                <CardCarousel
                    title={t('cardSection.title')}
                    cardTitles={[
                        t('cardSection.cardTitle1'),
                        t('cardSection.cardTitle2'),
                        t('cardSection.cardTitle3'),
                    ]}
                    paragraphs={[
                        t('cardSection.paragraph1'),
                        t('cardSection.paragraph2'),
                        t('cardSection.paragraph3'),
                    ]}
                    imageSrc="/images/gatineau-skyline.jpg"
                    transparency={30}
                />
            </section>

            <section>
                <ContactCTA />
            </section>
        </>
    )
}
