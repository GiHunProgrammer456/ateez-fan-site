function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-content">
          <h2 className="section-title">About ATEEZ</h2>
          <p>
            ATEEZ (Korean: \uC5D0\uC774\uD2F0\uC988) is a South Korean boy group formed by KQ Entertainment in 2018.
            The name stands for "A TEEnager Z" — meaning teenagers from A to Z who embrace everything.
          </p>
          <p>
            Known for their powerful performances, captivating storylines, and incredible stage presence,
            ATEEZ has risen to become one of the biggest 4th generation K-pop groups, selling millions
            of albums and performing in arenas worldwide.
          </p>
          <p>
            Their fandom is called ATINY (ATEEZ + Destiny), representing the destined bond
            between the group and their fans.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Members</span>
            </div>
            <div className="stat">
              <span className="stat-number">2018</span>
              <span className="stat-label">Debut Year</span>
            </div>
            <div className="stat">
              <span className="stat-number">10M+</span>
              <span className="stat-label">Albums Sold</span>
            </div>
            <div className="stat">
              <span className="stat-number">ATINY</span>
              <span className="stat-label">Fandom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
