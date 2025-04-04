import Link from "next/link"
import { ChevronRight } from "lucide-react"
import KnowledgeCenterBlogsSection from "./_components/knowledge-center-blogs-section"
import { GlossarySection, PodcastSection } from "./_components/GlossaryPodcastSection"

export default function KnowledgeCenterPage() {
    return (
        <div>
            {/* Hero Section with Breadcrumb */}
            <div className="pt-[100px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                        <Link href="/" className="hover:text-teal-400 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="text-teal-400">Knowledge Center</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent py-4">
                        Knowledge Center
                    </h1>
                </div>
            </div>
            {/* Main Content */}
            <main className="py-12">
                <div className="container mx-auto px-4">
                    {/* Introduction Section */}
                    <div className="bg-indigo-100/10 backdrop-blur-sm rounded-xl p-6 mb-12 border border-indigo-300/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Welcome to the Mineral View Knowledge Center</h2>
                        <p className="text-gray-300 text-lg">
                            Your trusted source for understanding oil and gas industry trends. Our Knowledge Center is designed to
                            help mineral owners, operators, and industry professionals navigate the complexities of the energy sector
                            with ease.
                        </p>
                    </div>
                    {/* Blogs Section */}
                    <KnowledgeCenterBlogsSection />
                    {/* Glossary Section */}
                    <GlossarySection />
                    {/* Podcasts Section */}
                    <PodcastSection />
                    {/* Call to Action */}
                    <div className="mb-12 text-center">
                        <h3 className="text-xl font-bold text-teal-400">
                            Explore the Knowledge Center and stay ahead in the oil and gas industry!
                        </h3>
                    </div>
                </div>
            </main>
        </div>
    )
}

