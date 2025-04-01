"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MonitorWellActivitySection() {
    const monitorWellActivityRef = useRef<HTMLDivElement | null>(null)
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient) {
        return (
            <div
                ref={monitorWellActivityRef}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center pt-8 scroll-mt-32"
            >
                <div>
                    <h2 className="text-3xl font-bold mb-6">Monitor current activity on your well!</h2>
                    <p className="text-gray-300 mb-4">
                        Stay informed with Mineral View&apos;s alert feeds, ensuring you
                        never miss important activities around your well. Receive
                        in-depth insights into your well&apos;s oil and gas operations,
                        including nearby permits and test results.
                    </p>
                    <p className="text-gray-300 mb-6">
                        Don&apos;t be the last to find out what&apos;s happening with your
                        mineral leases. With Mineral View, you&apos;ll be the first to know
                        about key activities around your wells, helping you stay ahead
                        and maximize the value and returns from your mineral interests.
                    </p>
                    <button className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                        Stay Updated
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
                <div className="relative">
                    <div className="relative h-[300px] w-full max-w-[500px] mx-auto">
                        <Image
                            src="https://res.cloudinary.com/mineralview/image/upload/Images/Recent-Activity-Notification.WebP"
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