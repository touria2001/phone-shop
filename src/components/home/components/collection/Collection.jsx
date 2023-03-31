import React from "react";

export default function Collection() {
  return (
    <div className="container">
      <section id="collection" className="section collection ">
        <div
          className="collection__container"
         
        >
          <div className="collection__box">
            <div className="img__container">
              <img
                className="collection_02"
                src={`${process.env.PUBLIC_URL}/images/collection_02.png`}
                alt=""
              />
            </div>

            <div className="collection__content">
              <div className="collection__data">
                <span>New Colors Introduced</span>

                <h1>HEADPHONES</h1>

                <a href="#shop">SHOP NOW</a>
              </div>
            </div>
          </div>

          <div className="collection__box">
            <div className="img__container">
              <img
                className="collection_01"
                src={`${process.env.PUBLIC_URL}/images/collection_01.png`}
                alt=""
              />
            </div>

            <div className="collection__content">
              <div className="collection__data">
                <span>Phone Device Presets</span>
                <h1>SMARTPHONES</h1> <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
