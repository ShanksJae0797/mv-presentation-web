import { Button } from "@/components/ui/button"

export const GlossarySection = () => {
    return (
        <div className="mb-12 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Glossary</h2>
            <p className="text-gray-300 mb-4">
                Understanding industry-specific terms is crucial for anyone involved in oil and gas. Our comprehensive
                Glossary provides clear definitions of key terms used across the sector.
            </p>
            <p className="text-gray-300 mb-6">
                Whether you're reviewing contracts, analyzing royalty statements, or simply expanding your knowledge, this
                section helps simplify complex terminology in an easy-to-understand way.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-700 text-white border-none">View Glossary</Button>
        </div>
    )
}

export const PodcastSection = () => {
    return (
        <div className="mb-12 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Podcasts</h2>
            <p className="text-gray-300 mb-4">
                Prefer to listen? Our Podcasts feature interviews with industry experts, discussions on best practices, and
                real-life stories from mineral owners. Topics include:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-gray-300 mb-6">
                <li>How to Negotiate Better Lease Terms</li>
                <li>Understanding Oil & Gas Market Trends</li>
                <li>The Role of Technology in Mineral Management</li>
            </ul>
            <Button className="bg-amber-800 hover:bg-amber-700 text-white border-none">Listen Podcasts</Button>
        </div>
    )
}