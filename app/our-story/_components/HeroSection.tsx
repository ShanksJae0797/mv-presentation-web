import { ChevronRight } from "lucide-react"
export default function HeroSection() {
    return (
        <div className="pt-[100px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-0"></div>
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                    <a href="/" className="hover:text-teal-400 transition-colors">
                        Home
                    </a>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="text-teal-400">About Us</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-4 font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Our Story
                </h1>
            </div>
        </div>
    )
}