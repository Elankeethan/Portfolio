import PulseLine from './PulseLine.jsx'
import './Education.css'

const items = [
  {
    year: 'Currently reading · Year 3',
    title: 'BHSc Honours, Health Information & Communication Technology',
    org: 'Gampaha Wickramarachchi University of Indigenous Medicine',
    active: true,
  },
  {
    year: 'Currently reading',
    title: 'BSc (External), Electronics and Automation Technologies',
    org: 'Faculty of Science, University of Colombo',
  },
  {
    year: '2022 – 2023',
    title: 'Higher National Diploma in Telecommunication',
    org: 'Jaffna Technical College',
  },
  {
    year: '2007 – 2021',
    title: 'School Education',
    org: 'Jaffna Central College',
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <p className="eyebrow">02 — Education</p>
        <h2 className="section-heading">A timeline built for both fields.</h2>
        <ol className="education__list">
          {items.map((item, i) => (
            <li key={item.title} className={`education__item ${item.active ? 'is-active' : ''}`}>
              <span className="education__year">{item.year}</span>
              <div>
                <h3 className="education__title">{item.title}</h3>
                <p className="education__org">{item.org}</p>
              </div>
            </li>
          ))}
        </ol>
        <PulseLine variant="divider" />
      </div>
    </section>
  )
}
