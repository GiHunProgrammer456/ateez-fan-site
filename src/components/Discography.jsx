import { useState } from 'react'
import { createPortal } from 'react-dom'

const albums = [
  {
    title: 'TREASURE EP.1: All to Zero',
    year: '2018',
    type: 'Mini Album',
    cover: '/images/albums/treasure-ep1.jpg',
    titleTrack: 'Pirate King',
    tracks: [
      'Intro: Long Journey',
      'Pirate King',
      'Treasure',
      'Twilight',
      'Stay',
      'My Way',
    ],
  },
  {
    title: 'TREASURE EP.2: Zero to One',
    year: '2019',
    type: 'Mini Album',
    cover: '/images/albums/treasure-ep2.jpeg',
    titleTrack: 'Say My Name',
    tracks: [
      'HALA HALA (Hearts Awakened, Live Alive)',
      'Say My Name',
      'Desire',
      'Light',
      'Promise',
      'From',
    ],
  },
  {
    title: 'TREASURE EP.3: One to All',
    year: '2019',
    type: 'Mini Album',
    cover: '/images/albums/treasure-ep3.jpg',
    titleTrack: 'WAVE',
    tracks: [
      'UTOPIA',
      'ILLUSION',
      'Crescent',
      'WAVE',
      'AURORA',
      'Dancing Like Butterfly Wings',
    ],
  },
  {
    title: 'TREASURE EP.FIN: All to Action',
    year: '2019',
    type: 'Full Album',
    cover: '/images/albums/treasure-epfin.jpg',
    titleTrack: 'Wonderland',
    tracks: [
      'End of the Beginning',
      'Wonderland',
      'Dazzling Light',
      'Mist',
      'Precious (Overture)',
      'Win',
      'If Without You',
      'Thank U',
      'Sunrise',
      'With U',
      'Beginning of the End',
    ],
  },
  {
    title: 'TREASURE EPILOGUE: Action to Answer',
    year: '2020',
    type: 'Mini Album',
    cover: '/images/albums/treasure-epilogue.png',
    titleTrack: 'Answer',
    tracks: [
      'Answer',
      'Horizon',
      'Star 1117',
      'Precious',
      'Outro: Long Journey',
    ],
  },
  {
    title: 'ZERO: FEVER Part.1',
    year: '2020',
    type: 'Mini Album',
    cover: '/images/albums/fever-pt1.jpg',
    titleTrack: 'Inception',
    tracks: [
      'Dear Diary: 2016.07.29',
      'FEVER',
      'THANXX',
      'TO THE BEAT',
      'INCEPTION',
      'Good Lil Boy',
      'One Day At A Time',
    ],
  },
  {
    title: 'ZERO: FEVER Part.2',
    year: '2021',
    type: 'Mini Album',
    cover: '/images/albums/fever-pt2.jpeg',
    titleTrack: 'Fireworks (I\'m The One)',
    tracks: [
      'Fireworks (I\'m The One)',
      'The Leaders',
      'Time Of Love',
      'Take Me Home',
      'Celebrate',
    ],
  },
  {
    title: 'ZERO: FEVER Part.3',
    year: '2021',
    type: 'Mini Album',
    cover: '/images/albums/fever-pt3.jpg',
    titleTrack: 'Deja Vu',
    tracks: [
      'Eternal Sunshine',
      'Feeling Like I Do',
      'Deja Vu',
      'Rocky',
      'All About You',
      'Not Too Late',
    ],
  },
  {
    title: 'Dreamers',
    year: '2021',
    type: 'Japanese Single',
    cover: '/images/albums/dreamers.jpg',
    titleTrack: 'Dreamers',
    tracks: [
      'Dreamers',
      'Blue Summer',
      'Dreamers (Instrumental)',
    ],
  },
  {
    title: 'The Real (멋)',
    year: '2021',
    type: 'Single',
    cover: '/images/albums/the-real.jpg',
    titleTrack: 'The Real (멋)',
    tracks: [
      'The Real (멋)',
    ],
  },
  {
    title: 'ZERO: FEVER EPILOGUE',
    year: '2021',
    type: 'Repackage',
    cover: '/images/albums/fever-epilogue.jpeg',
    titleTrack: 'Turbulence',
    tracks: [
      'Turbulence',
      'Be With You',
      'The Letter',
      'Still Here (Korean Ver.)',
      'Better (Korean Ver.)',
      'The Real (Heung Ver.)',
      'WAVE (Overture)',
      'WONDERLAND (Symphony No.9)',
      'Answer (Ode to Joy)',
      'Outro: Over the Horizon',
    ],
  },
  {
    title: 'THE WORLD EP.1: MOVEMENT',
    year: '2022',
    type: 'Mini Album',
    cover: '/images/albums/the-world-ep1.jpg',
    titleTrack: 'Guerrilla',
    tracks: [
      'PROPAGANDA',
      'Sector 1',
      'Cyberpunk',
      'Guerrilla',
      'The Ring',
      'WDIG (Where Do I Go)',
      'New World',
    ],
  },
  {
    title: 'Spin Off: From The Witness',
    year: '2022',
    type: 'Single Album',
    cover: '/images/albums/halazia.jpg',
    titleTrack: 'HALAZIA',
    tracks: [
      'HALAZIA',
      'WIN (June One of Glen Check Remix)',
      'Take Me Home (IDIOTAPE Remix)',
      'I\'m The One (Eden-ary Remix)',
      'Outro: Blue Bird',
    ],
  },
  {
    title: 'THE WORLD EP.2: OUTLAW',
    year: '2023',
    type: 'Mini Album',
    cover: '/images/albums/the-world-ep2.jpg',
    titleTrack: 'BOUNCY (K-HOT CHILLI PEPPERS)',
    tracks: [
      'This World',
      'Dune',
      'BOUNCY (K-HOT CHILLI PEPPERS)',
      'DJANGO',
      'Wake Up',
      'Outlaw',
    ],
  },
  {
    title: 'Limitless',
    year: '2023',
    type: 'Japanese Single',
    cover: '/images/albums/limitless.jpg',
    titleTrack: 'Limitless',
    tracks: [
      'Limitless',
      'Limitless (Japanese Ver.)',
    ],
  },
  {
    title: 'THE WORLD EP.FIN: WILL',
    year: '2023',
    type: 'Full Album',
    cover: '/images/albums/the-world-epfin.jpg',
    titleTrack: 'Crazy Form',
    tracks: [
      'WE KNOW',
      'Emergency',
      'Crazy Form',
      'ARRIBA',
      'Silver Light',
      'Crescent Pt. 2',
      'Dreamy Day',
      'MATZ',
      'IT\'s You',
      'Youth',
      'Everything',
      'FIN: WILL',
    ],
  },
  {
    title: 'NOT OKAY',
    year: '2024',
    type: 'Japanese Single',
    cover: '/images/albums/not-okay.jpg',
    titleTrack: 'NOT OKAY',
    tracks: [
      'NOT OKAY',
      'NOT OKAY (Japanese Ver.)',
      'Limitless (Japanese Ver.)',
    ],
  },
  {
    title: 'GOLDEN HOUR: Part.1',
    year: '2024',
    type: 'Mini Album',
    cover: '/images/albums/golden-hour-pt1.jpg',
    titleTrack: 'WORK',
    tracks: [
      'Golden Hour',
      'Blind',
      'WORK',
      'Empty Box',
      'Shaboom',
      'Siren',
    ],
  },
  {
    title: 'GOLDEN HOUR: Part.2',
    year: '2024',
    type: 'Mini Album',
    cover: '/images/albums/golden-hour-pt2.jpg',
    titleTrack: 'Ice On My Teeth',
    tracks: [
      'Deep Dive',
      'Scene 1: Value',
      'Ice On My Teeth',
      'Man On Fire',
      'Selfish Waltz',
      'Enough',
    ],
  },
  {
    title: 'Birthday',
    year: '2024',
    type: 'Japanese Single',
    cover: '/images/albums/birthday.jpg',
    titleTrack: 'Birthday',
    tracks: [
      'Birthday',
      'Birthday (Japanese Ver.)',
    ],
  },
  {
    title: 'GOLDEN HOUR: Part.3',
    year: '2025',
    type: 'Mini Album',
    cover: '/images/albums/golden-hour-pt3.jpg',
    titleTrack: 'Lemon Drop',
    tracks: [
      'Lemon Drop',
      'Masterpiece',
      'Now This House Ain\'t a Home',
      'Castle',
      'Bridge: The Edge of Reality',
    ],
  },
  {
    title: 'GOLDEN HOUR: Part.3 In Your Fantasy Edition',
    year: '2025',
    type: 'Repackage',
    cover: '/images/albums/golden-hour-pt3-fantasy.jpg',
    titleTrack: 'In Your Fantasy',
    tracks: [
      'Lemon Drop',
      'Masterpiece',
      'Now This House Ain\'t a Home',
      'Castle',
      'Bridge: The Edge of Reality',
      'In Your Fantasy',
      'NO1 (Hongjoong Solo)',
      'Skin (Seonghwa Solo)',
      'Slide to Me (Yunho Solo)',
      'Legacy (Yeosang Solo)',
      'Creep (San Solo)',
      'ROAR (Mingi Solo)',
      'Sagittarius (Wooyoung Solo)',
      'To Be Your Light (Jongho Solo)',
      'In Your Fantasy (Korean Ver.)',
    ],
  },
  {
    title: 'GOLDEN HOUR: Part.4',
    year: '2026',
    type: 'Mini Album',
    cover: '/images/albums/golden-hour-pt4.jpeg',
    titleTrack: 'Adrenaline',
    tracks: [
      'Ghost',
      'Adrenaline',
      'NASA',
      'On The Road',
      'Choose',
    ],
  },
]

