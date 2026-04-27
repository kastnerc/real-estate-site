'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    const t = useTranslations()

    return (
        <nav>
            <div className="relative">
                <div
                    className={`z-30 absolute left-0 right-0 h-20 sm:h-20 w-full flex items-center justify-between bg-linear-to-b from-black/70 to-transparent text-white`}
                >
                    <div
                        className={`absolute sm:hidden inset-0 bg-black z-10 transition-opacity duration-500 ${
                            menuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    />

                    <Link
                        href="/"
                        className="sm:ml-5 md:ml-10 ml-5 no-underline font-light uppercase w-55 md:w-64 z-20"
                    >
                        <Image
                            src="/images/logo-text-white.png"
                            width={1080}
                            height={1080}
                            quality={75}
                            alt="Gendron & Kastner Immobilier Inc. logo"
                            priority
                        />
                    </Link>

                    <div className="hidden sm:flex text-center relative">
                        <ul className="list-none flex items-center gap-3 mx-4 lg:gap-10 lg:mx-10 p-0 sm:text-sm md:text-md lg:text-base">
                            <li className="relative">
                                <Link
                                    href="/"
                                    className="relative py-2 px-3 md:px-4 block w-full h-full text-center no-underline uppercase group"
                                >
                                    <span className="z-10 mx-auto">
                                        {t('nav.home')}
                                    </span>

                                    <span
                                        className="
                            absolute left-0 bottom-2 h-px w-full
                            bg-current scale-x-0 origin-left
                            transition-transform duration-300 ease-out group-hover:scale-x-100"
                                    />
                                </Link>
                            </li>
                            <li className="relative">
                                <Link
                                    href="/about"
                                    className="relative py-2 px-3 md:px-4 block w-full h-full text-center no-underline uppercase group"
                                >
                                    <span className="z-10 mx-auto">
                                        {t('nav.about')}
                                    </span>

                                    <span
                                        className="
                            absolute left-0 bottom-2 h-px w-full
                            bg-current scale-x-0 origin-left
                            transition-transform duration-300 ease-out group-hover:scale-x-100"
                                    />
                                </Link>
                            </li>

                            <li className="backdrop-blur-sm relative border border-white hover:bg-white hover:text-black transition-colors duration-300 ease-out">
                                <Link
                                    href="/contact"
                                    className="py-2 px-3 md:px-4 block w-full h-full text-center no-underline uppercase"
                                >
                                    {t('nav.contact')}
                                </Link>
                            </li>

                            <li>
                                <LocaleSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    onClick={handleNav}
                    className="sm:hidden cursor-pointer absolute top-0 h-20 flex items-center justify-end right-0 px-5 text-white z-30"
                >
                    <div className="relative w-8 h-8">
                        <AiOutlineMenu
                            className={`absolute text-3xl transition-all duration-300 ${
                                menuOpen
                                    ? 'opacity-0 rotate-90'
                                    : 'opacity-100 rotate-0'
                            }`}
                        />

                        <AiOutlineClose
                            className={`absolute text-3xl transition-all duration-300 ${
                                menuOpen
                                    ? 'opacity-100 rotate-0'
                                    : 'opacity-0 -rotate-90'
                            }`}
                        />
                    </div>
                </div>

                <div
                    className={`fixed top-20 w-full sm:hidden h-[calc(100vh-5rem)] bg-black px-[2vw] transition-opacity duration-500 ease-in-out z-20 ${
                        menuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }`}
                >
                    <div className="flex-col py-5 text-center mx-[10vw] flex justify-between h-full text-white uppercase text-xl">
                        <ul>
                            <li className="py-5 cursor-pointer border-b border-white/50">
                                <Link
                                    href="/"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('nav.home')}
                                </Link>
                            </li>

                            <li className="py-5 text-xl cursor-pointer text-white uppercase border-b border-white/50">
                                <Link
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('nav.about')}
                                </Link>
                            </li>

                            <li className="py-5 text-xl cursor-pointer text-white uppercase">
                                <Link
                                    href="/contact"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t('nav.contact')}
                                </Link>
                            </li>
                        </ul>

                        <div className="pt-5 border-t border-white/50 flex justify-center">
                            <LocaleSwitcher className="text-white text-lg tracking-widest" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
