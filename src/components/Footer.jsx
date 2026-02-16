function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">ATEEZ</a>
          <p>8 Makes 1 Team</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#members">Members</a>
            <a href="#discography">Discography</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-col">
            <h4>Official</h4>
            <a href="https://www.youtube.com/@ATEEZofficial" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://x.com/ATEEZofficial" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.instagram.com/ateez_official_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <a href="https://open.spotify.com/artist/68KmkJeZGfwe1OUaivBa2L" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href="https://www.tiktok.com/@ateez_official_" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.vlive.tv/channel/C2D78B" target="_blank" rel="noopener noreferrer">V LIVE</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Fan site. Not affiliated with KQ Entertainment or ATEEZ.</p>
      </div>
    </footer>
  )
}

export default Footer
