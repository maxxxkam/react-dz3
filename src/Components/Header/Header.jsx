import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const [burger, setBurger] = useState(false);
    const toggleBurger = () => {
        setBurger(!burger);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <h1 className="logo">Digital Agency</h1>
                    <div className={`header__content ${burger ? 'burger-active' : ''}`}>
                        <div className="header__links">
                            <a href="#Brending">Brending</a>
                            <a href="#Building">Building</a>
                            <a href="#Custome">Custome</a>
                            <a href="#Part">Part</a>
                            <Link className="link" to={'/'}>Home</Link>
                            <Link className="link" to={'/About'}>About</Link>
                            <Link className="link" to={'/Testiminals'}>Testiminals</Link> 
                            <Link className="link" to={'/Contacts'}>Contacts</Link>
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
    );
};

export default Header;
