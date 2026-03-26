import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="min-h-screen mx-auto w-[60vw]">
            <div className="grid grid-cols-2 gap-10 px-10 py-10">
                <div className="text-4xl uppercase">
                    <h1>
                        Our team of investors <br /> & experts
                    </h1>
                </div>
                <div className="text-lg">
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis aut architecto molestiae ratione nisi
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 p-10">
                <div className="">
                    <Image
                        src="/images/Man.jpg"
                        width={1080}
                        height={1080}
                        quality={75}
                        alt="man"
                    />

                    <div className="bg-gray-100 p-5">
                        <h3 className="font-bold text-xl">Loic Gendron</h3>
                        <h4 className="text-large">Coproprietaire</h4>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/images/Man.jpg"
                        width={1080}
                        height={1080}
                        quality={75}
                        alt="man"
                    />

                    <div className="bg-gray-100 p-5">
                        <h3 className="font-bold text-xl">Loic Gendron</h3>
                        <h4 className="text-large">Coproprietaire</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
