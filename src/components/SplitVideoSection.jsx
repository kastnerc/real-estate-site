export default function SplitVideoSection({ title, intro, items, outro }) {
    return (
        <section className="min-h-dvh flex items-center sm:p-10 p-5 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 w-full items-center">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-xl md:text-2xl lg:text-3xl uppercase mb-2 sm:mb-3 text-center md:text-left tracking-wide">
                        {title}
                    </h2>

                    <p className="text-sm md:text-md lg:text-lg leading-relaxed text-center md:text-left">
                        {intro}
                    </p>

                    <ul className="text-sm md:text-md lg:text-lg leading-relaxed list-disc list-inside text-center md:text-left">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p className="text-sm md:text-md lg:text-lg leading-relaxed text-center md:text-left mb-2">
                        {outro}
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl">
                        <video
                            className="w-full h-full object-cover drop-shadow-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/videos/triplex-montage.mp4"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
