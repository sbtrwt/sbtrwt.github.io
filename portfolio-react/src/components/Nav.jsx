import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './nav.css'
import site from '../data/site'
import contact from '../data/contact'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const onClickLink = () => setOpen(false)

  return (
    <header className="nav-header">
      <div className="container nav-container">
        <div>
          <div className="brand">{site.brand}</div>
          <div className="brand-sub">
            <a href={contact.github} target="_blank" rel="noreferrer" className="brand-link">GitHub</a>
            <span className="brand-sep">•</span>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="brand-link">LinkedIn</a>
          </div>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(o => !o)}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={onClickLink}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/work" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Work</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}
