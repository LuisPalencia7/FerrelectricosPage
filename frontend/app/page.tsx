import { siteConfig } from '@/content/siteConfig';
import Header          from '@/components/layout/Header';
import Footer          from '@/components/layout/Footer';
import Banner          from '@/components/sections/Banner';
import Categories      from '@/components/sections/Categories';
import ProductGrid     from '@/components/sections/ProductGrid';
import AboutSection    from '@/components/sections/AboutSection';
import BrandsSection   from '@/components/sections/BrandsSection';
import ContactSection  from '@/components/sections/ContactSection';

export default function HomePage() {
  const { hero, promotions, categories, featuredProducts,
          brands, differentiators, ...contact } = siteConfig;

  return (
    <div className="page-shell">
      <Header
        announcement={siteConfig.announcement}
        primaryCta={hero.primaryCta}
        whatsappUrl={siteConfig.whatsappUrl}
        brand={siteConfig.brand}
        slogan={siteConfig.slogan}
      />

      <main>
        <Banner
          promotions={promotions}
          whatsappUrl={siteConfig.whatsappUrl}
        />
        <Categories categories={categories} />
        <ProductGrid
          products={featuredProducts}
          whatsappUrl={siteConfig.whatsappUrl}
        />
        <AboutSection differentiators={differentiators} />
        <BrandsSection brands={brands} />
        <ContactSection
          brand={contact.brand}
          address={contact.address}
          phone={contact.phone}
          hours={contact.hours}
          whatsappUrl={contact.whatsappUrl}
        />
      </main>

      <Footer brand={siteConfig.brand} />
    </div>
  );
}