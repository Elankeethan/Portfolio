import PulseLine from './PulseLine.jsx'
import profile from '../assets/profile.jpg'
import { site } from '../siteConfig.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__status">
            <span className="hero__status-dot" />
            Open to internships &amp; opportunities
          </span>
          <p className="eyebrow">Health Info &amp; Comm. Tech · Electronics &amp; Automation</p>
          <h1 className="hero__name">S. Elankeethan</h1>
          <p className="hero__role">
            Undergraduate building at the point where healthcare systems,
            embedded electronics, and mobile software meet.
          </p>
          <PulseLine variant="hero" />
          <p className="hero__lede">
            I design and ship Android &amp; cross-platform apps, wire up
            Arduino-based automation, and study how information moves
            through hospitals — three signals, one line of work.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href={site.cvUrl} download>Download CV</a>
            <a className="btn btn--outline" href="#projects">View Projects</a>
            <a className="btn btn--ghost" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero__portrait-wrap">
          <img
            className="hero__portrait"
            src={profile}
            alt="S. Elankeethan, portrait"
            width="480"
            height="600"
          />
          <span className="hero__portrait-tag">S. Elankeethan</span>
        </div>
      </div>
    </section>
  )
}
