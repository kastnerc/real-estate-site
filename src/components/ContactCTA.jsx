import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function ContactCTA() {
    const t = useTranslations("pages.home.contactCTA")

    return (
        <section className="bg-black h-[50dvh] flex w-full sm:p-10 p-5 items-center justify-center">
                <div className="flex flex-col place-items-center text-center max-w-[75vw] gap-3">
                    <h2 className="text-xl md:text-2xl lg:text-3xl  uppercase tracking-wide text-white">
                        {t('title')}
                    </h2>

                    <div className="border-b border-white w-[25vw]"></div>

                    <p className="text-sm md:text-md lg:text-lg text-white">
                        {t('subtitle')}
                    </p>
                    <button className="bg-transparent text-sm md:text-md lg:text-lg border border-white uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 ease-out">
                        <Link
                            href="/contact"
                            className="block w-full h-full py-3 px-4 text-center no-underline uppercase"
                        >
                            {t('button')}
                        </Link>
                    </button>
                </div>
        </section>
    )
}
