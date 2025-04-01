import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img 
        src="https://fastly.picsum.photos/id/930/500/325.jpg?hmac=1qkq_oH0FfgfU6x6wWkahMTVgXEg1T4IJbfCVCV2eV0" 
        className="card-img-top" 
        alt="Imagen de ejemplo" 
      />
      <div className="card-body">
        <h5 className="card-title text-center">Postal</h5>
        <p className="card-text mx-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde voluptatem placeat, velit natus voluptates laboriosam numquam ipsam temporibus, amet alias in consequatur? Deleniti repellendus quae veniam. Impedit, asperiores harum?
        </p>
      </div>
      <div className="card-footer bg-light text-center">
        <a href="#" className="btn btn-primary">
          Descubre más
        </a>
      </div>
    </div>
  );
};

export default Card;
