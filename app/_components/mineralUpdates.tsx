import { FileText, TrendingUp, FileBarChart } from "lucide-react"

export default function MineralUpdates() {
    return (
        <section className="py-16 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-[#f8f4e3] bg-clip-text text-transparent">
                        Keep Your Eye On The Latest Mineral Updates With MView
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 - Mineral News */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-md hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                <FileText className="w-8 h-8 text-blue-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4 text-white">Mineral News</h3>
                        <p className="text-gray-300 text-center">
                            Your personalized news tool delivers the latest and instant mineral news directly to you.
                        </p>
                    </div>

                    {/* Card 2 - Analyze Production Trends */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-md hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                <TrendingUp className="w-8 h-8 text-amber-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4 text-white">Analyze Production Trends</h3>
                        <p className="text-gray-300 text-center">
                            Use our tools to review oil and gas trends and make informed decisions for future operations.
                        </p>
                    </div>

                    {/* Card 3 - Get The Reports */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-md hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                                <FileBarChart className="w-8 h-8 text-teal-400" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-4 text-white">Get The Reports</h3>
                        <p className="text-gray-300 text-center">
                            Get detailed lease, well, and field reports with essential mineral activity data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

