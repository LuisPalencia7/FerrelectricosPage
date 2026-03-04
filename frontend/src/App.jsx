import "./styles/main.css";
import { siteConfig } from "./content/siteConfig.js";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Categories from "./components/Categories.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import AboutSection from "./components/AboutSection.jsx";
import BrandsSection from "./components/BrandsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="page-shell">
      <Header
        announcement={siteConfig.announcement}
        primaryCta={siteConfig.hero.primaryCta}
        whatsappUrl={siteConfig.whatsappUrl}
        brand={siteConfig.brand}
        slogan={siteConfig.slogan}
      />

      <main>
        <Banner promotions={siteConfig.promotions} whatsappUrl={siteConfig.whatsappUrl} />
        <Categories categories={siteConfig.categories} />
        <ProductGrid products={siteConfig.featuredProducts} whatsappUrl={siteConfig.whatsappUrl} />
        <AboutSection differentiators={siteConfig.differentiators} />
        <BrandsSection brands={siteConfig.brands} />
        <ContactSection
          brand={siteConfig.brand}
          address={siteConfig.address}
          phone={siteConfig.phone}
          hours={siteConfig.hours}
          whatsappUrl={siteConfig.whatsappUrl}
        />
      </main>

      <Footer brand={siteConfig.brand} />
    </div>
  );
}

export default App;
