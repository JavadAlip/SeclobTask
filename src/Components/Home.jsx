import React from 'react';
import HomePage from '../assets/Image.png';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={HomePage} alt="Hawaii" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center">
        <h1 className="text-6xl md:text-5xl lg:text-6xl">Welcome to Hawaii</h1>
      </div>
    </div>
  );
}

export default Home;
