import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
		<Card />
		<Card />
		<Card />
		<Card />
      </div>
    </div>
  );
};

export default Home;
