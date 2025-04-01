"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function KnowTrueWorthSection() {
    const leaseValueRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={leaseValueRef}
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
                        <h2 className="text-3xl font-bold mb-6">Know The True Worth Of Your Leases</h2>
                        <p className="text-gray-300 mb-4">
                            Stop engaging in complex methods and efforts to know your lease value! With MView&apos;s cutting-edge
                            technology, you can easily determine the value of your leases through simplified analysis.
                        </p>
                        <p className="text-gray-300 mb-6">
                            We analyze lease data, well data, recent production rates, future mineral potential, commodity prices,
                            and market trends to help you evaluate purchase proposals. This ensures that you&apos;re getting the best
                            possible value for your mineral interests.
                        </p>
                        <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                            Maximize Your Lease
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}