"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FollowYourWellsSection() {
    const followYourWellsRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={followYourWellsRef}
                className="bg-gradient-to-r from-teal-900/20 to-gray-900/20 rounded-xl p-8 mb-12 pt-8 scroll-mt-32"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                            <Image
                                src="https://res.cloudinary.com/mineralview/image/upload/v1705476145/illustrations/Mapping-and-Research-Details-removebg-preview.WebP"
                                alt="Lease data valuation and analysis"
                                fill
                                className="object-contain rounded-md"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6">Easily Follow Your Wells on the Map</h2>
                        <p className="text-gray-300 mb-4">
                            Because data is not always centrally located, mineral owners may experience trouble
                            keeping tabs on their wells. Moreover, the geographic barriers, limited technological tools,
                            and non-uniform reporting standards further make it challenging to make informed decisions
                            about well activity. Presenting the MView&apos;s <strong>‘Mapping’</strong> tool that will help you visualize well
                            and lease locations with one click on our interactive maps.
                        </p>
                        <p className="text-gray-300 mb-6">
                            We analyze lease data, well data, recent production rates, future mineral potential, commodity prices,
                            and market trends to help you evaluate purchase proposals. This ensures that you're getting the best
                            possible value for your mineral interests.
                        </p>
                        <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                            Track Your Well Location
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}