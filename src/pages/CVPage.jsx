import React from 'react';


export default function CVPage() {
  return (
    <section className="cv-page section">
      <div className="section-inner">
        <h1 className="section-heading">Curriculum Vitae</h1>
        <div className="cv-embed-wrapper" style={{ marginBottom: '1rem' }}>
          <embed src="/Cv.pdf" type="application/pdf" width="100%" height="800px" />
        </div>
        <a className="cv-download-button" href="/Cv.pdf" download="S_Elankeethan_CV.pdf" style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'var(--teal)',
          color: 'var(--paper)',
          borderRadius: '0.4rem',
          textDecoration: 'none',
          fontWeight: '600'
        }}>
          Download CV
        </a>
      </div>
    </section>
  );
}
