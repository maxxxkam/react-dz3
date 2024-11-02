import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <h1 className="logo">Digital Agency</h1>
               <div className="header__a">
               <a href="">home</a>
                <a href="">about</a>
                <a href="">testimonials</a>
                <a href="">contact</a>
               </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header