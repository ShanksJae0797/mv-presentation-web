import {
    BarChart2,
    Map,
    Activity,
    Database,
    Users,
    BookOpen,
    DollarSign,
    TrendingUp,
} from "lucide-react"
import Link from "next/link"
import HeroSection from "../../containers/HeroSection"
import KnowTrueWorthSection from "./_components/KnowTrueWorthSection"
import UncoverMineralInterestSection from "./_components/UncoverMineralInterest"
import FollowYourWellsSection from "./_components/FollowYourWells"
import MonitorWellActivity from "./_components/MonitorWellActivity"
import MineralSolution from "./_components/MineralSolution"
import ForecastIncome from "./_components/UncoverMineralInterest"
import GrowthOpportunitiesSection from "./_components/GrowthOpportunities"
import HarnessKnowledgeSection from "./_components/HarnessKnowledge"

export default function ServicesPage() {
    // Service links for the highlighted UI section
    const serviceLinks = [
        { title: "Mineral Royalties", icon: <DollarSign className="h-5 w-5" />, href: "#mineral-royalties" },
        { title: "Lease Value Insights", icon: <BarChart2 className="h-5 w-5" />, href: "#lease-value-insights" },
        { title: "Mineral Potentials", icon: <TrendingUp className="h-5 w-5" />, href: "#mineral-potentials" },
        { title: "Mapping Your Minerals", icon: <Map className="h-5 w-5" />, href: "#mapping" },
        { title: "Monitor Well Activity", icon: <Activity className="h-5 w-5" />, href: "#well-activity" },
        { title: "Oil And Gas Data Hub", icon: <Database className="h-5 w-5" />, href: "#data-hub" },
        { title: "Build Social Network", icon: <Users className="h-5 w-5" />, href: "#social-network" },
        { title: "Knowledge Center", icon: <BookOpen className="h-5 w-5" />, href: "#knowledge-center" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
            {/* Hero Section with Breadcrumb */}
            <HeroSection title="Features" breadCrumb="Features" />
            {/* Highlighted UI Section with Teal-bordered Links */}
            <div className="py-12 mt-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Discover The Power Of Mview</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {serviceLinks.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="border border-teal-500 rounded-md p-4 text-center flex items-center justify-center h-16 transition-all duration-300 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(0,205,149,0.3)] group"
                            >
                                <span className="flex items-center">
                                    <span className="mr-2 text-teal-500 group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </span>
                                    <span className="group-hover:text-white transition-colors duration-300">{service.title}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <main className="py-8">
                <div className="container mx-auto px-4">
                    {/* Forecast Your Incomes Section */}
                    <div id="mineral-royalties">
                        <ForecastIncome />
                    </div>
                    {/* Know The True Worth Section */}
                    <div id="lease-value-insights">
                        <KnowTrueWorthSection />
                    </div>
                    {/* Uncover Your Mineral Interests Section */}
                    <div id="mineral-potentials">
                        <UncoverMineralInterestSection />
                    </div>
                    {/* FOLLOW YOUR WElLS SECTION */}
                    <div id="mapping">
                        <FollowYourWellsSection />
                    </div>
                    {/* Monitor Well Activity Section */}
                    <div id="well-activity">
                        <MonitorWellActivity />
                    </div>
                    {/* Mineral Solution Section */}
                    <div id="data-hub">
                        <MineralSolution />
                    </div>
                    {/* Growth Opportunities Section */}
                    <div id="social-network">
                        <GrowthOpportunitiesSection />
                    </div>
                    {/* Harness Knowledge Section */}
                    <div id="knowledge-center">
                        <HarnessKnowledgeSection />
                    </div>
                </div>
            </main>
        </div>
    )
}

