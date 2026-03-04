import { useEffect, useState } from "react";

export default function Banner({ promotions, whatsappUrl }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = promotions.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 5500);

    return () => clearInterval(timer);
  }, [slideCount]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section className="promo-carousel reveal" aria-label="Promociones destacadas">
      <button className="carousel-nav prev" onClick={prevSlide} aria-label="Slide anterior">
        ‹
      </button>

      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {promotions.map((slide) => (
            <article key={slide.id} className={`promo-slide tone-${slide.tone}`}>
              <span className="promo-badge">{slide.badge}</span>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="promo-footer">
                <strong>{slide.highlight}</strong>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  {slide.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button className="carousel-nav next" onClick={nextSlide} aria-label="Siguiente slide">
        ›
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Seleccionar promocion">
        {promotions.map((slide, idx) => (
          <button
            key={slide.id}
            className={idx === activeSlide ? "dot active" : "dot"}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Ir a promocion ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
