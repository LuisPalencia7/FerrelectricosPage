export default function Header({ announcement, primaryCta, whatsappUrl, brand, slogan }) {
  return (
    <>
      <header className="top-strip">
        <p>{announcement}</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          {primaryCta}
        </a>
      </header>

      <nav className="main-nav">
        <div className="brand-block">
          <span className="brand-mark">FR</span>
          <div>
            <strong>{brand}</strong>
            <p>{slogan}</p>
          </div>
        </div>

        <div className="nav-links">
          <a href="#categorias">Categorias</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </>
  );
}
