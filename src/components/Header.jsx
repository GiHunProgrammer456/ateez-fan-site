import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">ATEEZ</a>
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#members" onClick={() => setMenuOpen(false)}>Members</a>
          <a href="#discography" onClick={() => setMenuOpen(false)}>Discography</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
