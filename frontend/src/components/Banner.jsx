import { useEffect, useState } from 'react';

export default function Banner() {
  const [index, setIndex] = useState(0)
  const [brandIndex, setBrandIndex] = useState(0)

  const benefits = [
    [
      {
        icon: '🚚',
        title: 'ENVÍO*\nGRATIS',
        subtitle: 'En cientos de\nproductos'
      },
      {
        icon: '💳',
        title: 'PAGA A CRÉDITO CON',
        brands: ['Addi', 'sistecrédito', 'Bancolombia', 'SuMas'],
        special: '4 cuotas 0% interés'
      },
      {
        icon: '⭐',
        title: 'ACUMULA Y REDIME',
        brand: 'Puntos Colombia'
      }
    ],
    [
      {
        icon: '🎁',
        title: 'OFERTAS\nEXCLUSIVAS',
        subtitle: 'Descuentos especiales'
      },
      {
        icon: '⚡',
        title: 'ENTREGA\nRÁPIDA',
        subtitle: '24-48 horas'
      },
      {
        icon: '🛡️',
        title: 'GARANTÍA\nTOTAL',
        subtitle: 'Productos de calidad'
      }
    ]
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => setIndex((prev) => (prev - 1 + 2) % 2)
  const handleNext = () => setIndex((prev) => (prev + 1) % 2)

  const handleBrandPrev = () => setBrandIndex((prev) => (prev - 1 + brands.length) % brands.length)
  const handleBrandNext = () => setBrandIndex((prev) => (prev + 1) % brands.length)

  useEffect(() => {
    const brandTimer = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brands.length)
    }, 3000)
    return () => clearInterval(brandTimer)
  }, [])

  const brands = [
    { name: 'TRUPER', image: '/img/truper.png' },
    { name: 'DeWALT', image: '/img/dewalt.png' },
    { name: 'ABRACOL', image: '/img/abracol.png' },
    { name: 'GRIVAL', image: '/img/grival.png' },
    { name: 'PAVCO', image: '/img/pavco.png' },
    { name: 'TITOPABON', image: '/img/titopabon.png' },
    { name: 'SIKA', image: '/img/sika.png' }
  ]

  return (
    <div className="banner-section">
      <div className="banner-slider">
        <button className="banner-nav prev" onClick={handlePrev}>‹</button>
        
        <div className="banner-content">
          <div className="banner-text">
            <h2>CONOCE NUESTRA <span className="highlight">GRAN VARIEDAD DE PRODUCTOS.</span></h2>
            <p>COMPRANDO EN LINEA</p>
          </div>

          <div className="banner-benefits">
            {benefits[index].map((benefit, idx) => (
              <div key={idx} className="benefit-box">
                {benefit.icon && <div className="benefit-icon">{benefit.icon}</div>}
                <div className="benefit-text">
                  <h4>{benefit.title}</h4>
                  {benefit.subtitle && <p>{benefit.subtitle}</p>}
                  {benefit.brands && (
                    <div className="benefit-brands">
                      {benefit.brands.map((brand, i) => (
                        <span key={i}>{brand}</span>
                      ))}
                    </div>
                  )}
                  {benefit.special && <p className="special">{benefit.special}</p>}
                  {benefit.brand && <p className="brand">{benefit.brand}</p>}
                </div>
              </div>
            ))}
          </div>

          <button className="cta-button">COMPRA AHORA</button>
        </div>

        <button className="banner-nav next" onClick={handleNext}>›</button>
      </div>

      <div className="brand-section">
        <h3>NUESTRAS MARCAS ALIADAS... </h3>
        <div className="brands-carousel">
          <button className="brand-nav prev" onClick={handleBrandPrev}>‹</button>
          
          <div className="brands-container">
            {brands.map((brand, idx) => {
              const position = (idx - brandIndex + brands.length) % brands.length
              const isVisible = position < 4
              return (
                <div key={idx} className={`brand-item ${isVisible ? 'visible' : 'hidden'}`}>
                  <img src={brand.image} alt={brand.name} className="brand-logo" />
                  <p>{brand.name}</p>
                </div>
              )
            })}
          </div>

          <button className="brand-nav next" onClick={handleBrandNext}>›</button>
        </div>
      </div>
    </div>
  )
}
