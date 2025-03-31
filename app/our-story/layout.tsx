import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About MView | Our Story",
    description:
        "Learn about MView's history, our family legacy, and our commitment to helping mineral owners maximize their assets.",
}

export default function OurStoryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

