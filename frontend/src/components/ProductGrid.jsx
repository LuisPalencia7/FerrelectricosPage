export default function ProductGrid({ products, whatsappUrl }) {
  return (
    <section id="productos" className="section reveal">
      <div className="section-head">
        <h2>Catalogo destacado</h2>
        <p>Base ideal para evolucionar luego a carrito y checkout.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.name} className="product-card">
            <span className="product-tag">{product.tag}</span>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Cotizar ahora
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
