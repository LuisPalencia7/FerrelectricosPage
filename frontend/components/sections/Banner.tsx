'use client';

import { useEffect, useState, useRef } from 'react';
import type { Promotion } from '@/types';

interface BannerProps {
  promotions:  Promotion[];
  whatsappUrl: string;
}

export default function Banner({ promotions, whatsappUrl }: BannerProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [paused, setPaused]           = useState<boolean>(false);
  const touchStartX                   = useRef<number>(0);
  const slideCount                    = promotions.length;

  // Autoplay — se pausa al hacer hover
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 5500);
    return () => clearInterval(timer);
  }, [slideCount, paused]);

  const next = () => setActiveSlide((p) => (p + 1) % slideCount);
  const prev = () => setActiveSlide((p) => (p - 1 + slideCount) % slideCount);

  // Swipe táctil
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section
      className="promo-carousel reveal"
      aria-label="Promociones destacadas"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="carousel-nav prev" onClick={prev} aria-label="Slide anterior">
        ‹
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {promotions.map((slide) => (
            <article
              key={slide.id}
              className={`promo-slide tone-${slide.tone}`}
            >
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

      <button className="carousel-nav next" onClick={next} aria-label="Siguiente slide">
        ›
      </button>

      <div className="carousel-dots" role="tablist">
        {promotions.map((slide, idx) => (
          <button
            key={slide.id}
            className={idx === activeSlide ? 'dot active' : 'dot'}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Ir a promoción ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}