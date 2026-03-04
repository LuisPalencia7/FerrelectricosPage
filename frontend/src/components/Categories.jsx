export default function Categories({ categories }) {
  return (
    <section id="categorias" className="section reveal">
      <div className="section-head">
        <h2>Lineas principales</h2>
        <p>Secciones rapidas para navegar productos y promociones.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <article key={category.title} className="category-card">
            <h3>{category.title}</h3>
            <p>{category.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
