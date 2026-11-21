function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top" aria-label="Navegación principal">
      <div className="container d-flex flex-wrap gap-2">
        <a className="navbar-brand fw-bold" href="#">Explora Aculco</a>
        <div className="d-flex flex-wrap gap-3">
          <a className="link-light" href="#lugares">Lugares</a>
          <a className="link-light" href="#mapa">Mapa</a>
          <a className="link-light" href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
