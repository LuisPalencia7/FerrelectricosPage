interface FooterProps {
  brand: string;
}

export default function Footer({ brand }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>{brand}</p>
      <p>© {year} · Bogotá, Colombia</p>
    </footer>
  );
}