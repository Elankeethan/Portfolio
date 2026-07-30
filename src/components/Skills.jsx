import './Skills.css'

const groups = [
  {
    label: 'Languages',
    items: ['Java', 'Kotlin', 'Dart', 'C#', 'JavaScript', 'Python', 'C'],
  },
  {
    label: 'Mobile',
    items: ['Android (Kotlin)', 'Flutter', 'Dart', 'Mobile UI Design', 'App Testing'],
  },
  {
    label: 'Web',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Data',
    items: ['MongoDB', 'MySQL', 'SQLite', 'Database Design'],
  },
  {
    label: 'Electronics & Automation',
    items: ['Arduino', 'Embedded Systems', 'Microcontrollers', 'Sensors & Actuators', 'IoT Fundamentals', 'Circuit Design', 'Proteus'],
  },
  {
    label: 'Networking',
    items: ['Cisco Packet Tracer', 'TCP/IP', 'LAN Configuration', 'Routing & Switching', 'Troubleshooting'],
  },
  {
    label: 'Tools',
    items: ['VS Code', 'Android Studio', 'Visual Studio', 'Git & GitHub', 'Postman', 'Arduino IDE', 'Unity'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <p className="eyebrow">03 — Skills</p>
        <h2 className="section-heading">Seven toolkits, one workflow.</h2>
        <div className="skills__grid">
          {groups.map((g) => (
            <div key={g.label} className="skills__group">
              <h3 className="skills__label">{g.label}</h3>
              <ul className="skills__tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
