"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MineralSolution() {
    const mineralSolutionRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={mineralSolutionRef}
                className="bg-gradient-to-r from-teal-900/20 to-gray-900/20 rounded-xl p-8 mb-12 pt-8 scroll-mt-32"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                            <Image
                                src="https://res.cloudinary.com/mineralview/image/upload/Images/purchase-and-downloads.WebP"
                                alt="Purchase and downloads"
                                fill
                                className="object-contain rounded-md"
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold mb-6">One stop solution for all oil and gas data</h2>
                        <p className="text-gray-300 mb-4">
                            Why engage in multiple platforms and endless research for
                            the mineral data you need? MView&apos;s data hub gives you
                            everything in one place, saving you time and effort.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Our easy-to-use platform provides unlimited access to
                            comprehensive mineral and well data, helping you unlock
                            the full potential of your leases. Stay tuned with MView
                            and receive data faster and easier than ever before!
                        </p>
                        <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                            View And Download Data
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}