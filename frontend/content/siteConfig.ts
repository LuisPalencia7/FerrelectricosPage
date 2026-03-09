import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  brand:        "Ferrelectricos Rivera",
  slogan:       "Tu obra empieza con una buena herramienta",
  announcement: "Promociones activas y asesoría personalizada para obra, hogar e industria.",
  phone:        "+57 304 438 4216",
  whatsappUrl:  "https://wa.me/573044384216",
  address:      "Bogotá, Colombia",
  hours:        "Lunes a Sábado: 8:00 a.m. – 6:00 p.m.",

  hero: {
    primaryCta: "Compra ya",
  },

  promotions: [
    {
      id:          "promo-1",
      tone:        "yellow",
      badge:       "Territorio Carpintero",
      title:       "Bono por compras superiores a $500.000",
      description: "Campaña ideal para herramientas eléctricas, accesorios de corte y combos por temporada.",
      highlight:   "Activa hasta fin de mes",
      cta:         "Quiero esta promo",
    },
    {
      id:          "promo-2",
      tone:        "orange",
      badge:       "Semana Constructor",
      title:       "Descuentos en fijaciones, sellantes y materiales de obra",
      description: "Sube aquí promociones por categoría para dirigir tráfico a productos concretos.",
      highlight:   "Hasta 30% en referencias seleccionadas",
      cta:         "Cotizar por WhatsApp",
    },
    {
      id:          "promo-3",
      tone:        "dark",
      badge:       "Oferta Express",
      title:       "Entrega rápida en referencias de alta rotación",
      description: "Muestra información de inventario, cobertura y condiciones de envío en este bloque.",
      highlight:   "Cobertura urbana",
      cta:         "Ver disponibilidad",
    },
  ],

  categories: [
    { title: "Herramienta eléctrica", desc: "Taladros, pulidoras, sierras y accesorios." },
    { title: "Construcción",          desc: "Cementos, fijaciones, sellantes y acabados." },
    { title: "Eléctricos",            desc: "Cables, protecciones, tomas y tableros." },
    { title: "Plomería",              desc: "Tubería, válvulas, uniones y kits de reparación." },
  ],

  featuredProducts: [
    { name: "Taladro percutor 550W",      price: "$250.000", tag: "Más vendido" },
    { name: "Juego de brocas mixtas",      price: "$45.000",  tag: "Recomendado" },
    { name: 'Sierra circular 7 1/4"',     price: "$180.000", tag: "Oferta" },
    { name: "Kit destornilladores 12 pzs", price: "$35.000",  tag: "Nuevo" },
  ],

  brands: [
    { name: "Truper",  image: "/img/truper.png"  },
    { name: "DeWalt",  image: "/img/dewalt.png"  },
    { name: "Sika",    image: "/img/sika.png"    },
    { name: "Pavco",   image: "/img/pavco.png"   },
    { name: "Grival",  image: "/img/grival.png"  },
    { name: "Abracol", image: "/img/abracol.png" },
  ],

  differentiators: [
    "Acompañamiento técnico antes y después de la compra",
    "Cotización rápida por WhatsApp en horario laboral",
    "Portafolio equilibrado para hogar, contratistas y taller",
  ],
};