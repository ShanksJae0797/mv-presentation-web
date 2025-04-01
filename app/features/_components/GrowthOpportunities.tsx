"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GrowthOpportunitiesSection() {
    const growthOpportunitiesRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={growthOpportunitiesRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center pt-8 scroll-mt-32"
            >
                <div>
                    <h2 className="text-3xl font-bold mb-6">Be Social and Get Opportunities for Growth!</h2>
                    <p className="text-gray-300 mb-4">
                        Connect with mineral owners, operators, bankers, researchers,
                        and more to expand your social network in the right direction.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Join the MView community and become an active part of the
                        mineral industry. Connect with fellow mineral owners and
                        industry professionals. Ask questions, join groups, share
                        insights, and get expert advice. Be a part of our community
                        and discover how working together can help you maximize your
                        mineral interests.
                    </p>
                    <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                        Connect With Mineral Owners
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
                <div className="relative">
                    <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                        <Image
                            src="https://res.cloudinary.com/mineralview/image/upload/Images/Community-and-Data-Share.WebP"
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