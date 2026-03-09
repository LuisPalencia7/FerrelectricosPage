import type { Metadata } from 'next';
import '@/styles/main.css';
import './globals.css';
import { siteConfig } from '@/content/siteConfig';

export const metadata: Metadata = {
  title: {
    default:  siteConfig.brand,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.slogan}. Herramientas eléctricas, materiales de construcción, plomería y más en Bogotá.`,
  keywords:    ['ferretería', 'herramientas', 'construcción', 'Bogotá', 'Truper', 'DeWalt', 'ferrelectricos'],
  openGraph: {
    title:       siteConfig.brand,
    description: siteConfig.slogan,
    locale:      'es_CO',
    type:        'website',
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}