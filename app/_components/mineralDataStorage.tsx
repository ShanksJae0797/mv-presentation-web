import { Button } from "@/components/ui/button"

export default function MineralDataStorage() {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-[#f8f4e3] bg-clip-text text-transparent">Store Your Mineral Rolls Data</h2>

                    {/* Image and illustration section */}
                    <div className="relative bg-gray-900/50 rounded-xl overflow-hidden mb-8 border border-gray-800">
                        <div className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
                            {/* Left - Data stacks */}
                            <div className="mb-8 md:mb-0 text-center md:text-left">
                                <div className="inline-block bg-teal-900/20 rounded-full px-3 py-1 text-sm font-medium text-teal-400 mb-3">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Various Data Sets Available</h3>
                                <div className="flex justify-center md:justify-start space-x-1">
                                    {[1, 0.85, 0.7].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-12 h-16 bg-gradient-to-b from-teal-500 to-teal-600 rounded-sm relative"
                                            style={{ height: `${height * 4}rem` }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                                <div className="w-8 h-1 bg-teal-200 mb-1"></div>
                                                <div className="w-8 h-1 bg-teal-200 mb-1"></div>
                                                <div className="w-6 h-1 bg-teal-200"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Center - Person with device */}
                            <div className="mb-8 md:mb-0 relative">
                                <div className="inline-block bg-teal-900/20 rounded-full px-3 py-1 text-sm font-medium text-teal-400 mb-3">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Download Data Sets</h3>
                                <div className="w-40 h-40 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <div className="w-24 h-32 bg-gray-800 rounded-lg relative overflow-hidden">
                                        <div className="absolute top-0 left-0 right-0 h-6 bg-gray-700 flex items-center px-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="absolute top-8 left-2 right-2 bottom-2">
                                            <div className="h-3 w-full bg-teal-500/30 mb-2 rounded-sm"></div>
                                            <div className="h-3 w-3/4 bg-teal-500/30 mb-2 rounded-sm"></div>
                                            <div className="h-3 w-1/2 bg-teal-500/30 rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Storage folder */}
                            <div className="text-center md:text-right">
                                <div className="inline-block bg-teal-900/20 rounded-full px-3 py-1 text-sm font-medium text-teal-400 mb-3">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-white">Store Data Sets</h3>
                                <div className="w-32 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-md relative mx-auto md:ml-auto md:mr-0">
                                    <div className="absolute top-0 left-0 right-0 h-8 bg-teal-400 rounded-t-md"></div>
                                    <div className="absolute top-4 left-4 right-4 h-2 bg-teal-200/30"></div>
                                    <div className="absolute top-8 left-4 right-4 h-2 bg-teal-200/30"></div>
                                    <div className="absolute top-12 left-4 right-4 h-2 bg-teal-200/30"></div>
                                </div>
                            </div>

                            {/* Connecting arrows */}
                            <div className="absolute top-1/2 left-1/4 right-1/4 hidden md:block">
                                <div className="border-t-2 border-dashed border-teal-500/30 relative">
                                    <div className="absolute -top-2 left-1/4 w-4 h-4 border-t-2 border-r-2 border-dashed border-teal-500/30 transform rotate-45"></div>
                                    <div className="absolute -top-2 right-1/4 w-4 h-4 border-t-2 border-r-2 border-dashed border-teal-500/30 transform rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description text */}
                    <div className="text-gray-300 text-center mb-8 max-w-3xl lg:max-w-6xl mx-auto">
                        <p>
                            MView archives all the accessible data necessary to your leases and interests. The data involve well
                            reports, presentation reports, production reports and many more. Additionally you can download each
                            obtainable government document associated with your whole mineral requirements and interests. You can
                            download all this data in customizable as well as standard format.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Button className="bg-gradient-to-r cursor-pointer from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border border-teal-500/50 shadow-md px-8 py-6 text-lg">
                            Click Here To Download Data Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

