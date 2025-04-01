"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ForecastIncome() {
    const uncoverMineralInterestRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={uncoverMineralInterestRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center pt-8 scroll-mt-32"
            >
                <div>
                    <h2 className="text-3xl font-bold mb-6">Uncover Your Mineral Interests</h2>
                    <p className="text-gray-300 mb-4">
                        Unsure about the next steps to take when you have valuable minerals under your
                        land? Here&apos;s your gateway to know the potential of your minerals. MView
                        engages in advanced Mineral Rolls Data analytics and specialized searching
                        methods to give a clear view of what your minerals might be worth.
                    </p>
                    <p className="text-gray-300 mb-6">
                        These reliable estimates help you make informed decisions with your
                        current operator, allowing you to maximize the value of your mineral
                        assets. Discover your mineral potential quickly and start increasing
                        your asset value today!.
                    </p>
                    <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                        View Your Mineral Potential
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
                <div className="relative">
                    <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                        <Image
                            src="https://res.cloudinary.com/mineralview/image/upload/q_auto,f_auto/Images/Cashflow.WebP"
                            alt="Financial growth and income forecasting"
                            fill
                            className="object-contain rounded-md"
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority
                        />
                    </div>
                </div>
            </div>
        )
    }
}