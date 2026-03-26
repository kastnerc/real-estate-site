import Image from 'next/image'
import Link from 'next/link'

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
                    <button className="self-start bg-transparent text-lg my-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 ease-out uppercase">
                        <Link
                            href="/Contact"
                            className="block w-full h-full py-3 px-7 text-center no-underline uppercase"
                        >
                            Our other projects
                        </Link>
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
