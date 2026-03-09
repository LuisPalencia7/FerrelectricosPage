import type { Product } from '@/types';
import RevealWrapper   from '@/components/ui/RevealWrapper';
import WhatsAppButton  from '@/components/ui/WhatsAppButton';

interface ProductGridProps {
  products:    Product[];
  whatsappUrl: string;
}

export default function ProductGrid({ products, whatsappUrl }: ProductGridProps) {
  return (
    <RevealWrapper>
      <section id="productos" className="section">
        <div className="section-head">
          <h2>Catálogo destacado</h2>
          <p>Nuestros productos más solicitados.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              {/* Fase 2: <Image src={product.image} ... /> */}
              <span className="product-tag">{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <WhatsAppButton
                href={whatsappUrl}
                label="Cotizar ahora"
                className="product-cta"
              />
            </article>
          ))}
        </div>
      </section>
    </RevealWrapper>
  );
}