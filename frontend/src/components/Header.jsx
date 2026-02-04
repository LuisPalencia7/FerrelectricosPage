export default function Header() {
  return (
    <>
      {/* Banner de aviso superior de fondo negro */}
      <div className="top-banner">
        <span className="banner-text">
          En Ferrelectricos Rivera encuentras cientos de productos al mejor precio y calidad.
          <a href="#" className="banner-link">¡Compra ya!</a>
        </span>
      </div>

      {/* Header principal */}
      <header className="header">
        <div className="header-top">
          <div className="logo-section">
            <div className="logo-box">
              <span className="logo-text">🏠 FERRELECTRICOS RIVERA</span>
            </div>
          </div>

          <div className="search-section">
            <input
              className="search"
              type="text"
              placeholder="Buscar..."
            />
            <button className="search-btn">🔍</button>
          </div>

          <div className="actions">
            <button className="action-btn">👤 Iniciar Sesión</button>
            <button className="cart-btn">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">0</span>
              Mi carrito
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
