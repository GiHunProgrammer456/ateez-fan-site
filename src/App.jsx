import Header from './components/Header'
import Hero from './components/Hero'
import Members from './components/Members'
import Discography from './components/Discography'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

const leftCharacters = [
  { name: 'JJOONGrami', src: '/images/aniteez/jjoongrami.jpg' },
  { name: 'DDEONGbyeoli', src: '/images/aniteez/ddeongbyeoli.jpg' },
  { name: 'TYUdeongi', src: '/images/aniteez/tyudeongi.jpg' },
  { name: 'HETmongi', src: '/images/aniteez/hetmongi.jpg' },
]

const rightCharacters = [
  { name: 'SANdeoki', src: '/images/aniteez/sandeoki.jpg' },
  { name: 'bbyongMING', src: '/images/aniteez/bbyongming.jpg' },
  { name: 'WOOYOnyang', src: '/images/aniteez/wooyonyang.jpg' },
  { name: 'JJONGbear', src: '/images/aniteez/jjongbear.jpg' },
]

function App() {
  return (
    <>
      <div className="side-characters side-left">
        {leftCharacters.map((c) => (
          <div className="side-char" key={c.name}>
            <img src={c.src} alt={c.name} />
            <span className="side-char-name">{c.name}</span>
          </div>
        ))}
      </div>
      <div className="side-characters side-right">
        {rightCharacters.map((c) => (
          <div className="side-char" key={c.name}>
            <img src={c.src} alt={c.name} />
            <span className="side-char-name">{c.name}</span>
          </div>
        ))}
      </div>

      <Header />
      <main>
        <Hero />
        <Members />
        <Discography />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
