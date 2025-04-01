"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ForecastIncome() {
    const mineralRoyaltiesRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={mineralRoyaltiesRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center pt-8 scroll-mt-32"
            >
                <div>
                    <h2 className="text-3xl font-bold mb-6">Forecast Your Incomes</h2>
                    <p className="text-gray-300 mb-4">
                        Planning for the future can be tough when you&apos;re unsure about the financial future of your royalties.
                        MView&apos;s accurate mineral analytics and real-time updates ensure the right mineral royalty payment data
                        forecasts and maximize monetary benefits.
                    </p>
                    <p className="text-gray-300 mb-6">
                        With MView&apos;s comprehensive <span className="text-teal-400 font-semibold">Mineral Royalties</span>{" "}
                        feature, you can analyze production rates, lease data, mineral potential, and commodity prices—all in
                        one place. With our estimates, you will get a better handle on the future so you can manage your mineral
                        rights more effectively and get the most out of what you own.
                    </p>
                    <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                        Know Your Royalties
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