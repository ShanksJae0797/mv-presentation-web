import { DollarSign, Activity, BarChart2, TrendingUp, BookOpen, Map, Users, Database } from "lucide-react"
import Link from "next/link"

export default function MineralFeatures() {
    const features = [
        { icon: <DollarSign className="h-5 w-5" />, title: "Mineral Royalties" },
        { icon: <Activity className="h-5 w-5" />, title: "Monitor Well Activity" },
        { icon: <BarChart2 className="h-5 w-5" />, title: "Lease Value Insights" },
        { icon: <TrendingUp className="h-5 w-5" />, title: "Mineral Potential" },
        { icon: <BookOpen className="h-5 w-5" />, title: "Knowledge Center" },
        { icon: <Map className="h-5 w-5" />, title: "Mapping Your Minerals" },
        { icon: <Users className="h-5 w-5" />, title: "Build Social Network" },
        { icon: <Database className="h-5 w-5" />, title: "Oil and Gas Data Hub" },
    ]
    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 py-2 text-center bg-gradient-to-r from-teal-400 to-[#f8f4e3] bg-clip-text text-transparent">
                        We Are To Uncover The Potential Of Your Minerals And Augment Your Returns In Future.
                    </h2>
                    <p className="text-gray-300 text-lg mb-2 text-center">
                        MView embarks on industry standard approaches to help you make informed decisions associated with minerals.
                        To minimize your efforts and time, and escalate your mineral productivity, we have brought the following{" "}
                        <span className="bg-gradient-to-r from-teal-400 to-[#f8f4e3] bg-clip-text text-transparent font-semibold">
                            Features
                        </span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <Link
                            href="#"
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 hover:border-teal-500/50 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-300 group-hover:text-teal-400 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <span className="text-lg font-medium text-gray-200 group-hover:text-teal-50 transition-colors duration-300">
                                {feature.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

