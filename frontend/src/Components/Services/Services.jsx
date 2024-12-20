import React from 'react';
import './Services.css';
import Card from '../assets/SPECIALCARDS.SARANGI.jpg';
import Roll from '../assets/ROLLS.SARANGI.jpg';
import Point from '../assets/COINS.SARANGI.jpg';


const Services = () => {
  return (
    <div className="services">
      <div className="branch-row">
        <h2>Services</h2>
        <div className="subject-row">
          <div className="card">
        <img src={Card} alt="#" />
        <h3>Card Service</h3>
        <a href="/cards">
        <button className="buy-button">Purchase</button>
        </a>
      </div>
          <div className="card">
        <img src={Point} alt="#" />
        <h3>Points Service</h3>
        <a href="/points">
        <button className="buy-button">Purchase</button>
        </a>
      </div>
          <div className="card">
        <img src={Roll} alt="#" />
        <h3>Roll Service</h3>
        <a href="/rolls">
        <button className="buy-button">Purchase</button>
        </a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Services;


