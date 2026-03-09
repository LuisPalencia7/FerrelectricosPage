import Image from 'next/image';
import type { Brand } from '@/types';
import RevealWrapper from '@/components/ui/RevealWrapper';

interface BrandsSectionProps {
  brands: Brand[];
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <RevealWrapper>
      <section className="section">
        <div className="section-head">
          <h2>Marcas aliadas</h2>
        </div>
        <div className="brands-strip">
          {brands.map((brand) => (
            <article key={brand.name} className="brand-item">
              <Image
                src={brand.image}
                alt={brand.name}
                width={70}
                height={70}
                style={{ objectFit: 'contain' }}
              />
              <p>{brand.name}</p>
            </article>
          ))}
        </div>
      </section>
    </RevealWrapper>
  );
}