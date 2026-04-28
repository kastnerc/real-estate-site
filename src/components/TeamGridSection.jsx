import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function TeamGridSection() {
    const t = useTranslations('pages.about.teamGridSection')

    return (
        <section className="min-h-dvh flex w-full sm:p-10 p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto_auto_1fr] sm:grid-rows-[auto_1fr] gap-1 sm:gap-10 m-auto md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
                <h2 className="text-xl md:text-2xl lg:text-3xl  uppercase tracking-wide pl-2 sm:pl-0">
                    {t('title1')} <br /> {t('title2')}
                </h2>

                <h3 className="text-sm lg:text-md xl:text-lg sm:text-end sm:mt-auto pl-2 sm:pl-0 pb-2 sm:pb-0">
                    {t('subtitle')}
                </h3>

                <div className="sm:col-span-2 grid grid-cols-1 [@media(min-width:375px)]:grid-cols-2 gap-2 [@media(min-width:375px)]:gap-5 [@media(min-width:640px)]:gap-10 [@media(min-width:375px)]:px-0 px-12">
                    <div className="relative mb-12 sm:mb-16">
                        <Image
                            src="/images/Man.jpg"
                            width={1080}
                            height={1080}
                            quality={75}
                            alt={t('imageAlt1')}
                            className="transition-transform duration-300 hover:scale-105"
                        />

                        <div className="text-sm md:text-md lg:text-lg flex justify-between items-center bg-white text-left p-3 sm:p-4 m-1.5 sm:m-2 md:m-3 lg:m-4 absolute top-full [@media(min-width:640px)]:-translate-y-1/2 -translate-y-1/2 [@media(min-width:375px)]:-translate-y-1/3 inset-x-0 shadow-lg">
                            <div>
                                <p className="font-bold mr-1">
                                    Loic Gendron
                                </p>
                                <p>
                                    {t('cofounder')}
                                </p>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div className="relative mb-12 sm:mb-16">
                        <Image
                            src="/images/Man.jpg"
                            width={1080}
                            height={1080}
                            quality={75}
                            alt={t('imageAlt2')}
                            className="transition-transform duration-300 hover:scale-105"
                        />

                        <div className="text-sm md:text-md lg:text-lg flex justify-between items-center bg-white text-left p-3 sm:p-4 m-1.5 sm:m-2 md:m-3 lg:m-4 absolute top-full [@media(min-width:640px)]:-translate-y-1/2 -translate-y-1/2 [@media(min-width:375px)]:-translate-y-1/3 inset-x-0 shadow-lg">
                            <div>
                                <p className="font-bold">
                                    Caleb Kastner
                                </p>
                                <p>
                                    {t('cofounder')}
                                </p>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/caleb-kastner/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
