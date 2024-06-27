import React from 'react';
import Main from '../main/main';
import greekSalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.png';
import lemonDessert from '../../assets/lemondessert.jpg';
import './homepage.css';

const Homepage = () => {

    return (
        <div>
            <Main />
            <div className="specials">
                <h1>This weeks specials!</h1>
                <button className="menu-button">Online Menu</button>
            </div>
            <div className="cards-specials">
                <div className="card-specials">
                    <img src={greekSalad} alt="Greek Salad" className="card-image-specials" />
                    <div className="card-content">
                        <h2 className="card-title">Greek salad <span className="card-price">$12.99</span></h2>
                        <p className="card-description">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button className="order-button-specials">Order Now</button>
                    </div>
                </div>
                <div className="card-specials">
                    <img src={bruchetta} alt="Bruchetta" className="card-image-specials" />
                    <div className="card-content">
                        <h2 className="card-title">Bruchetta <span className="card-price">$5.99</span></h2>
                        <p className="card-description">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="order-button-specials">Order Now</button>
                    </div>
                </div>
                <div className="card-specials">
                    <img src={lemonDessert} alt="Lemon Dessert" className="card-image-specials" />
                    <div className="card-content">
                        <h2 className="card-title">Lemon Dessert <span className="card-price">$4.99</span></h2>
                        <p className="card-description">Our lemon dessert comes from grandma's recipe book, every ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="order-button-specials">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;