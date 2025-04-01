"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HarnessKnowledgeSection() {
    const harnessKnowledgeRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={harnessKnowledgeRef}
                className="bg-gradient-to-r from-teal-900/20 to-gray-900/20 rounded-xl p-8 mb-12 pt-8 scroll-mt-32"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                            <Image
                                src="https://res.cloudinary.com/mineralview/image/upload/v1705476677/illustrations/lease-data-valuation-and-analysis.WebP"
                                alt="Lease data valuation and analysis"
                                fill
                                className="object-contain rounded-md"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6">Harness the Power of Knowledge</h2>
                        <p className="text-gray-300 mb-4">
                            Understanding the ever-evolving oil and gas industry is
                            key to making informed decisions. Whether you&apos;re
                            managing mineral rights, knowing more about production
                            details, or keeping up with industry trends, staying
                            informed gives you an advantage. Gain deeper insights into
                            market shifts, technological advancements, and best practices
                            that shape the energy sector. Knowledge is power—start
                            exploring today!
                        </p>
                        <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                            Knowledge Center
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}