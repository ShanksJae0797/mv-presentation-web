import Image from "next/image"
export default function IntroductionSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-teal-400 bg-teal-900/20 rounded-full">
                    About MView
                </div>
                <p className="text-lg text-gray-300 mb-6">
                    MView is a family owned and operated business founded by the Cochran family. The MView founders are
                    experienced mineral owners and skilled operatives in the oil industry that endeavor to empower and
                    assist all Land and Mineral owners.
                </p>
                <p className="text-lg text-gray-300">
                    With over 75 years of combined experience as Texas mineral owners, between its members and their
                    associates, the Cochran family has an extensive history understanding the nuances of the Oil Patch.
                </p>
            </div>
            <div className="relative">
                <div className="relative w-full aspect-[650/420] max-w-[650px] rounded-lg overflow-hidden shadow-xl mx-auto">
                    <Image
                        src="https://res.cloudinary.com/mineralview/image/upload/75-years-_2.webp"
                        alt="Historical photo of oil workers with 75 years experience badge"
                        fill
                        className="object-cover object-left-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                    />
                </div>
            </div>
        </div>
    )
}