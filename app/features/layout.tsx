import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "MView Services | Mineral Management Solutions",
    description:
        "Explore MView's comprehensive services for mineral owners including royalty tracking, lease valuation, and mineral potential analysis.",
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

