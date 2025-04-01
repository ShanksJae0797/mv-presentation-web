import Image from "next/image"
export default function BoldSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-teal-400 bg-teal-900/20 rounded-full">
                    BOLD Precious Metals
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">Family Business</h2>
                <p className="text-lg text-gray-300 mb-4">
                    <span className="text-teal-400 font-medium">BOLD Precious Metals</span> has been involved in precious
                    metals for over 30 years, inspired by the Cochran family&apos;s grandfather, an avid coin collector. He
                    instilled in the family a deep appreciation for the beauty and historical significance of coins.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                    As the family pursued careers in various fields such as engineering, finance, and technology, they
                    continued to maintain their interest in precious metals as a hobby and as a means to invest in physical
                    assets.
                </p>
                <p className="text-lg text-gray-300">
                    Coin collecting became a fun and educational way to teach their children about the history of the United
                    States and to introduce them to other cultures around the world.
                </p>
            </div>

            <div className="relative">
                <div className="relative w-full aspect-[613/400] max-w-[613px] rounded-lg overflow-hidden shadow-xl mx-auto">
                    <Image
                        src="https://res.cloudinary.com/mineralview/image/upload/ss-mview.webp"
                        alt="BOLD Precious Metals Website"
                        fill
                        className="object-cover object-left-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 613px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                </div>
            </div>
        </div>
    )
}