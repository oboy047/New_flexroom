// src/components/Header.tsx

export default function Header() {
  return (
    <header className="header">
  <div className="container">
    <h1 className="logo">🏢 FlexRoom</h1>
    <nav className="nav-links">
      <a href="/">Hjem</a>
      <a href="/about">Om oss</a>
      <a href="/contact">Kontakt</a>
      <a href="/login" className="login-btn">Logg inn</a>
    </nav>
  </div>
</header>

  );
}
