import type { Category } from '@/types';
import RevealWrapper from '@/components/ui/RevealWrapper';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <RevealWrapper>
      <section id="categorias" className="section">
        <div className="section-head">
          <h2>Líneas principales</h2>
          <p>Secciones rápidas para navegar productos y promociones.</p>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <article key={cat.title} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </RevealWrapper>
  );
}