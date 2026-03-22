import Image from 'next/image'

export default function SplitSection({
    leftTitle,
    leftParagraph,
    imageSrc,
    imageAlt,
}) {
    return (
        <section className="min-h-screen flex py-10 items-center">
            <div className="grid grid-cols-2 gap-10 p-10 h-full items-center">
                <div>
                    <h1 className="text-3xl uppercase pb-4">{leftTitle}</h1>
                    <p>{leftParagraph}</p>
                    <button className="self-start bg-transparent text-lg py-3 px-7 my-4 border-2 border-black uppercase">
                        Button 1
                    </button>
                </div>

                <div className="px-5">
                    <Image
                        src={imageSrc}
                        width={1080}
                        height={1080}
                        quality={75}
                        alt={imageAlt}
                    />
                </div>
            </div>
        </section>
    )
}
