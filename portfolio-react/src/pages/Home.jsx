import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  return (
    <section className="home-page container">
      <header className="hero">
        <h1>Hi, I'm Shobhit Rawat</h1>
        <p className="subtitle">Game Developer • Web Developer • Software Engineer</p>
        <p className="lead">I build engaging games and scalable applications using clean architecture and best practices.</p>
      </header>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </section>
  )
}
