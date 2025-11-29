import projects from '../data/projects'

export default function Work(){
  return (
    <section className="work-page container">
      <h1>Work & Trailers</h1>
      <p className="lead">Play trailers and see project details below.</p>

      <div className="videos-grid">
        {projects.map(p => (
          <div className="video-item" key={p.id}>
            <div className="video-wrapper">
              <iframe src={p.youtube} title={p.title} loading="lazy" allowFullScreen></iframe>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
