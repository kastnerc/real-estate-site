'use client'

import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

export default function CardCarouselSection({
    paragraphs,
    cardTitles,
    title,
    imageSrc,
    buttonText,
    buttonPath,
}) {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd

        if (distance > minSwipeDistance) {
            nextSlide()
        } else if (distance < -minSwipeDistance) {
            prevSlide()
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? paragraphs.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === paragraphs.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    const isFirst = currentIndex === 0
    const isLast = currentIndex === paragraphs.length - 1

    return (
        <section className="relative overflow-hidden min-h-dvh flex items-center justify-center sm:p-10 p-12">
            <div className="fixed inset-0 -z-10">
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div>
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="text-center">
                    <h2 className="relative mb-5 text-xl md:text-2xl lg:text-3xl uppercase text-white tracking-wide">
                        {title}
                    </h2>

                    <div
                        className="p-3 sm:p-5 relative flex justify-center items-center flex-col backdrop-blur-md bg-white/5
                         border border-white/20 group sm:max-w-[75vw] lg:max-w-[50vw]"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="relative w-full flex items-center justify-center text-center">
                            {/* Ghost element to define dynamic height */}
                            <h3 className="text-md md:text-lg lg:text-lg uppercase text-white opacity-0 pointer-events-none">
                                {cardTitles[currentIndex]}
                            </h3>

                            {/* Animated titles */}
                            {cardTitles.map((text, index) => (
                                <h3
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center text-md md:text-lg lg:text-lg
                                    uppercase text-white text-center transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
                                >
                                    {text}
                                </h3>
                            ))}
                        </div>

                        <div className="relative w-full flex items-center justify-center">
                            <p className="text-sm md:text-md lg:text-lg text-white leading-relaxed opacity-0 pointer-events-none">
                                {paragraphs[currentIndex]}
                            </p>

                            {paragraphs.map((text, index) => (
                                <p
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center text-center text-sm md:text-md 
                                        lg:text-lg text-white leading-relaxed transition-opacity duration-500 ${
                                            index === currentIndex
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        }`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        <div className="w-full sm:block justify-around items-center">
                            <div
                                className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-3 text-white 
                            cursor-pointer bg-black/60 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 
                            transition"
                            >
                                <BsChevronCompactLeft
                                    onClick={prevSlide}
                                    size={26}
                                />
                            </div>

                            <div className="flex justify-center gap-2">
                                {paragraphs.map((_, slideIndex) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className={`text-xl text-white cursor-pointer transition transform ${
                                            slideIndex === currentIndex
                                                ? 'opacity-100 scale-110'
                                                : 'opacity-40'
                                        }`}
                                    >
                                        <RxDotFilled />
                                    </div>
                                ))}
                            </div>

                            <div
                                className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-3 text-white 
                            cursor-pointer bg-black/60 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 
                            transition"
                            >
                                <BsChevronCompactRight
                                    onClick={nextSlide}
                                    size={26}
                                />
                            </div>

                            <div className="sm:hidden">
                                {!isFirst && (
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+8px)] z-10 
                                        bg-black/60 text-white p-1.5 rounded-full backdrop-blur-sm border border-white/40"
                                    >
                                        <BsChevronCompactLeft size={22} />
                                    </button>
                                )}

                                {!isLast && (
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+5px)] z-10 
                                        bg-black/60 text-white p-1.5 rounded-full backdrop-blur-sm border border-white/40"
                                    >
                                        <BsChevronCompactRight size={22} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 flex justify-center">
                        <Link
                            href={buttonPath}
                            className="py-3 px-5 sm:px-7 text-md md:text-lg lg:text-lg backdrop-blur-sm border-2 border-white 
                            uppercase text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                        >
                            {buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
