import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p className="mb-0">&copy; 2025 React. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-light">Política de Privacidad</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">Términos de Uso</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
