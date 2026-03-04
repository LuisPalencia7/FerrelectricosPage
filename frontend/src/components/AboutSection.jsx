export default function AboutSection({ differentiators }) {
  return (
    <section id="nosotros" className="section reveal">
      <div className="about-layout">
        <div>
          <h2>Ferreteria pensada para resolver rapido</h2>
          <p>
            Esta pagina informativa prioriza claridad, contacto rapido y promociones visibles.
            Asi puedes vender mas desde ya, mientras preparas la fase e-commerce.
          </p>
        </div>
        <ul>
          {differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
