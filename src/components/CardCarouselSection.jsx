'use client'

import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image'

export default function CardCarouselSection({
    paragraphs,
    cardTitles,
    title,
    imageSrc,
    transparency,
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

    return (
        <section className="relative overflow-hidden min-h-dvh flex items-center justify-center sm:p-10 p-5">
            <Image
                src={imageSrc}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
            />

            <div>
                <div
                    className={`absolute inset-0 bg-black/${transparency}`}
                ></div>

                <div className="text-center">
                    <h2 className="relative mb-5 text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase text-white tracking-wide">
                        {title}
                    </h2>

                    <div
                        className="py-2 px-5 relative flex justify-center items-center flex-col backdrop-blur-md bg-white/5 border border-white/20 group sm:max-w-[75vw] lg:max-w-[50vw]"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="relative h-10 w-full flex items-center justify-center">
                            {cardTitles.map((text, index) => (
                                <h3
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center text-sm md:text-md lg:text-lg xl:text-xl uppercase text-white transition-opacity duration-500 ${
                                        index === currentIndex
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                >
                                    {text}
                                </h3>
                            ))}
                        </div>

                        <div className="relative w-full flex items-center justify-center">
                            <p className="text-xs md:text-sm lg:text-md xl:text-lg text-white leading-relaxed opacity-0 pointer-events-none">
                                {paragraphs[currentIndex]}
                            </p>

                            {paragraphs.map((text, index) => (
                                <p
                                    key={index}
                                    className={`absolute inset-0 flex items-center justify-center text-center text-xs md:text-sm lg:text-md xl:text-lg text-white leading-relaxed transition-opacity duration-500 ${
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
                            <div className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-3 text-white cursor-pointer bg-black/60 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition">
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

                            <div className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-3 text-white cursor-pointer bg-black/60 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition">
                                <BsChevronCompactRight
                                    onClick={nextSlide}
                                    size={26}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
