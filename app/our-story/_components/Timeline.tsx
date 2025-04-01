export default function Timeline() {
    return (
        <div className="mb-16">
            <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-8">
                    In The Beginning
                    <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-300 mt-4"></div>
                </h2>

                {/* Timeline - Exact replica of the reference design with our color scheme */}
                <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 md:p-8 mt-12">
                    <h3 className="text-2xl font-bold mb-8">Our Timeline</h3>

                    <div className="relative">
                        {/* Timeline vertical line - position maintained */}
                        <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-0 bottom-0 w-[1px] bg-teal-500/50"></div>

                        {/* Timeline items */}
                        <div className="space-y-12 sm:space-y-16">
                            {/* 1914: A Humble Beginning */}
                            <div className="relative flex items-start">
                                <div className="w-[40px] sm:w-[50px] md:w-[60px] text-base sm:text-lg md:text-xl font-bold text-gray-400 text-right pr-6 sm:pr-8 md:pr-10">
                                    1914
                                </div>
                                {/* Timeline dot */}
                                <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                                <div className="pl-5 sm:pl-6 md:pl-7">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">A Humble Beginning</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                                        The Cochran family has a humble beginning in 1914 when their Grandfather Norman left his home
                                        in East Texas to make his way to West Texas.
                                    </p>
                                </div>
                            </div>

                            {/* 1917: The Great War */}
                            <div className="relative flex items-start">
                                <div className="w-[40px] sm:w-[50px] md:w-[60px] text-base sm:text-lg md:text-xl font-bold text-gray-400 text-right pr-6 sm:pr-8 md:pr-10">
                                    1917
                                </div>
                                {/* Timeline dot */}
                                <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                                <div className="pl-5 sm:pl-6 md:pl-7">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">The Great War</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                                        Norman was drafted for the &quot;Great War&quot; in 1917; however, he suffered a tragic accident which
                                        resulted in the loss of his right leg.
                                    </p>
                                </div>
                            </div>

                            {/* 1920s: Post-War Determination */}
                            <div className="relative flex items-start">
                                <div className="w-[40px] sm:w-[50px] md:w-[60px] text-base sm:text-lg md:text-xl font-bold text-gray-400 text-right pr-6 sm:pr-8 md:pr-10">
                                    1920s
                                </div>
                                {/* Timeline dot */}
                                <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                                <div className="pl-5 sm:pl-6 md:pl-7">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">Post-War Determination</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                                        After the war, Norman found work in Lamesa, Texas as a telegrapher for the Santa Fe Railroad.
                                        He refused to allow the loss of his leg to hold him back.
                                    </p>
                                </div>
                            </div>

                            {/* 1930s: The American Dream */}
                            <div className="relative flex items-start">
                                <div className="w-[40px] sm:w-[50px] md:w-[60px] text-base sm:text-lg md:text-xl font-bold text-gray-400 text-right pr-6 sm:pr-8 md:pr-10">
                                    1930s
                                </div>
                                {/* Timeline dot */}
                                <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                                <div className="pl-5 sm:pl-6 md:pl-7">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">The American Dream</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                                        In the late 1930s, Norman finally saved enough to purchase a small cotton farm in the hopes of
                                        achieving his part in the &quot;American Dream&quot;.
                                    </p>
                                </div>
                            </div>

                            {/* 1971: A Legacy of Wisdom */}
                            <div className="relative flex items-start">
                                <div className="w-[40px] sm:w-[50px] md:w-[60px] text-base sm:text-lg md:text-xl font-bold text-gray-400 text-right pr-6 sm:pr-8 md:pr-10">
                                    1971
                                </div>
                                {/* Timeline dot */}
                                <div className="absolute left-[50px] sm:left-[60px] md:left-[70px] top-1.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-500 transform -translate-x-1/2"></div>
                                <div className="pl-5 sm:pl-6 md:pl-7">
                                    <h4 className="text-base sm:text-lg font-semibold text-white">A Legacy of Wisdom</h4>
                                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                                        Before he died in 1971, he passed along his legacy as told by his mantras: &quot;We should not
                                        begrudge a man his profit&quot; and &quot;one good investment is worth a lifetime of toil&quot;.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}