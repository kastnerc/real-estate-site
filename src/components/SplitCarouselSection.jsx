'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export default function SplitCarouselSection({ leftTitle, leftParagraph, slides }) {
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
            // swipe left → next
            nextSlide()
        } else if (distance < -minSwipeDistance) {
            // swipe right → prev
            prevSlide()
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <section className="min-h-screen flex items-center sm:p-10 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 w-full items-center">
                {/* TEXT */}
                <div className="max-w-xl mx-auto">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase mb-2 sm:mb-3 text-center md:text-left tracking-wide">
                        {leftTitle}
                    </h2>

                    <p className="text-sm md:text-md lg:text-lg xl:text-xl leading-relaxed text-center md:text-left">
                        {leftParagraph}
                    </p>
                </div>
                
                {/* SLIDER */}
                <div
                    className="flex justify-center"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="relative w-full max-w-2xl group">
                        {/* IMAGE */}
                        <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
                            {slides.map((slide, index) => (
                                <Image
                                    key={index}
                                    src={slide}
                                    width={1080}
                                    height={1080}
                                    alt=""
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                                        index === currentIndex
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* ARROWS */}
                        <div className="flex lg:block">
                            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 text-white cursor-pointer bg-black/40 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition">
                                <BsChevronCompactLeft
                                    onClick={prevSlide}
                                    size={26}
                                />
                            </div>

                            <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 text-white cursor-pointer bg-black/40 p-2 rounded-full backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 transition">
                                <BsChevronCompactRight
                                    onClick={nextSlide}
                                    size={26}
                                />
                            </div>
                        </div>

                        {/* DOTS */}
                        <div className="flex justify-center gap-2 mt-4">
                            {slides.map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className={`text-xl cursor-pointer transition transform ${
                                        slideIndex === currentIndex
                                            ? 'opacity-100 scale-110'
                                            : 'opacity-40'
                                    }`}
                                >
                                    <RxDotFilled />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
