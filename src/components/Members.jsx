import { useState } from 'react'
import { createPortal } from 'react-dom'

const members = [
  {
    name: 'Hongjoong',
    hangul: '\uD64D\uC911',
    fullName: 'Kim Hongjoong (\uAE40\uD64D\uC911)',
    role: 'Leader, Rapper, Producer, Songwriter',
    birthday: 'November 7, 1998',
    color: '#e11d48',
    photo: '/images/members/hongjoong.jpeg',
    height: '172 cm',
    mbti: 'INFP',
    instagram: '@no1likeme8_8',
    facts: 'Known for his creative vision and unique fashion style. Produces and writes many ATEEZ songs.',
    bio: 'Kim Hongjoong is the captain and main rapper of ATEEZ. He is heavily involved in songwriting and production, having co-written the majority of ATEEZ\'s discography. Known for his bold fashion choices and creative leadership, he guides the group\'s artistic direction. Before debut, he was part of the pre-debut group KQ Fellaz.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'Debut era with powerful pirate concept. "Pirate King" and "Say My Name" showcased his fierce rap style.' },
      { name: 'Fever Era', year: '2020-2022', desc: 'Evolved into more experimental sounds. Known for his iconic "Thanxx" and "Fireworks" performances.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Dark, intense concept. "Guerrilla" showed his growth as a performer and leader.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Mature, refined artistry. "Work" and "Lemon Drop" highlighted his versatility as an artist.' },
    ],
  },
  {
    name: 'Seonghwa',
    hangul: '\uC131\uD654',
    fullName: 'Park Seonghwa (\uBC15\uC131\uD654)',
    role: 'Vocalist, Visual',
    birthday: 'April 3, 1998',
    color: '#8b5cf6',
    photo: '/images/members/seonghwa.jpeg',
    height: '178 cm',
    mbti: 'ISFP',
    instagram: '@_starhwa_',
    facts: 'The eldest member, known for his stunning visuals and powerful emotional performances on stage.',
    bio: 'Park Seonghwa is the eldest member and visual of ATEEZ. He is known for his dual charm — gentle and caring off-stage, but powerful and charismatic on stage. His emotional vocal delivery and stunning visuals have earned him a massive fanbase. He is also known for being the "mom" of the group, taking care of other members.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'Debuted with elegant, princely visuals. His performance in "Hala Hala" became legendary.' },
      { name: 'Fever Era', year: '2020-2022', desc: 'Showcased incredible duality with dark concepts. "Inception" era Seonghwa was iconic.' },
      { name: 'The World Era', year: '2022-2023', desc: 'His "Guerrilla" and "Halazia" looks went viral. Peak visual era.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Warm, golden aesthetics. His vocals in "Empty Box" touched fans deeply.' },
    ],
  },
  {
    name: 'Yunho',
    hangul: '\uC724\uD638',
    fullName: 'Jeong Yunho (\uC815\uC724\uD638)',
    role: 'Main Dancer, Vocalist',
    birthday: 'March 23, 1999',
    color: '#3b82f6',
    photo: '/images/members/yunho.jpeg',
    height: '184 cm',
    mbti: 'ENFP',
    instagram: '@yunou._.u',
    facts: 'The tallest member (184cm). An incredible dancer with a warm personality loved by all fans.',
    bio: 'Jeong Yunho is the main dancer and one of the tallest members of ATEEZ. Known for his powerful yet graceful dance style and warm, positive personality. He is often called a "golden retriever" by fans due to his bright and energetic demeanor. His long limbs and sharp movements make him stand out in choreography.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'His tall frame and powerful dance style were immediately noticeable. "Wave" era showed his bright side.' },
      { name: 'Fever Era', year: '2020-2022', desc: 'Became known for his versatile dance skills. "Deja Vu" choreography was a standout.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Sharp, intense performances. His dancing in "Bouncy" was incredibly powerful.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Continued to impress with mature choreography and improved vocals.' },
    ],
  },
  {
    name: 'Yeosang',
    hangul: '\uC5EC\uC0C1',
    fullName: 'Kang Yeosang (\uAC15\uC5EC\uC0C1)',
    role: 'Vocalist, Dancer',
    birthday: 'June 15, 1999',
    color: '#06b6d4',
    photo: '/images/members/yeosang.jpeg',
    height: '173 cm',
    mbti: 'ISTJ',
    instagram: '@im_ovation',
    facts: 'Known for his striking visuals and calm demeanor. Former Big Hit trainee before joining KQ.',
    bio: 'Kang Yeosang was formerly a trainee at Big Hit Entertainment (now HYBE) before transferring to KQ Entertainment. Known for his ethereal, sculpture-like visuals and quiet personality, he contrasts his calm off-stage persona with powerful performances. He has shown tremendous growth as a performer over the years.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'Debuted with a mysterious aura. His visuals in "Pirate King" MV became a fan favorite moment.' },
      { name: 'Fever Era', year: '2020-2022', desc: 'Gained more lines and center moments. "Eternal Sunshine" era showed his bright charm.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Massive growth as a performer. His fierce looks in "Crazy Form" were viral.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Gained significant center time and vocal moments. Fan favorite era.' },
    ],
  },
  {
    name: 'San',
    hangul: '\uC0B0',
    fullName: 'Choi San (\uCD5C\uC0B0)',
    role: 'Vocalist, Main Dancer, Center',
    birthday: 'July 10, 1999',
    color: '#ef4444',
    photo: '/images/members/san.jpeg',
    height: '176 cm',
    mbti: 'INFP',
    instagram: '@choi3an',
    facts: 'Famous for his incredibly intense stage presence and duality between on and off stage.',
    bio: 'Choi San is known worldwide for his extraordinary stage presence and the extreme duality between his soft, cuddly off-stage personality and his fierce, intense on-stage persona. He is considered one of the best performers in 4th generation K-pop. His fancams regularly go viral with millions of views.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'His intense expressions in "Hala Hala" and "Wonderland" went viral, putting ATEEZ on the map.' },
      { name: 'Fever Era', year: '2020-2022', desc: '"Inception" San became legendary. His "Deja Vu" performance is considered one of the best K-pop fancams.' },
      { name: 'The World Era', year: '2022-2023', desc: '"Guerrilla" and "Bouncy" showcased peak San intensity. Main Dancer position made official in 2024.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Showed a more mature, controlled intensity. "Work" era San was mesmerizing.' },
    ],
  },
  {
    name: 'Mingi',
    hangul: '\uBBFC\uAE30',
    fullName: 'Song Mingi (\uC1A1\uBBFC\uAE30)',
    role: 'Rapper, Dancer',
    birthday: 'August 9, 1999',
    color: '#f59e0b',
    photo: '/images/members/mingi.jpeg',
    height: '183 cm',
    mbti: 'ENTP',
    instagram: '@fixon_n_on',
    facts: 'Known for his deep voice and charismatic rap style. One of the tallest members (183cm).',
    bio: 'Song Mingi is a rapper and dancer with one of the deepest, most recognizable voices in K-pop. His tall stature and powerful rap delivery make him an imposing presence on stage. He took a hiatus in 2021 for health reasons but returned stronger than ever, showing his dedication to ATEEZ and ATINY.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'His deep voice rap in "Pirate King" and "Wonderland" established his signature style.' },
      { name: 'Fever Era', year: '2020-2022', desc: 'Took a health hiatus and returned triumphantly. "Fireworks" era marked his powerful comeback.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Fully back and thriving. His rap in "Guerrilla" and "Bouncy" was fire.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Most confident era. His verses show incredible growth and versatility.' },
    ],
  },
  {
    name: 'Wooyoung',
    hangul: '\uC6B0\uC601',
    fullName: 'Jung Wooyoung (\uC815\uC6B0\uC601)',
    role: 'Main Dancer, Vocalist',
    birthday: 'November 26, 1999',
    color: '#ec4899',
    photo: '/images/members/wooyoung.jpeg',
    height: '173 cm',
    mbti: 'ESFJ',
    instagram: '@wooyounggg__',
    facts: 'An energetic performer and variety show natural. Known as the mood maker of ATEEZ.',
    bio: 'Jung Wooyoung is a main dancer and vocalist known for his incredible energy both on and off stage. He is often called the "mood maker" of the group due to his bright and playful personality. His freestyle dance skills and charismatic stage presence make him a standout performer.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'Showcased his natural charisma from debut. His energy in "Wave" was infectious.' },
      { name: 'Fever Era', year: '2020-2022', desc: '"Deja Vu" era Wooyoung was iconic. His dance covers went viral on social media.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Peak performance energy. "Crazy Form" center moments were unforgettable.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Continued to shine as a performer. His variety show appearances gained many new fans.' },
    ],
  },
  {
    name: 'Jongho',
    hangul: '\uC885\uD638',
    fullName: 'Choi Jongho (\uCD5C\uC885\uD638)',
    role: 'Main Vocalist, Maknae',
    birthday: 'October 12, 2000',
    color: '#10b981',
    photo: '/images/members/jongho.jpeg',
    height: '176 cm',
    mbti: 'ISFJ',
    instagram: '@imfinalho_',
    facts: 'The youngest member with an extraordinary vocal range. Famous for splitting apples with his bare hands.',
    bio: 'Choi Jongho is the youngest member (maknae) and main vocalist of ATEEZ. Despite being the youngest, he possesses one of the most powerful vocal ranges in K-pop. He is famous for his party trick of splitting apples with his bare hands, showcasing his incredible physical strength. His high notes in ATEEZ songs are legendary.',
    eras: [
      { name: 'Treasure Era', year: '2018-2019', desc: 'His powerful vocals in "Answer" blew everyone away. Established himself as a top vocalist from debut.' },
      { name: 'Fever Era', year: '2020-2022', desc: '"Inception" high notes became legendary. Apple-splitting videos went viral worldwide.' },
      { name: 'The World Era', year: '2022-2023', desc: 'Vocal powerhouse era. His live vocals at concerts amazed audiences globally.' },
      { name: 'Golden Hour Era', year: '2024-2025', desc: 'Showed emotional depth in ballads. "Empty Box" vocals were stunning.' },
    ],
  },
]

