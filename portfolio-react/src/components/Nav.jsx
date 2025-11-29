import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const onClickLink = () => setOpen(false)

  return (
    <header className="nav-header">
      <div className="container nav-container">
        <div className="brand">SR</div>

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
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/work" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Work</NavLink>
        </nav>
      </div>
    </header>
  )
}
