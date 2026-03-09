import RevealWrapper  from '@/components/ui/RevealWrapper';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface ContactSectionProps {
  brand:       string;
  address:     string;
  phone:       string;
  hours:       string;
  whatsappUrl: string;
}

export default function ContactSection({
  brand, address, phone, hours, whatsappUrl,
}: ContactSectionProps) {
  return (
    <RevealWrapper>
      <section id="contacto" className="section">
        <div className="contact-layout">

          <article className="contact-card">
            <h2>Contacto</h2>
            <p>{brand}</p>
            <p>{address}</p>
            <p>
              <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
            </p>
            <p>{hours}</p>
            <WhatsAppButton
              href={whatsappUrl}
              label="Hablar con asesor"
              className="btn btn-primary"
            />
          </article>

          <article className="map-card" aria-label="Ubicación de la ferretería">
            {/*
              TODO: Reemplaza la URL del src con las coordenadas exactas.
              Ejemplo: https://www.google.com/maps?q=4.6097,-74.0817&output=embed
            */}
            <iframe
              title="Mapa Ferrelectricos Rivera"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=bogota+colombia&output=embed"
            />
          </article>

        </div>
      </section>
    </RevealWrapper>
  );
}