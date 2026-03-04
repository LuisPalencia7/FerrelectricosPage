export default function BrandsSection({ brands }) {
  return (
    <section className="section reveal">
      <div className="section-head">
        <h2>Marcas aliadas</h2>
      </div>
      <div className="brands-strip">
        {brands.map((brand) => (
          <article key={brand.name} className="brand-item">
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
