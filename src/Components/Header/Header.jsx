import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [burger, setBurger] = useState(false);
    const toggleBurger = () => {
        setBurger(!burger);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                    <h1 className="logo">Digital Agency</h1>
                    <div className={`header__content ${burger ? 'burger-active' : ''}`}>
                        <div className="header__links">
                            <a href="#">home</a>
                            <a href="#">about</a>
                            <a href="#">testimonials</a>
                            <a href="#">contact</a>
                        </div>
                       
                    </div>
                    <img 
                            onClick={toggleBurger} 
                            className={`burger ${burger ? 'open' : ''}`} 
                            src="https://cdn-icons-png.flaticon.com/512/17213/17213363.png" 
                            alt="Menu" 
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
