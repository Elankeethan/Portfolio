import './Projects.css'

const featured = [
  {
    tag: 'Android · Kotlin',
    title: 'AgroFarm',
    subtitle: 'Smart agriculture mobile application',
    description:
      'A digital platform helping farmers manage farm and crop information, track activity, and access agricultural resources through a simple mobile interface.',
    points: ['User registration & authentication', 'Farm & crop management', 'Agriculture information', 'Secure data management'],
    role: 'Built the Android app end-to-end in Kotlin — UI, functionality, and performance testing.',
  },
  {
    tag: 'Flutter · Dart · C#',
    title: 'AidMe',
    subtitle: 'Healthcare mobile application',
    description:
      'A cross-platform app for improving healthcare accessibility — patient profiles, healthcare information, and appointment-related features in one place.',
    points: ['Patient profile management', 'Healthcare information management', 'Appointment features', 'Secure data handling'],
    role: 'Built the Flutter/Dart front end, worked on the C# backend, and integrated and tested app features.',
  },
]

const sideProjects = [
  {
    title: 'Arduino-Based Automation',
    stack: 'Arduino · Sensors · Actuators',
    description: 'Ultrasonic sensing, servo motor control, LCD integration, and sensor-driven automation experiments.',
  },
  {
    title: 'Medical Image Processing',
    stack: 'Python · OpenCV',
    description: 'Image filtering, edge detection, thresholding, and enhancement techniques applied to medical images.',
  },
  {
    title: 'Network Design & Simulation',
    stack: 'Cisco Packet Tracer',
    description: 'IP addressing, VLAN configuration, DHCP, routing, and troubleshooting across simulated LANs.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="eyebrow">04 — Projects</p>
        <h2 className="section-heading">Two apps in the field, a workbench behind them.</h2>

        <div className="projects__featured">
          {featured.map((p) => (
            <article key={p.title} className="project-card">
              <span className="project-card__tag">{p.tag}</span>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <p className="project-card__role">{p.role}</p>
            </article>
          ))}
        </div>

        <h3 className="projects__subheading">Also on the workbench</h3>
        <div className="projects__side-grid">
          {sideProjects.map((p) => (
            <div key={p.title} className="side-project">
              <h4>{p.title}</h4>
              <p className="side-project__stack">{p.stack}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
