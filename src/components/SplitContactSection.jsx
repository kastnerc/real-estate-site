'use client'

import { useState } from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useTranslations } from 'next-intl'
import Modal from '@/components/Modal'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa'
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function SplitContactSection() {
    const t = useTranslations('pages.contact')
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const data = new FormData(form)

        try {
            const res = await fetch('https://formspree.io/f/xwvwvvry', {
                method: 'POST',
                body: data,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (res.ok) {
                form.reset()
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <section className="min-h-dvh flex items-center justify-center flex-col bg-black text-white lg:p-10 p-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl  md:text-left no-underline font-light uppercase mb-5">
                {t('splitFormSection.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 w-full items-center">
                <div className="md:col-span-2 lg:col-span-1 lg:pr-10 md:pr-5 md:border-r-2 md:pb-0 md:border-b-0 pb-6 border-b-2 text-sm md:text-md lg:text-lg">
                    <form
                        onSubmit={handleSubmit}
                        method="POST"
                        className="py-1 px-4 sm:px-5 border border-white"
                    >
                        <div className="py-4 sm:pb-5">
                            <label className="block font-medium mb-1">
                                {t('splitFormSection.name')}
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder={t(
                                    'splitFormSection.namePlaceholder'
                                )}
                                className="w-full border border-white p-2"
                                required
                            />
                        </div>

                        <div className="pb-4 sm:pb-5">
                            <label className="block font-medium mb-1">
                                {t('splitFormSection.email')}
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder={t(
                                    'splitFormSection.emailPlaceholder'
                                )}
                                className="w-full border border-white p-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">
                                {t('splitFormSection.message')}
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder={t(
                                    'splitFormSection.messagePlaceholder'
                                )}
                                className="w-full border border-white p-2"
                                required
                            ></textarea>
                        </div>

                        <div className="w-full text-center p-4 sm:p-5">
                            <button
                                type="submit"
                                className="bg-black text-white uppercase cursor-pointer
                                bg-linear-to-r from-white to-white
                                bg-size-[0%_1px] bg-bottom-left bg-no-repeat
                                hover:bg-size-[100%_1px]
                                transition-all duration-300 ease-out"
                            >
                                {t('splitFormSection.button')}
                            </button>
                        </div>

                        {status === 'success' && (
                            <Modal
                                message={
                                    <>
                                        <IoIosCheckmarkCircleOutline className="text-6xl md:text-7xl lg:text-8xl" />
                                        {t('splitFormSection.modalMessage')}
                                    </>
                                }
                            />
                        )}
                    </form>
                </div>

                <div className="lg:pl-10 md:pt-0 pt-4 md:pl-5 w-full md:col-span-3 lg:col-span-1">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 text-center">
                        <div className="md:mx-0 mx-auto">
                            <h3 className="text-md md:text-lg lg:text-lg uppercase">
                                {t('splitFormSection.office')}
                            </h3>

                            <a
                                href="mailto:gkimmobilier@outlook.com"
                                className="group flex items-center justify-center
                                text-sm md:text-md lg:text-lg"
                            >
                                <MdOutlineEmail className="text-lg md:text-xl lg:text-2xl mr-1"/>

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
                                text-sm md:text-md lg:text-lg"
                            >
                                <HiOutlinePhone  className="text-lg md:text-xl lg:text-2xl mr-1"/>

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

                        <div>
                            <h3 className="text-md md:text-lg lg:text-lg uppercase">
                                {t('splitFormSection.socials')}
                            </h3>

                            <div className="flex justify-center gap-6 sm:gap-4 text-xl lg:text-2xl">
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        <div className="md:mx-0">
                            <h3 className="text-md md:text-lg lg:text-lg uppercase">
                                Loic Gendron
                            </h3>

                            <div className="flex justify-center gap-10 text-xl lg:text-2xl">
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-md md:text-lg lg:text-lg uppercase">
                                Caleb Kastner
                            </h3>

                            <div className="flex justify-center gap-10 text-xl lg:text-2xl">
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/lo%C3%AFc-gendron/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 cursor-pointer transition hover:drop-shadow-[0_0_5px_white] duration-200 hover:scale-120"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
