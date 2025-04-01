import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <Card1 />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <Card2 />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <Card3 />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <Card4 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
