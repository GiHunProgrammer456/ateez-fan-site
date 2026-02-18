document.addEventListener('DOMContentLoaded', () => {
  const members = JSON.parse(document.getElementById('members-data').textContent)
  const albums = JSON.parse(document.getElementById('albums-data').textContent)

  // Hamburger menu
  const menuBtn = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.nav')
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    nav.classList.toggle('open')
  })
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      nav.classList.remove('open')
    })
  })

  // Modal helpers
  function openModal(html) {
    const div = document.createElement('div')
    div.id = 'active-modal'
    div.innerHTML = html
    document.body.appendChild(div)
    div.querySelector('.modal-overlay').addEventListener('click', closeModal)
    div.querySelector('.modal-content, .album-modal-content')
      .addEventListener('click', e => e.stopPropagation())
    div.querySelector('.modal-close').addEventListener('click', closeModal)
  }

  function closeModal() {
    const m = document.getElementById('active-modal')
    if (m) m.remove()
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal()
  })

  // Member modals
  document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index)
      const m = members[idx]
      const erasHtml = m.eras.map(era => `
        <div class="era-card" style="--member-color: ${m.color}">
          <div class="era-header">
            <h4>${era.name}</h4>
            <span class="era-year">${era.year}</span>
          </div>
          <p>${era.desc}</p>
        </div>
      `).join('')

      openModal(`
        <div class="modal-overlay">
          <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
              <div class="modal-photo-wrap" style="--member-color: ${m.color}">
                <img src="${m.photo}" alt="${m.name}" class="modal-photo">
              </div>
              <div class="modal-header-info">
                <h2 class="modal-name">${m.name} <span class="modal-hangul">${m.hangul}</span></h2>
                <p class="modal-fullname">${m.fullName}</p>
                <p class="modal-role" style="color: ${m.color}">${m.role}</p>
              </div>
            </div>
            <div class="modal-details">
              <div class="modal-detail-item"><span class="detail-label">Birthday</span><span>${m.birthday}</span></div>
              <div class="modal-detail-item"><span class="detail-label">Height</span><span>${m.height}</span></div>
              <div class="modal-detail-item"><span class="detail-label">MBTI</span><span>${m.mbti}</span></div>
              <div class="modal-detail-item"><span class="detail-label">Instagram</span><span>${m.instagram}</span></div>
            </div>
            <div class="modal-bio"><p>${m.bio}</p></div>
            <h3 class="modal-section-title">Eras</h3>
            <div class="modal-eras">${erasHtml}</div>
          </div>
        </div>
      `)
    })
  })

  // Album modals
  document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index)
      const a = albums[idx]
      const ytIcon = '<svg class="yt-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'

      const tracksHtml = a.tracks.map((track, i) => {
        const isTitle = track === a.titleTrack || track.includes(a.titleTrack) || a.titleTrack.includes(track)
        const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent('ATEEZ ' + track + ' official')
        const badge = isTitle ? '<span class="title-badge">TITLE</span>' : ''
        return `
          <li class="track-item ${isTitle ? 'title-track' : ''}">
            <span class="track-number">${String(i + 1).padStart(2, '0')}</span>
            <div class="track-info">
              <a href="${ytUrl}" target="_blank" rel="noopener noreferrer" class="track-link">
                <span class="track-name">${track}${badge}</span>
                ${ytIcon}
              </a>
            </div>
          </li>
        `
      }).join('')

      openModal(`
        <div class="modal-overlay">
          <div class="album-modal-content">
            <button class="modal-close">&times;</button>
            <div class="album-modal-header">
              <div class="album-modal-cover-wrap">
                <img src="${a.cover}" alt="${a.title}" class="album-modal-cover">
              </div>
              <div class="album-modal-info">
                <span class="album-modal-year">${a.year}</span>
                <h2 class="album-modal-title">${a.title}</h2>
                <span class="album-modal-type">${a.type}</span>
                <p class="album-modal-track-count">${a.tracks.length} tracks</p>
              </div>
            </div>
            <div class="album-modal-tracklist">
              <h3>Tracklist</h3>
              <ol class="tracklist">${tracksHtml}</ol>
            </div>
          </div>
        </div>
      `)
    })
  })
})
