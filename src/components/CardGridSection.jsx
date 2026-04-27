import Image from 'next/image'

export default function CardGridSection({ title, cards, imageSrc, transparency }) {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center sm:p-10 p-3">
            <Image
                src={imageSrc}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
            />

            <div className={`absolute inset-0 bg-black/${transparency}`}></div>

            <div className="relative w-full max-w-6xl mx-auto">
                <div className="text-center mb-4 sm:mb-5">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-white tracking-wide">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`text-center backdrop-blur-md bg-white/5 border border-white/20 p-3 sm:p-5
                                ${card.isWide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <h3 className="text-md md:text-lg lg:text-xl xl:text-2xl uppercase text-white mb-2 sm:mb-3">
                                {card.title}
                            </h3>

                            <p className="text-sm md:text-md lg:text-lg xl:text-xl text-white leading-relaxed">
                                {card.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
