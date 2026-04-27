import Image from 'next/image'

export default function ImageHero({ title, subtitle, scroll, imageSrc, imageAlt }) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center">
                <h1
                    className="flex items-center justify-center w-full max-w-5xl
                    text-white uppercase
                    text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                    tracking-wide"
                >
                    {title}
                </h1>
                <p
                    className="text-white sm:my-3
                    text-sm sm:text-base md:text-xl lg:text-2xl"
                >
                    {subtitle}
                </p>
            </div>

            <div className="absolute bottom-6 w-full flex flex-col items-center text-white">
                <span className="text-xs sm:text-sm md:text-base">
                    {scroll}
                </span>

                <span className="animate-bounce text-lg">↓</span>
            </div>
        </div>
    )
}
