export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.img} alt={project.title} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.github && (<a href={project.github} target="_blank" rel="noreferrer">Code</a>)}
          {project.play && (<a href={project.play} target="_blank" rel="noreferrer">Play</a>)}
        </div>
      </div>
    </article>
  )
}
