// Menu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import greekSalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.png';
import lemonDessert from '../../assets/lemondessert.jpg';
import './menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleOrderClick = (itemId) => {
    navigate(`/orderonline?itemId=${itemId}`);
  };

  return (
    <div className="menu">
      <h1 className="header-menu-h1">Menu Little Lemon Restaurant</h1>
      <h3 className="header-menu-h3">Order online and we will deliver your food within 30 minutes</h3>

      <div className="cards-container-menu">
        <div className="card-menu">
          <img src={greekSalad} alt="Greek Salad" className="card-image-menu" />
          <div className="card-details">
            <h3 className="card-title-menu">Greek Salad</h3>
            <p className="card-description-menu">Delicious salad with feta cheese, tomatoes, cucumbers, olives, and olive oil dressing</p>
          </div>
          <button className="card-button-online" onClick={() => handleOrderClick(1)}>Order online</button>
        </div>

        <div className="card-menu">
          <img src={bruchetta} alt="Bruschetta" className="card-image-menu" />
          <div className="card-details">
            <h3 className="card-title-menu">Bruschetta</h3>
            <p className="card-description-menu">Italian bruschetta with ham and cheese</p>
          </div>
          <button className="card-button-online" onClick={() => handleOrderClick(2)}>Order online</button>
        </div>

        <div className="card-menu">
          <img src={lemonDessert} alt="lemon dessert" className="card-image-menu" />
          <div className="card-details">
            <h3 className="card-title-menu">Lemon Dessert</h3>
            <p className="card-description-menu">Piece of our special lemon dessert</p>
          </div>
          <button className="card-button-online" onClick={() => handleOrderClick(3)}>Order online</button>
        </div>
      </div>

      <button className="more-food-btn">More food...</button>
    </div>
  );
};

export default Menu;
