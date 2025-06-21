import '../styles/FeaturesSection.css'

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <h3>🏛️ Temple History</h3>
            <p>Explore the ancient history and architectural marvels of this 12th-century temple</p>
          </div>
          <div className="feature-card">
            <h3>🎭 Rath Yatra</h3>
            <p>Experience the grand chariot festival that attracts millions of devotees worldwide</p>
          </div>
          <div className="feature-card">
            <h3>🙏 Spiritual Journey</h3>
            <p>Plan your pilgrimage with our comprehensive guide to rituals and customs</p>
          </div>
          <div className="feature-card">
            <h3>📍 Visit Puri</h3>
            <p>Discover the best places to stay, eat, and explore in the holy city of Puri</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 