import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function ContactCTA() {
    const t = useTranslations("pages.home.contactCTA")

    return (
        <section className="bg-black h-[50vh] flex w-full sm:p-10 p-5 items-center justify-center">
                <div className="flex flex-col place-items-center text-center max-w-[75vw] gap-3">
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide text-white">
                        {t('title')}
                    </h2>

                    <div className="border-b border-white w-[25vw]"></div>

                    <p className="text-xs md:text-sm lg:text-md xl:text-lg text-white">
                        {t('subtitle')}
                    </p>
                    <button className="bg-transparent text-xs md:text-sm lg:text-md xl:text-lg border border-white uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 ease-out">
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
