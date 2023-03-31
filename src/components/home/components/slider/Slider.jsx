import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../../context/CustomHookContext";
import Carousel from "react-elastic-carousel";

export default function Slider(props) {
  const [state] = useProductContext();
  const [products, setProducts] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 550,
      itemsToShow: 1,
      itemsToScroll: props.products,
    },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  console.log(breakPoints);
  useEffect(() => {
    const arr = state.products.filter(
      (product) => product.category === "Trending Products"
    );
    setProducts(arr);
  }, []);

  return (
    // <div className="hero">
    //   <div className="glide" id="glide_1" ref={slider1}>
    //     <div className="glide__track" data-glide-el="track">
    //       <ul className="glide__slides">
    //         {products.map((product, index) => (
    //           <li key={index} className="glide__slide">
    //             <div className="hero__center">
    //               <div className="hero__left">
    //                 <span className="">New Inspiration 2020</span>
    //                 <h1 className="">PHONES MADE FOR YOU!</h1>
    //                 <p>Trending from mobile and headphone style collection</p>
    //                 <a href="#">
    //                   <button className="hero__btn">SHOP NOW</button>
    //                 </a>
    //               </div>
    //               <div className="hero__right">
    //                 <div className="hero__img-container">
    //                   <img
    //                     className="banner_01"
    //                     src={product.image}
    //                     alt="banner2"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <div className="glide__bullets" data-glide-el="controls[nav]">
    //       {products.map((product, index) => (
    //         <button
    //           key={index}
    //           className="glide__bullet"
    //           data-glide-dir={"=".concat(index)}
    //         ></button>
    //       ))}
    //     </div>

    //     <div className="glide__arrows" data-glide-el="controls">
    //       <button
    //         className="glide__arrow glide__arrow--left"
    //         data-glide-dir="<"
    //       >
    //         <svg>
    //           <use xlinkHref="../../../../images/sprite.svg#icon-arrow-left2"></use>
    //         </svg>
    //       </button>
    //       <button
    //         className="glide__arrow glide__arrow--right"
    //         data-glide-dir=">"
    //       >
    //         <svg>
    //           <use xlinkHref="../../../../images/sprite.svg#icon-arrow-right2"></use>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="hero ">
        <div className="glide " id="glide_1">
          <div className="glide__track " data-glide-el="track">
            <ul className="glide__slides ">
              <Carousel
                breakPoints={breakPoints}
                isInfinite={true}
                enableAutoPlay={true}
                autoPlaySpeed={8000}
                enableSwipe={true}
                transitionMs={1000}
                disableArrowsOnEnd={false}
                showArrows={true}
                itemsToScroll={1}
                tiltEasing="ease-out"
                tiltAngleX={10}
                tiltAngleY={0}
              >
                {products.map((product, index) => (
                  <li key={index} className="glide__slide height-fix">
                    <div className="hero__center">
                      <div className="hero__left">
                        <span className="">New Inspiration 2020</span>
                        <h1 className="">PHONES MADE FOR YOU!</h1>
                        <p>
                          Trending from mobile and headphone style collection
                        </p>
                        <Link to={`/detail/${product.id}`}>
                          <button className="hero__btn" type="submit">
                            SHOP NOW
                          </button>
                        </Link>
                      </div>
                      <div className="hero__right">
                        <div className="hero__img-container">
                          <Link to={`/detail/${product.id}`}>
                            <img
                              className="banner_01"
                              src={product.image}
                              alt={product.title}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </Carousel>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
