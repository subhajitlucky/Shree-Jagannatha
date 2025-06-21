import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default HomePage 