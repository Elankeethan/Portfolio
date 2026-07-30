import { site } from '../siteConfig.js'
import './Contact.css'

export default function Contact() {
  const links = [
    site.email && { label: 'Email', href: `mailto:${site.email}`, value: site.email },
    site.phone && { label: 'Phone', href: `tel:${site.phone.replace(/\s+/g, '')}`, value: site.phone },
    site.github && { label: 'GitHub', href: site.github, value: site.github.replace('https://', '') },
    site.linkedin && { label: 'LinkedIn', href: site.linkedin, value: site.linkedin.replace('https://', '') },
    site.facebook && { label: 'Facebook', href: site.facebook, value: site.facebook.replace('https://', '') },
  ].filter(Boolean)

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <p className="eyebrow">06 — Contact</p>
        <h2 className="section-heading">Let's line up your next project.</h2>
        <p className="contact__lede">
          Open to opportunities across health information systems, mobile
          development, and automation. Based in {site.location || 'Sri Lanka'}.
        </p>

        <p>Use the form in the footer to send a suggestion or get in touch.</p>
      </div>
    </section>
  )
}
