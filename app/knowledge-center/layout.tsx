import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Knowledge Center | Mineral View",
    description:
        "Access educational resources, industry insights, and expert guidance on oil and gas mineral management.",
}

export default function KnowledgeCenterLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

