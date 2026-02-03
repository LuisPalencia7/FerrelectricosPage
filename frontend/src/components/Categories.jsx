const categories = [
  'Herramientas',
  'Construcción',
  'Seguridad Industrial',
  'Tecnología',
  'Hogar',
  'Ofertas'
]

export default function Categories() {
  return (
    <nav className="categories">
      {categories.map((cat) => (
        <button key={cat}>{cat}</button>
      ))}
    </nav>
  )
}
