import React from 'react'
import './Part.scss'

const Part = () => {
  return (
    <>
    <section className="part">
        <div className="container">
            <div className="part__wrapper" id='Part'>
                <div className="part__card">
                    <img src="/Part-img.png" alt="" />
                </div>
                <div className="part__card">
                    <h1>Be a part of the next big thing</h1>
                    <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                    <button className="basic-btn">CONACT US</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Part