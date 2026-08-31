export function HeroSection() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Available for new opportunities</p>
        <h1>Full Stack<br /><span>Software Engineer.</span></h1>
        <p className="hero-description">
          I build practical, scalable, and business-focused web applications
          from requirement analysis to production deployment.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <span>↘</span></a>
          <a className="button button-secondary" href="#contact">Contact Me</a>
        </div>
        <div className="hero-meta" aria-label="Professional focus">
          <span>Based in Thailand</span><i />
          <span>Enterprise &amp; product systems</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-panel" aria-label="Developer profile summary">
          <div className="code-bar"><i /><i /><i /><span>pongsakorn.ts</span></div>
          <div className="code-content">
            <p><b>01</b><span className="code-blue">const</span> engineer = {'{'}</p>
            <p><b>02</b>&nbsp;&nbsp;name: <span className="code-green">&quot;Pongsakorn&quot;</span>,</p>
            <p><b>03</b>&nbsp;&nbsp;focus: <span className="code-green">&quot;Full Stack&quot;</span>,</p>
            <p><b>04</b>&nbsp;&nbsp;mindset: <span className="code-green">&quot;Build what matters&quot;</span>,</p>
            <p><b>05</b>&nbsp;&nbsp;experience: <span className="code-green">&quot;Enterprise → Product&quot;</span></p>
            <p><b>06</b>{'}'};</p>
          </div>
          <div className="panel-status"><span>●</span> Systems online <b>TH / GMT+7</b></div>
        </div>
        <div className="floating-note note-top"><span>✓</span><div><b>Production ready</b><small>Reliable by design</small></div></div>
        <div className="floating-note note-bottom"><span>↗</span><div><b>End-to-end</b><small>Plan · Build · Deploy</small></div></div>
      </div>
    </section>
  );
}
