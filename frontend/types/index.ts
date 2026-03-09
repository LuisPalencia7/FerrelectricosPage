export type PromotionTone = 'yellow' | 'orange' | 'dark';

export interface Promotion {
  id:          string;
  tone:        PromotionTone;
  badge:       string;
  title:       string;
  description: string;
  highlight:   string;
  cta:         string;
}

export interface Category {
  title: string;
  desc:  string;
}

export interface Product {
  name:  string;
  price: string;
  tag:   string;
  // Fase 2: agregar imagen, descripción, stock, SKU
  // image?: string;
  // slug?:  string;
}

export interface Brand {
  name:  string;
  image: string;
}

export interface HeroConfig {
  primaryCta: string;
}

export interface SiteConfig {
  brand:            string;
  slogan:           string;
  announcement:     string;
  phone:            string;
  whatsappUrl:      string;
  address:          string;
  hours:            string;
  hero:             HeroConfig;
  promotions:       Promotion[];
  categories:       Category[];
  featuredProducts: Product[];
  brands:           Brand[];
  differentiators:  string[];
}