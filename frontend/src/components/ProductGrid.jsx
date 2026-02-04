const products = [
  { id: 1, name: 'Taladro 550W', price: '$250.000', image: '🔧' },
  { id: 2, name: 'Juego de Brocas', price: '$45.000', image: '🔩' },
  { id: 3, name: 'Flexómetro', price: '$25.000', image: '📏' },
  { id: 4, name: 'Sierra Circular', price: '$180.000', image: '⚙️' },
  { id: 5, name: 'Destornillador Set', price: '$35.000', image: '🔨' },
  { id: 6, name: 'Casco de Seguridad', price: '$55.000', image: '🪖' }
]

export default function ProductGrid() {
  return (
    <section className="products-section">
      <h2 className="products-title">Nuestros Productos</h2>
      <div className="products">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-image">{p.image}</div>
            <h3 className="product-name">{p.name}</h3>
            <p className="product-price">{p.price}</p>
            <button className="add-to-cart-btn">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  )
}
