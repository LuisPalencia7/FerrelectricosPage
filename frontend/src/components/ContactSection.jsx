export default function ContactSection({ brand, address, phone, hours, whatsappUrl }) {
  return (
    <section id="contacto" className="section reveal">
      <div className="contact-layout">
        <article className="contact-card">
          <h2>Contacto</h2>
          <p>{brand}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{hours}</p>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hablar con asesor
          </a>
        </article>

        <article className="map-card" aria-label="Ubicacion de la ferreteria">
          <iframe
            title="Mapa Ferrelectricos Rivera"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=bogota+colombia&output=embed"
          />
        </article>
      </div>
    </section>
  );
}