function getYouTubeSearchUrl(trackName) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent('ATEEZ ' + trackName + ' official')}`
}

function AlbumModal({ album, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="album-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="album-modal-header">
          <div className="album-modal-cover-wrap">
            <img src={album.cover} alt={album.title} className="album-modal-cover" />
          </div>
          <div className="album-modal-info">
            <span className="album-modal-year">{album.year}</span>
            <h2 className="album-modal-title">{album.title}</h2>
            <span className="album-modal-type">{album.type}</span>
            <p className="album-modal-track-count">{album.tracks.length} tracks</p>
          </div>
        </div>

        <div className="album-modal-tracklist">
          <h3>Tracklist</h3>
          <ol className="tracklist">
            {album.tracks.map((track, i) => {
              const isTitle = track === album.titleTrack ||
                track.includes(album.titleTrack) ||
                album.titleTrack.includes(track)
              return (
                <li key={i} className={`track-item ${isTitle ? 'title-track' : ''}`}>
                  <span className="track-number">{String(i + 1).padStart(2, '0')}</span>
                  <div className="track-info">
                    <a
                      href={getYouTubeSearchUrl(track)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="track-link"
                    >
                      <span className="track-name">
                        {track}
                        {isTitle && <span className="title-badge">TITLE</span>}
                      </span>
                      <svg className="yt-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}

function Discography() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  return (
    <section className="discography" id="discography">
      <div className="container">
        <h2 className="section-title">Discography</h2>
        <p className="section-subtitle">
          A journey through ATEEZ's musical evolution — from TREASURE to GOLDEN HOUR. Click any album for the full tracklist.
        </p>
        <div className="albums-grid">
          {albums.map((album, index) => (
            <div
              className="album-card"
              key={index}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="album-cover-wrap">
                <img src={album.cover} alt={album.title} className="album-cover" loading="lazy" />
                <div className="album-cover-overlay">
                  <span className="album-view-btn">View Tracklist</span>
                </div>
              </div>
              <div className="album-info">
                <div className="album-year">{album.year}</div>
                <h3 className="album-title">{album.title}</h3>
                <span className="album-type">{album.type}</span>
                <p className="album-title-track">
                  Title: {album.titleTrack}
                </p>
                <p className="album-track-count">{album.tracks.length} tracks</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAlbum && createPortal(
        <AlbumModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />,
        document.body
      )}
    </section>
  )
}

export default Discography
