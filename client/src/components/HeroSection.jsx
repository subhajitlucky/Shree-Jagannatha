import { useState, useEffect } from 'react'
import '../styles/HeroSection.css'

function HeroSection() {
  const [showNewImage, setShowNewImage] = useState(false)

  useEffect(() => {
    // Start the transition animation after component mounts
    const timer = setTimeout(() => {
      setShowNewImage(true)
    }, 2000) // Wait 2 seconds before starting transition

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-section">
      <div className="image-container">
        <img 
          src="/temple-old.jpg" 
          alt="Shree Jagannatha Temple - Historical View" 
          className="temple-image old-temple"
        />
        <img 
          src="/temple-new.jpg" 
          alt="Shree Jagannatha Temple - Modern View" 
          className={`temple-image new-temple ${showNewImage ? 'slide-in' : ''}`}
        />
      </div>
     
    </section>
  )
}

export default HeroSection 