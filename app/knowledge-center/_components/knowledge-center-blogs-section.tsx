import { BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";

export const MineralOwnersSection = () => {
    return (
        <div className="bg-gradient-to-br from-red-500/10 to-red-400/5 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Mineral Owners</h3>
            <p className="text-gray-300 mb-4">
                This section is dedicated to mineral owners, helping them understand their mineral rights, know their
                mineral royalty earnings, and stay informed about industry changes. Topics include:
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Understanding Mineral Interests.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> How to know Your Royalty Statements.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Receiving More Details on Royalty Payments.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Oil Investment and more.
                </li>
            </ul>
            <div className="mt-4">
                <Link
                    href="/knowledge-center/mineral-owners"
                    className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium"
                >
                    View all articles
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
    )
}
export const OperatorSection = () => {
    return (
        <div className="bg-gradient-to-br from-amber-500/10 to-amber-400/5 rounded-xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Operator</h3>
            <p className="text-gray-300 mb-4">
                For oil and gas operators, this section provides insights on well management, production optimization,
                and regulatory compliance. Topics include:
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> The Role of Operators in Oil and Gas Extraction.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Advancements in Oil and Gas industry that are to be
                    Understood by Operators.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Detailed Information on Drilling and More.
                </li>
            </ul>
            <div className="mt-4">
                <Link
                    href="/knowledge-center/operator"
                    className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium"
                >
                    View all articles
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
    )
}
export const PlayTypeSection = () => {
    return (
        <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Play Type</h3>
            <p className="text-gray-300 mb-4">
                This section explores different geological formations and their impact on drilling and production.
                Learn about:
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> High Potential Shale Plays in US
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Shale, Tight Oil Fields, and Other Play Types
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> How Play Types are Crucial in Mineral Industry Growth
                </li>
            </ul>
            <div className="mt-4">
                <Link
                    href="/knowledge-center/play-type"
                    className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium"
                >
                    View all articles
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
    )
}
export const FieldSection = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3">Field</h3>
            <p className="text-gray-300 mb-4">
                Dive into discussions about oil and gas fields, their development, and production trends. Topics
                include:
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Major Oil and Gas Fields in the US
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Technological Advances in Field Development and more
                </li>
            </ul>
            <div className="mt-4">
                <Link
                    href="/knowledge-center/field"
                    className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium"
                >
                    View all articles
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
    )
}
export const OtherSection = () => {
    return (
        <div className="bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-colors max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Other</h3>
            <p className="text-gray-300 mb-4">
                A general category covering additional industry insights, news, and emerging trends. Some topics
                include:
            </p>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> What is Midstream & Downstream Oil and Gas?
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> The Future of Renewable Energy in Oil & Gas.
                </li>
                <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span> Environmental Considerations in Oil & Gas Operations and
                    more.
                </li>
            </ul>
            <div className="mt-4">
                <Link
                    href="/knowledge-center/other"
                    className="text-teal-400 hover:text-teal-300 flex items-center text-sm font-medium"
                >
                    View all articles
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </div>
    )
}
export default function KnowledgeCenterBlogsSection() {
    return (
        <div className="mb-16">
            <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-teal-500 mr-3" />
                <h2 className="text-3xl font-bold text-white">Blogs</h2>
            </div>
            <p className="text-gray-300 mb-8">
                Our blog section is divided into five categories to ensure you find relevant content:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Mineral Owners Section */}
                <MineralOwnersSection />
                {/* Operator Section */}
                <OperatorSection />
                {/* Play Type Section */}
                <PlayTypeSection />
                {/* Field Section */}
                <FieldSection />
            </div>
            {/* Other Section */}
            <OtherSection />
        </div>
    )
}