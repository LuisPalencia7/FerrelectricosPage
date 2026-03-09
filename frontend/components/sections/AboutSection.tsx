import RevealWrapper from '@/components/ui/RevealWrapper';

interface AboutSectionProps {
  differentiators: string[];
}

export default function AboutSection({ differentiators }: AboutSectionProps) {
  return (
    <RevealWrapper>
      <section id="nosotros" className="section">
        <div className="about-layout">
          <div>
            <h2>Ferretería pensada para resolver rápido</h2>
            <p>
              Prioridad en claridad, contacto rápido y promociones
              visibles. Así puedes vender más desde ya mientras
              preparas la siguiente fase.
            </p>
          </div>
          <ul>
            {differentiators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </RevealWrapper>
  );
}