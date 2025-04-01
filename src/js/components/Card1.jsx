import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img 
        src="https://fastly.picsum.photos/id/37/500/325.jpg?hmac=zGjZe3j7Z87xpKIJD0OCH5k9P_7qTaMHMqdqCwIQYkE" 
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
