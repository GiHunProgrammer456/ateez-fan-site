const features = [
  {
    icon: '\u26A1',
    title: 'Lightning Fast',
    description: 'Optimized performance that delivers instant results. No more waiting around.',
  },
  {
    icon: '\uD83D\uDD12',
    title: 'Secure by Default',
    description: 'Enterprise-grade security built in from day one. Your data stays protected.',
  },
  {
    icon: '\uD83C\uDF10',
    title: 'Global Scale',
    description: 'Deploy worldwide with a single click. Reach your users wherever they are.',
  },
  {
    icon: '\uD83D\uDEE0\uFE0F',
    title: 'Easy Integration',
    description: 'Connect with your favorite tools in minutes. Simple APIs and clear documentation.',
  },
  {
    icon: '\uD83D\uDCCA',
    title: 'Analytics',
    description: 'Real-time insights and dashboards to track your growth and make smart decisions.',
  },
  {
    icon: '\uD83E\uDD1D',
    title: '24/7 Support',
    description: 'Our team is here to help you succeed at every step of your journey.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Everything you need to build and scale your next big idea.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
