"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { carouselData } from "@/data/data"
import { CarouselInterface } from "@/types/types"

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1))
    }, [carouselData.length])
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1))
    }
    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }
    // Auto-play functionality
    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide()
            }, 5000) // Change slide every 5 seconds
        }

        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, nextSlide])
    return (
        <div className="pt-[76px] sm:pt-[84px] md:pt-[92px] lg:pt-[100px]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* -------------------- HERO CAROUSEL -------------------- */}
                    <div className="lg:col-span-2">
                        <div
                            className="relative w-full overflow-hidden rounded-lg"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            {/* Main carousel container */}
                            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] w-full overflow-hidden">
                                {/* Images */}
                                <div
                                    className="flex transition-transform duration-500 ease-out h-full"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {carouselData.map((image: CarouselInterface, index) => (
                                        <div key={index} className="min-w-full h-full relative">
                                            <Image
                                                src={image.image}
                                                alt={image.title}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                                sizes="(max-width: 1024px) 100vw, 66vw"
                                            />

                                            {/* Caption overlay */}
                                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-8">
                                                <h2 className="text-white text-xl md:text-3xl font-bold mb-2">Featured Slide {index + 1}</h2>
                                                <p className="text-gray-200 text-sm md:text-base max-w-md">
                                                    This is a beautiful image carousel showcasing high-resolution images at 1100 x 450.
                                                </p>
                                            </div> */}
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation arrows */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {carouselData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={cn(
                                            "w-2.5 h-2.5 rounded-full transition-all duration-300",
                                            currentIndex === index ? "bg-teal-500 w-8" : "bg-white/50 hover:bg-white",
                                        )}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* -------------------- STATIC IMAGES -------------------- */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                        {/* First Image - Landman - Using aspect ratio approach */}
                        <div className="relative overflow-hidden rounded-lg border-2 border-gray-700">
                            <div className="w-full" style={{ paddingBottom: "35.7%" }}>
                                <Image
                                    src="https://res.cloudinary.com/mineralview/image/upload/db%20website/owener.webp"
                                    alt="Landman - Oil and gas industry professionals reviewing plans"
                                    fill
                                    className="object-fill"
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                        {/* Second Image - Operator - Using aspect ratio approach */}
                        <div className="relative overflow-hidden rounded-lg border-2 border-gray-700">
                            <div className="w-full" style={{ paddingBottom: "35.7%" }}>
                                <Image
                                    src="https://res.cloudinary.com/mineralview/image/upload/db%20website/operator.webp"
                                    alt="Operator - Oil field worker with safety equipment"
                                    fill
                                    className="object-fill"
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

