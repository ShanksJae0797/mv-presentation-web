import Image from "next/image"

export default function NewChapterSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative order-2 lg:order-1">
                <div className="relative w-full aspect-[759/503] max-w-[759px] rounded-lg overflow-hidden shadow-xl mx-auto">
                    <Image
                        src="https://res.cloudinary.com/mineralview/image/upload/Images/CochranFamily.Webp"
                        alt="The Cochran Family"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 759px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-teal-400 bg-teal-900/20 rounded-full">
                    New Chapter
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">The Legacy Continues</h2>
                <p className="text-lg text-gray-300 mb-4">
                    The Cochran Family is now in its sixth generation as Texans and continues to expand the legacy of their
                    grandfather Norman's dream, ensuring that his vision thrives for years to come. Rooted in a deep
                    appreciation for the land and its resources, they have dedicated themselves to understanding and
                    advancing the oil and gas industry.
                </p>
                <p className="text-lg text-gray-300 mb-4 font-medium">
                    Many of their family members have become petroleum engineers, earning degrees from prestigious
                    universities like Texas A&M and the University of Texas.
                </p>
                <p className="text-lg text-gray-300">
                    MView was founded on the Cochran family's legacy of integrity, expertise, and resource stewardship. With
                    deep industry knowledge and a personal connection to the field, they guide families in maximizing their
                    mineral assets responsibly.
                </p>
            </div>
        </div>
    )
}