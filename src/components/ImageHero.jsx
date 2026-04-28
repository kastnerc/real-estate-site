import Image from 'next/image'

export default function ImageHero({
    title,
    subtitle,
    scroll,
    imageSrc,
    imageAlt,
}) {
    return (
        <section className="relative h-dvh w-full overflow-hidden">
            <div className="fixed inset-0 -z-10">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex flex-col items-center max-w-[90vw] sm:max-w-[75vw] text-center">
                    <h1
                        className="flex items-center justify-center w-full max-w-5xl
                    text-white uppercase
                    text-3xl md:text-4xl lg:text-5xl
                    tracking-wide"
                    >
                        {title}
                    </h1>
                    <p
                        className="text-white sm:my-3
                    text-md md:text-lg xl:text-xl"
                    >
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-6 w-full flex flex-col items-center text-white">
                <span className="text-sm">{scroll}</span>

                <span className="animate-bounce text-lg">↓</span>
            </div>
        </section>
    )
}
