import VideoHero from '@/components/VideoHero'
import SplitVideoSection from '@/components/SplitVideoSection'
import CardGridSection from '@/components/CardGridSection'
import CardCarouselSection from '@/components/CardCarouselSection'
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
                <VideoHero />
            </section>

            <section className="snap-start min-h-screen">
                <SplitVideoSection
                    leftTitle={t('splitCarouselSection.leftTitle')}
                    leftParagraph={t('splitCarouselSection.leftParagraph')}
                    videoSrc="/videos/triplex-montage.mp4"
                />
            </section>

            <section className="hidden sm:block snap-start min-h-screen">
                <CardGridSection
                    title={t('cardGridSection.title')}
                    cards={[
                        {
                            title: t('cardGridSection.cardTitle1'),
                            paragraph: t('cardGridSection.paragraph1'),
                        },
                        {
                            title: t('cardGridSection.cardTitle2'),
                            paragraph: t('cardGridSection.paragraph2'),
                        },
                        {
                            title: t('cardGridSection.cardTitle3'),
                            paragraph: t('cardGridSection.paragraph3'),
                            isWide: true,
                        },
                    ]}
                    imageSrc="/images/gatineau-skyline.jpg"
                    transparency={30}
                />
            </section>

            <section className="block sm:hidden snap-start min-h-screen">
                <CardCarouselSection
                    title={t('cardGridSection.title')}
                    cardTitles={[
                        t('cardGridSection.cardTitle1'),
                        t('cardGridSection.cardTitle2'),
                        t('cardGridSection.cardTitle3'),
                    ]}
                    paragraphs={[
                        t('cardGridSection.paragraph1'),
                        t('cardGridSection.paragraph2'),
                        t('cardGridSection.paragraph3'),
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
