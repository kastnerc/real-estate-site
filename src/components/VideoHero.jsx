'use client'

import { useTranslations } from 'next-intl'

export default function VideoHero() {
    const t = useTranslations('pages.home')

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/Drone footage.mp4"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center">
                <h1
                    className="
                    flex items-center justify-center w-full max-w-5xl
                    text-white uppercase
                    text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                    tracking-wide
                "
                >
                    <span className="sm:flex-1 text-right">Gendron</span>

                    <span className="mx-2 sm:mx-4 md:mx-6">&</span>

                    <span className="sm:flex-1 text-left">Kastner</span>
                </h1>

                <p
                    className="
                    text-white sm:my-3
                    text-sm sm:text-base md:text-xl lg:text-2xl
                    max-w-xl
                "
                >
                    {t('hero.subtitle')}
                </p>
            </div>

            <div className="absolute bottom-6 w-full flex flex-col items-center text-white">
                <span className="text-xs sm:text-sm md:text-base">
                    {t('hero.scroll')}
                </span>
                <span className="animate-bounce text-lg">↓</span>
            </div>
        </div>
    )
}
