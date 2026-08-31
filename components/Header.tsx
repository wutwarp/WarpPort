export function Header() {
  const links = ["Home", "Projects", "Skills", "Contact"];

  return (
    <header className="header-shell">
      <div className="site-header">
        <a className="brand" href="#home" aria-label="Pongsakorn — home">
          <span className="brand-mark">P</span>
          <span>Pongsakorn</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
