function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <h2 className="section-title">Ready to Get Started?</h2>
        <p className="section-subtitle">
          Join thousands of users who are already building amazing things.
        </p>
        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="cta-input"
            required
          />
          <button type="submit" className="btn btn-primary">
            Sign Up Free
          </button>
        </form>
        <p className="cta-note">No credit card required. Start building today.</p>
      </div>
    </section>
  )
}

export default CTA
