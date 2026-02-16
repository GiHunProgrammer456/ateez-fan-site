function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <img src="/images/logo.png" alt="ATEEZ" className="hero-logo-img" />
        <p className="hero-tag">A TEEnager Z</p>
        <p className="hero-subtitle">
          8 Makes 1 Team. From KQ Entertainment, conquering the world stage since October 24, 2018.
          Known for their explosive performances and the TREASURE / FEVER / THE WORLD storyline series.
        </p>
        <div className="hero-buttons">
          <a href="#members" className="btn btn-primary">Meet the Members</a>
          <a href="#discography" className="btn btn-secondary">Discography</a>
        </div>
        <img src="/images/group.jpeg" alt="ATEEZ Group" className="hero-group-photo" />
      </div>
    </section>
  )
}

export default Hero
