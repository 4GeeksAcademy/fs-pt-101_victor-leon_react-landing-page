import React from 'react';

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-1 fw-bold">Bienvenido!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eos repellendus quidem, iusto quod possimus facilis suscipit quia molestias veniam a, eveniet maxime officia veritatis? Inventore, pariatur temporibus. Fuga, culpa.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Llamada a la acción
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
