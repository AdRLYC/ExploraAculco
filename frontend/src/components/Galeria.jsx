const fotos = [
  ["Centro_Histórico.jpg", "Centro Histórico de Aculco"],
  ["Ex_convento_San_Jerónimo.jpg", "Ex Convento de San Jerónimo"],
  ["peña_de_ñado.jpg", "Peña de Ñado"],
];

function Galeria() {
  return (
    <section id="galeria" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-dark">Galería de Aculco</h2>
        <div className="row g-3">
          {fotos.map(([archivo, titulo]) => (
            <figure className="col-md-4" key={archivo}>
              <img src={`/media/lugares/${encodeURIComponent(archivo)}`}
                className="img-fluid rounded galeria-img" alt={titulo} loading="lazy" />
              <figcaption className="mt-2">{titulo}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;
