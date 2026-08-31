const contactLinks = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", mark: "@" },
  { label: "GitHub", value: "github.com/username", href: "https://github.com/username", mark: "GH" },
  { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com/in/username", mark: "in" },
];

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="section-label">Let&apos;s work together</p>
            <h2>Have a problem<br />worth <span>solving?</span></h2>
            <p>Feel free to contact me for software development opportunities, collaboration, or freelance projects.</p>
            <a className="button button-light" href="mailto:your.email@example.com">Start a conversation <span>↗</span></a>
          </div>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a href={link.href} key={link.label} target={link.label === "Email" ? undefined : "_blank"} rel="noreferrer">
                <span className="contact-mark">{link.mark}</span>
                <span><small>{link.label}</small><b>{link.value}</b></span>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
