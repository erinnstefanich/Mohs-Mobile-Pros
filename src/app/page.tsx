import HeroSection from '../components/home/HeroSection'
import ServicesOverview from '../components/home/ServicesOverview'

// FINAL APPROVED HOMEPAGE — DO NOT MODIFY WITHOUT EXPLICIT USER APPROVAL
export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <HeroSection />
      <ServicesOverview />
    </div>
  )
}
