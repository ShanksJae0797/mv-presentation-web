"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { HomePageBlogsInterface } from "@/types/types"
import { formatDate, parseHTML } from "@/utils/utils"
import Link from "next/link"

type BlogPreviewCarouselProps = {
    blogs: HomePageBlogsInterface[]
}
export default function BlogPreviewCarousel({ blogs }: BlogPreviewCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const maxStartIndex = Math.max(0, blogs.length - 3)
            return prevIndex >= maxStartIndex ? 0 : prevIndex + 1
        })
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const maxStartIndex = Math.max(0, blogs.length - 3)
            return prevIndex <= 0 ? maxStartIndex : prevIndex - 1
        })
    }

    // Auto-play functionality
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide()
            }, 5000)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isAutoPlaying, nextSlide])

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-teal-400 bg-teal-900/20 rounded-full">
                            Latest Insights
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">From Our Blog</h2>
                    </div>
                    <Link
                        href="#"
                        className="hidden md:flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                    >
                        View All Articles
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
                {/* Carousel container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Blog posts container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
                            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                        >
                            {blogs.map((b: HomePageBlogsInterface) => (
                                <div key={b._id} className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]">
                                    <div className="group cursor-pointer">
                                        {/* Image with overlay */}
                                        <div className="relative h-52 overflow-hidden rounded-xl mb-4">
                                            <Image
                                                src={b.blog_header_img || "/placeholder.svg"}
                                                alt={b.blog_title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

                                            {/* Category badge */}
                                            <div className="absolute top-3 right-3 bg-teal-500/90 text-white text-xs font-medium px-2 py-1 rounded">
                                                {b.Category}
                                            </div>

                                            {/* Date */}
                                            <div className="absolute bottom-3 left-3 text-xs text-gray-300">{formatDate(b.Created_date)}</div>

                                            {/* Read more icon */}
                                            <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                <ArrowRight className="h-4 w-4 text-white" />
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <h3 className="text-lg font-bold mb-1 group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">
                                            {b.blog_title}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-2">{parseHTML(b.blog)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Navigation arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-4 md:left-0 top-1/3 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-4 md:right-0 top-1/3 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-6 space-x-1.5">
                    {Array.from({ length: Math.min(blogs.length - 2, blogs.length) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                currentIndex === index ? "bg-teal-500 w-6" : "bg-gray-600 hover:bg-gray-500",
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile view all button */}
                <div className="flex justify-center mt-6 md:hidden">
                    <a
                        href="#"
                        className="flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
                    >
                        View All Articles
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}

