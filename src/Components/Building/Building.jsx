import React from 'react'
import './Building.scss'

const Building = () => {
  return (
    <>
    <section className="building">
        <div className="container">
            <div className="building__wrapper" id='Building'>
                <div className="building__card">
                    <h1>Building digital products, brands & experience</h1>
                    <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                    <button className="basic-btn">CONTACT US</button>

                </div>

                <div className="building__card">
                    <img src="/BUILDING-IMG1.png" alt="" />

                </div>
            </div>

            <div className="building__wrapper-2" >
                <p>Trusted by 4,000+ companies</p>
                <div className="building__wrap">
                    <img src="/spotify-img.png" alt="" />
                    <img src="/slack-img.png" alt="" />
                    <img src="/dropbox-img.png" alt="" />
                    <img src="/zoom-img.png" alt="" />
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Building