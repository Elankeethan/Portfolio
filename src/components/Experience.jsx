import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner experience__grid">
        <div>
          <p className="eyebrow">05 — Experience</p>
          <h2 className="section-heading">Inside a hospital's information systems.</h2>
        </div>
        <div className="experience__card">
          <h3>Internship — Jaffna Teaching Hospital</h3>
          <p className="experience__intro">
            Practical, on-the-ground exposure to how healthcare environments
            actually run their information systems.
          </p>
          <ul className="experience__list">
            <li>Hospital Information Management Systems (HIMS)</li>
            <li>Healthcare workflows</li>
            <li>Patient information management</li>
            <li>Digital healthcare processes</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
