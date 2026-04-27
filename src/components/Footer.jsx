'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations()

    return (
        <footer className="snap-end my-auto bg-white min-h-[50vh] flex justify-center items-center md:px-10 px-5 w-full">
            <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center flex-wrap gap-2 sm:gap-5 lg:gap-10 lg:w-full max-w-6xl">
                <div className="gap-2 sm:gap-5 flex-col flex">
                    <Image
                        src="/images/logo-text-black.png"
                        width={1080}
                        height={1080}
                        quality={75}
                        alt="Gendron & Kastner Immobilier Inc. logo"
                        className="w-70 p-2"
                    />

                    <div className="text-center text-sm md:text-md lg:text-lg">
                        <a
                            href="mailto:gkimmobilier@outlook.com"
                            className="group flex items-center justify-center
                                text-sm lg:text-md xl:text-lg"
                        >
                            <span className="text-lg md:text-xl lg:text-2xl mr-1">
                                ✉
                            </span>

                            <span
                                className="bg-linear-to-r from-current to-current
                                    bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                    transition-all duration-300 ease-out
                                    group-hover:bg-size-[100%_1px]"
                            >
                                gkimmobilier@outlook.com
                            </span>
                        </a>

                        <a
                            href="tel:+18194850926"
                            className="group flex items-center justify-center
                                text-sm lg:text-md xl:text-lg"
                        >
                            <span className="text-lg md:text-xl lg:text-2xl mr-1">
                                ☎
                            </span>

                            <span
                                className="bg-linear-to-r from-current to-current
                                    bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                    transition-all duration-300 ease-out
                                    group-hover:bg-size-[100%_1px]"
                            >
                                +1 819-485-0926
                            </span>
                        </a>
                    </div>

                    <div className="flex justify-between text-xl lg:text-2xl">
                        <a
                            href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 cursor-pointer transition-transform duration-200 hover:scale-120 hover:text-gray-700 text-xl lg:text-2xl"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className="text-sm md:text-md lg:text-lg md:text-right flex flex-col gap-2 sm:gap-5 mt-auto justify-end">
                    <div className="flex justify-around gap-6">
                        <Link
                            href="/"
                            className="group flex items-center justify-center"
                        >
                            <span
                                className="bg-linear-to-r from-current to-current
                                    bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                    transition-all duration-300 ease-out
                                    group-hover:bg-size-[100%_1px]"
                            >
                                {t('footer.home')}
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className="group flex items-center justify-center"
                        >
                            <span
                                className="bg-linear-to-r from-current to-current
                                    bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                    transition-all duration-300 ease-out
                                    group-hover:bg-size-[100%_1px]"
                            >
                                {t('footer.about')}
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="group flex items-center justify-center"
                        >
                            <span
                                className="bg-linear-to-r from-current to-current
                                    bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                    transition-all duration-300 ease-out
                                    group-hover:bg-size-[100%_1px]"
                            >
                                {t('footer.contact')}
                            </span>
                        </Link>
                    </div>

                    <div className="text-center text-xs sm:text-sm md:text-md text-gray-600 flex flex-col sm:flex-row items-center">
                        <p className="">{t('footer.copyright')} </p>
                        <span className="hidden sm:block mx-2 font-bold">
                            {' '}
                            |{' '}
                        </span>
                        <p className="">
                            <Link
                                href="/privacy-policy"
                                className="hover:underline"
                            >
                                {t('footer.privacy')}
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
