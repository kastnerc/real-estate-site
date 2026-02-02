import Image from 'next/image'

export default function SplitSection({
    leftTitle,
    leftParagraph,
    imageSrc,
    imageAlt,
}) {
    return (
        <section className="py-10">
            <div className="grid grid-cols-2 gap-10 px-10 ">
                <div className="text-center">
                    <h1 className="text-2xl uppercase pb-4">{leftTitle}</h1>
                    <p className="px-5">{leftParagraph}</p>
                    <button className="bg-transparent py-2 px-4 m-5 border rounded border-black font-semibold">
                        Button 1
                    </button>
                </div>

                <div className="px-5">
                    <Image
                        src={imageSrc}
                        width={1080}
                        height={1080}
                        quality={100}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </section>
    )
}
