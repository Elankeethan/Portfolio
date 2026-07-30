import { site } from '../siteConfig.js';
import './Footer.css';
import { useState } from 'react';

export default function Footer() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const text = form.message.value;
    const subject = encodeURIComponent(`Suggestion from ${name}`);
    const body = encodeURIComponent(`Message:\n${text}\n\nFrom: ${name} <${email}>`);
    const mailtoLink = `mailto:${site.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setMessages((prev) => [...prev, { name, email, text }]);
    form.reset();
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__contact">
          <p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${site.phone}`}>{site.phone}</a></p>
          <p><strong>GitHub:</strong> <a href={site.github} target="_blank" rel="noreferrer">{site.github}</a></p>
          <p><strong>LinkedIn:</strong> <a href={site.linkedin} target="_blank" rel="noreferrer">{site.linkedin}</a></p>
        </div>
        <form className="footer__form" onSubmit={handleSubmit}>
          <h4>Send a suggestion</h4>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
        {messages.length > 0 && (
          <div className="footer__messages">
            <h4>Suggestions</h4>
            <ul>
              {messages.map((msg, i) => (
                <li key={i}>
                  <strong>{msg.name}</strong> ({msg.email}): {msg.text}
                </li>
              ))}
            </ul>
          </div>
        )}
        <span>© {new Date().getFullYear()} S. Elankeethan</span>
        <span className="footer__tags">HICT · Electronics & Automation</span>
      </div>
    </footer>
  );
}
