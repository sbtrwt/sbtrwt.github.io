import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import site from './data/site'
import contact from './data/contact'

function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div>{site.footer}</div>
        <div style={{marginTop:8}}>
          <a href={contact.github} target="_blank" rel="noreferrer" style={{marginRight:12}}>GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" style={{marginRight:12}}>LinkedIn</a>
          <a href={contact.email}>Email</a>
        </div>
      </footer>
    </div>
  )
}

export default App