function MemberModal({ member, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <div className="modal-photo-wrap" style={{'--member-color': member.color}}>
            <img src={member.photo} alt={member.name} className="modal-photo" />
          </div>
          <div className="modal-header-info">
            <h2 className="modal-name">
              {member.name} <span className="modal-hangul">{member.hangul}</span>
            </h2>
            <p className="modal-fullname">{member.fullName}</p>
            <p className="modal-role" style={{color: member.color}}>{member.role}</p>
          </div>
        </div>

        <div className="modal-details">
          <div className="modal-detail-item">
            <span className="detail-label">Birthday</span>
            <span>{member.birthday}</span>
          </div>
          <div className="modal-detail-item">
            <span className="detail-label">Height</span>
            <span>{member.height}</span>
          </div>
          <div className="modal-detail-item">
            <span className="detail-label">MBTI</span>
            <span>{member.mbti}</span>
          </div>
          <div className="modal-detail-item">
            <span className="detail-label">Instagram</span>
            <span>{member.instagram}</span>
          </div>
        </div>

        <div className="modal-bio">
          <p>{member.bio}</p>
        </div>

        <h3 className="modal-section-title">Eras</h3>
        <div className="modal-eras">
          {member.eras.map((era, i) => (
            <div className="era-card" key={i} style={{'--member-color': member.color}}>
              <div className="era-header">
                <h4>{era.name}</h4>
                <span className="era-year">{era.year}</span>
              </div>
              <p>{era.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Members() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section className="members" id="members">
      <div className="container">
        <h2 className="section-title">The Members</h2>
        <p className="section-subtitle">
          Click on any member to see their full profile and era history.
        </p>
        <div className="members-grid">
          {members.map((member) => (
            <div
              className="member-card"
              key={member.name}
              style={{'--member-color': member.color}}
              onClick={() => setSelectedMember(member)}
            >
              <div className="member-photo-wrap">
                <img src={member.photo} alt={member.name} className="member-photo" loading="lazy" />
              </div>
              <div className="member-info">
                <h3 className="member-name">
                  {member.name} <span className="member-hangul">{member.hangul}</span>
                </h3>
                <p className="member-role">{member.role}</p>
                <p className="member-birthday">{member.birthday}</p>
                <p className="member-facts">{member.facts}</p>
                <span className="member-click-hint">Click for full profile</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && createPortal(
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />,
        document.body
      )}
    </section>
  )
}

export default Members
