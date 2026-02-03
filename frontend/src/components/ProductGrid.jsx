const products = [
  { id: 1, name: 'Taladro 550W', price: '$250.000' },
  { id: 2, name: 'Juego de Brocas', price: '$45.000' },
  { id: 3, name: 'Flexómetro', price: '$25.000' }
]

export default function ProductGrid() {
  return (
    <section className="products">
      {products.map((p) => (
        <div className="product-card" key={p.id}>
          <div className="img-placeholder">IMG</div>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <button disabled>Agregar al carrito</button>
        </div>
      ))}
    </section>
  )
}
