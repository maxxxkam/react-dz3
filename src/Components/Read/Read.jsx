import React from 'react'
import './Read.scss'
const Read = () => {
  return (
    <>
    <section className="read">
        <div className="container">
            <div className="read__wrapper">
                <p>TESTIMONIALS</p>
                <h1>Read What Other have to Say</h1>

                <div className="read__wrap">
                    <div className="read__card">
                       <div className="read__images">
                         <img src="/read-img1.png" alt="" />
                       </div>
                        <h3>Andrew Rathore</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                    <div className="read__card">
                       <div className="read__images">
                         <img src="/read-img2.png" alt="" />
                       </div>
                        <h3>Vera Duncan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>
                    <div className="read__card">
                       <div className="read__images">
                         <img src="/read-img3.png" alt="" />
                       </div>
                        <h3>Mark Smith</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                    </div>


                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Read