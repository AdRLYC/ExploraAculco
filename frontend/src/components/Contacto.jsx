import { useState } from "react";
import api from "../services/api";

function Contacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha_visita: "",
    lugar_interes: "",
    mensaje: "",
  });

  const [mensajeExito, setMensajeExito] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    setMensajeExito("");
    setError("");
    setEnviando(true);

    api.post("contactos/", formulario)
      .then(() => {

        setMensajeExito("Mensaje enviado correctamente.");

        setFormulario({
          nombre: "",
          correo: "",
          telefono: "",
          fecha_visita: "",
          lugar_interes: "",
          mensaje: "",
        });

      })
      .catch(({ response }) => {
        setError(response?.status === 400
          ? "Revisa el formato y la longitud de los datos capturados."
          : "No se pudo enviar el mensaje. Intenta nuevamente.");
      })
      .finally(() => setEnviando(false));
  };

  return (
    <section id="contacto" className="bg-light py-5">

      <div className="container">

        <h2 className="text-center mb-4 text-dark">
          Formulario de contacto
        </h2>

        {mensajeExito && (
          <div role="status" className="alert alert-success text-center">
            {mensajeExito}
          </div>
        )}

        {error && <p role="alert" className="alert alert-danger">{error}</p>}
        <p>Los datos de contacto se usarán para atender tu consulta y son visibles únicamente para el personal autorizado. Para la demostración, usa datos ficticios.</p>
        <form className="row g-3" onSubmit={enviarFormulario}>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
              aria-label="Nombre completo"
              name="nombre"
              maxLength={100}
              value={formulario.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              name="correo"
              maxLength={254}
              value={formulario.correo}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono"
              aria-label="Teléfono"
              name="telefono"
              maxLength={20}
              value={formulario.telefono}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              aria-label="Fecha de visita"
              name="fecha_visita"
              value={formulario.fecha_visita}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Lugar de interés"
              aria-label="Lugar de interés"
              name="lugar_interes"
              maxLength={100}
              value={formulario.lugar_interes}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Mensaje"
              aria-label="Mensaje"
              name="mensaje"
              maxLength={1000}
              value={formulario.mensaje}
              onChange={manejarCambio}
              required
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button disabled={enviando} className="btn btn-success btn-lg">
              {enviando ? "Enviando…" : "Enviar mensaje"}
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}

export default Contacto;