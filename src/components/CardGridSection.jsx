import Image from 'next/image'
import Link from 'next/link'

export default function CardGridSection({
    title,
    cards,
    imageSrc,
    buttonText,
    buttonPath,
}) {
    return (
        <section className="relative overflow-hidden min-h-dvh flex items-center sm:p-10 p-3">
            <div className="fixed inset-0 -z-10">
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative w-full max-w-6xl flex justify-center flex-col mx-auto">
                <div className="text-center mb-4 sm:mb-5">
                    <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-white tracking-wide">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`text-center backdrop-blur-md bg-white/5 border border-white/20 p-3 md:p-5
                                ${card.isWide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <h3 className="text-md md:text-lg lg:text-lg uppercase text-white mb-2 sm:mb-3">
                                {card.title}
                            </h3>

                            <p className="text-sm md:text-md lg:text-lg text-white leading-relaxed">
                                {card.paragraph}
                            </p>
                        </div>
                    ))}
                </div>

                <button
                    className="text-md md:text-lg lg:text-lg relative backdrop-blur-sm border-2 border-white uppercase text-white hover:bg-white
                         hover:text-black transition-colors duration-300 ease-in-out mt-7 mx-auto"
                >
                    <Link
                        href={buttonPath}
                        className="py-3 px-5 sm:px-7  block w-full h-full text-center no-underline uppercase"
                    >
                        {buttonText}
                    </Link>
                </button>
            </div>
        </section>
    )
}
