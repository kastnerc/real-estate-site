'use client'

export default function SplitVideoSection({
    leftTitle,
    leftParagraph,
    videoSrc,
}) {
    return (
        <section className="min-h-screen flex items-center sm:p-10 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 w-full items-center">
                {/* TEXT */}
                <div className="max-w-xl mx-auto">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mb-2 sm:mb-3 text-center md:text-left tracking-wide">
                        {leftTitle}
                    </h2>

                    <p className="text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed text-center md:text-left">
                        {leftParagraph}
                    </p>
                </div>

                {/* SLIDER */}
                <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl">
                        <video
                            className="w-full h-full object-cover"
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
