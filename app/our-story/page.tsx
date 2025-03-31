import HeroSection from "./_components/HeroSection"
import IntroductionSection from "./_components/IntroductionSection"
import Timeline from "./_components/Timeline"
import NewChapterSection from "./_components/NewChapterSection"
import BoldSection from "./_components/BoldSection"

export default function AboutPage() {
    return (
        <div>
            {/* Hero Section with Breadcrumb */}
            <HeroSection />
            {/* Main Content */}
            <main className="py-12">
                <div className="container mx-auto px-4">
                    {/* Introduction Section */}
                    <IntroductionSection />
                    {/* History Section */}
                    <Timeline />
                    {/* NEW CHAPTER SECTION CONTAINER */}
                    <NewChapterSection />
                    {/* BOLD Precious Metals Section */}
                    <BoldSection />
                </div>
            </main>
        </div>
    )
}

