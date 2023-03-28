import React from 'react';
import './home.css';
import background from "../../images/hotel.jpeg";

function HomePage() {
  return (
    <div className='hero-container'>
      <img src= {background} alt='' />
      <h1>Your Trip Starts Here...</h1>
      <div className='hero-btns'>
      <a href="/Database/branches" className='btn' >Branches</a>
      </div>
    </div>

  );
}

export default HomePage;