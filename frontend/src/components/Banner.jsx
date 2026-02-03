import { useEffect, useState } from 'react';

const banners = [
  'https://via.placeholder.com/1200x400?text=Promo+Taladro',
  'https://via.placeholder.com/1200x400?text=Ofertas+Ferreteria'
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="banner">
      <img src={banners[index]} alt="Banner promocional" />
    </div>
  )
}
