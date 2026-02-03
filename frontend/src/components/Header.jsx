export default function Header() {
  return (
    <header className="header">
      <div className="logo">Ferrelectricos Rivera</div>

      <input
        className="search"
        type="text"
        placeholder="Buscar productos..."
      />

      <div className="actions">
        <span>Iniciar sesión</span>
        <span className="cart">🛒 0</span>
      </div>
    </header>
  )
}
