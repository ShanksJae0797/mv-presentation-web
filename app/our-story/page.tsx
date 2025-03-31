import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section with Breadcrumb */}
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Our Story
                    </h1>
                </div>
            </div>
            {/* Main Content */}
            <main className="py-12">
                <div className="container mx-auto px-4">
                    {/* Introduction Section */}
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
                            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                                <Image
                                    src="https://res.cloudinary.com/mineralview/image/upload/75-years-_2.webp"
                                    alt="Oil field workers"
                                    fill
                                    className="object-contain"
                                />

                                {/* Experience Badge */}
                                {/* <div className="absolute bottom-0 right-0 z-20 transform translate-y-1/4 translate-x-1/4">
                                    <div className="relative w-[180px] h-[180px]">
                                        <div className="absolute inset-0 rounded-full bg-gray-900 border-4 border-teal-500/30 shadow-lg flex items-center justify-center">
                                            <div className="text-center p-2">
                                                <div className="text-teal-400 text-sm font-medium mb-1">Over</div>
                                                <div className="text-5xl font-bold bg-gradient-to-b from-teal-300 to-teal-500 bg-clip-text text-transparent mb-1">
                                                    75
                                                </div>
                                                <div className="text-gray-300 text-xs mb-1">Years of</div>
                                                <div className="bg-teal-500 text-white text-xs px-2 py-1 rounded-sm mb-1">
                                                    COLLECTIVE EXPERIENCE
                                                </div>
                                                <div className="text-gray-300 text-xs">IN OIL INDUSTRY</div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 rounded-full">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-12 h-3 origin-left"
                                                    style={{
                                                        transform: `rotate(${i * 30}deg)`,
                                                        left: "50%",
                                                        top: "50%",
                                                        opacity: i % 2 === 0 ? 0.7 : 0.4,
                                                    }}
                                                >
                                                    <svg viewBox="0 0 24 6" fill="none" className="w-full h-full">
                                                        <path d="M0 3C8 0 16 6 24 3" stroke="#00CD95" strokeWidth="1" />
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* History Section */}
                    <div className="mb-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8 text-center">
                                In The Beginning
                                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mt-4"></div>
                            </h2>

                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-gray-800 ml-3 md:ml-4"></div>

                                {/* Timeline content */}
                                <div className="space-y-12 relative">
                                    <div className="relative pl-10 md:pl-16">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-teal-500 shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">1914: A Humble Beginning</h3>
                                        <p className="text-gray-300 mb-4">
                                            The Cochran family has a humble beginning in 1914 when their Grandfather Norman left his home in
                                            East Texas to make his way to West Texas, picking cotton on small farms around Snyder.
                                        </p>
                                    </div>

                                    <div className="relative pl-10 md:pl-16">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-teal-500 shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">1917: The Great War</h3>
                                        <p className="text-gray-300 mb-4">
                                            Norman was drafted for the "Great War" in 1917; however, while stationed at Camp Bowie near Fort
                                            Worth, training in the "Big Guns" Division for General Pershing, Norman suffered a tragic accident
                                            which resulted in the loss of his right leg and a medical discharge from the service.
                                        </p>
                                    </div>

                                    <div className="relative pl-10 md:pl-16">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-teal-500 shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">Post-War Determination</h3>
                                        <p className="text-gray-300 mb-4">
                                            After the war, Norman found work in Lamesa, Texas as a telegrapher for the Santa Fe Railroad. On
                                            weekends, he picked cotton for the local farms, pulling a cotton row sack with the one good leg
                                            while dragging his right wooden leg alongside. Norman was determined that he would never allow
                                            himself to be considered a "cripple." He also refused to allow the loss of his leg to hold him
                                            back.
                                        </p>
                                    </div>

                                    <div className="relative pl-10 md:pl-16">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-teal-500 shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">1930s: The American Dream</h3>
                                        <p className="text-gray-300 mb-4">
                                            In the late 1930s, Norman finally saved enough to purchase a small cotton farm in the hopes of
                                            achieving his part in the "American Dream." His life changed when oil was discovered on
                                            neighboring lands. Not immediately having any company approach him to develop his property, he
                                            sought out an attorney to seek an offer and to negotiate a lease with a company.
                                        </p>
                                    </div>

                                    <div className="relative pl-10 md:pl-16">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-teal-500 shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4 text-white">A Legacy of Wisdom</h3>
                                        <p className="text-gray-300 mb-4">
                                            This effort was successful at getting wells drilled, wells that would later become part of a
                                            waterflood, but at a cost of half of Norman's royalties. Before he died in 1971, he passed along
                                            his legacy as told by his mantras:
                                        </p>
                                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-teal-500 shadow-lg mb-4">
                                            <p className="text-xl italic text-white">
                                                "We should not begrudge a man his profit" and "one good investment is worth a lifetime of toil".
                                            </p>
                                        </div>
                                        <p className="text-gray-300">
                                            This legacy, one of treating people fairly, of being treated fairly, and of learning to make wise
                                            investments, became the charge for his children and grandchildren and is now the basis of the
                                            business model of MView, as well as the other businesses the Cochran family have established.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Idea Section */}
                            <div className="mt-16 bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-800 shadow-lg">
                                <h3 className="text-2xl font-bold mb-6 text-white">Idea</h3>
                                <p className="text-gray-300 mb-4">
                                    The idea for MView was born out of the founders' own frustrations with the lack of transparency and
                                    information available to mineral owners in the industry. They recognized the need for a platform that
                                    provided comprehensive and up-to-date information on their mineral interests and holdings.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    Over time, the founders developed a suite of tools and resources that would allow mineral owners to
                                    better understand and manage their investments. From the MPact suite of features that provides
                                    real-time updates on lease and well reports, to the MPower Community Forum that allows for knowledge
                                    sharing and discussion, MView is dedicated to empowering mineral owners.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    As a family-owned and operated business, MView places a strong emphasis on building personal
                                    relationships with its clients and providing a high level of customer service. The team is committed
                                    to continually improving the platform and expanding its features to better serve the needs of mineral
                                    owners and investors.
                                </p>
                                <p className="text-gray-300">
                                    Today, MView is a trusted resource for mineral owners and investors across the United States. The
                                    platform has continued to evolve and adapt to the ever-changing needs of the industry, but the
                                    commitment to empowering mineral owners remains at the core of everything MView does.
                                </p>
                            </div>

                            {/* New Chapter Section */}
                            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://res.cloudinary.com/mineralview/image/upload/Images/CochranFamily.Webp"
                                        alt="The Cochran Family"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-800 shadow-lg">
                                    <h3 className="text-2xl font-bold mb-4 text-white">New Chapter</h3>
                                    <p className="text-gray-300 mb-4">
                                        The Cochran Family is now in its sixth generation as Texans and continues to expand the legacy of
                                        their grandfather Norman's dream, ensuring that his vision thrives for years to come. Rooted in a
                                        deep appreciation for the land and its resources, they have dedicated themselves to understanding
                                        and advancing the oil and gas industry.
                                    </p>
                                    <p className="text-gray-300 mb-4 font-medium">
                                        Many of their family members have become petroleum engineers, earning degrees from prestigious
                                        universities like Texas A&M and the University of Texas.
                                    </p>
                                    <p className="text-gray-300">
                                        MView was founded on the Cochran family's legacy of integrity, expertise, and resource stewardship.
                                        With deep industry knowledge and a personal connection to the field, they guide families in
                                        maximizing their mineral assets responsibly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOLD Precious Metals Section */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-800 shadow-lg">
                                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-teal-400 bg-teal-900/20 rounded-full">
                                    BOLD Precious Metals
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Family Business</h3>
                                <p className="text-gray-300 mb-4">
                                    At <span className="text-teal-400 font-medium">BOLD Precious Metals</span> has been involved in
                                    precious metals for over 30 years, inspired by the Cochran family's grandfather, an avid coin
                                    collector. He instilled in the family a deep appreciation for the beauty and historical significance
                                    of coins.
                                </p>
                                <p className="text-gray-300 mb-4">
                                    As the family pursued careers in various fields such as engineering, finance, and technology, they
                                    continued to maintain their interest in precious metals as a hobby and as a means to invest in
                                    physical assets.
                                </p>
                                <p className="text-gray-300">
                                    Coin collecting became a fun and educational way to teach their children about the history of the
                                    United States and to introduce them to other cultures around the world.
                                </p>
                            </div>

                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="https://res.cloudinary.com/mineralview/image/upload/ss-mview.webp"
                                    alt="BOLD Precious Metals Website"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

