import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img 
        src="https://fastly.picsum.photos/id/349/200/200.jpg?hmac=8Cc9fPp4rsCZgc9k4BDMpTIMvfWPvylEu6r7aEuPafw" 
        className="card-img-top" 
        alt="Imagen de ejemplo" 
      />
      <div className="card-body">
        <h5 className="card-title">Postal</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas unde voluptatem placeat, velit natus voluptates laboriosam numquam ipsam temporibus, amet alias in consequatur? Deleniti repellendus quae veniam. Impedit, asperiores harum?
        </p>
        <a href="#" className="btn btn-primary">
          Descubre más
        </a>
      </div>
    </div>
  );
};

export default Card;
