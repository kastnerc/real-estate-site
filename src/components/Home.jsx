import Image from 'next/image'

export default function Home({ title, subtitle, imageSrc, imageAlt }) {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={imageSrc}
                width={1080}
                height={1080}
                quality={75}
                alt={imageAlt}
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

            <div className="absolute flex border-black w-full h-full justify-center items-center flex-col">
                <h1 className="font-semi-bold text-white text-6xl uppercase mb-3">
                    {title}
                </h1>
                <h2 className="text-xl text-white">{subtitle}</h2>
            </div>

            <div className="absolute inset-x-0 bottom-8 flex flex-col text-center items-center text-white">
                <span className="text-md">Scroll down</span>

                <span className="animate-bounce text-lg">↓</span>
            </div>
        </div>
    )
}
