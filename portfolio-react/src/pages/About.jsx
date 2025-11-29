import aboutData from '../data/about'

export default function About(){
  return (
    <section className="about-page container">
      <h1>About Me</h1>
      <div className="about-grid">
        <div>
          <img src="/images/sbt.jpg" alt={aboutData.name} className="about-photo" />
          <h2>{aboutData.name}</h2>
          <div className="about-summary">
            {aboutData.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h3>Key Skills</h3>
          <ul>
            {aboutData.skills.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
