import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/CustomHookContext";


export default function ListProducts() {

  const [state] = useProductContext();
  
  return (
    <>
        
    <section className="section latest__products" id="latest">
      <div className="title__container">
        <div className="section__title active" data-id="Latest Products">
          <span className="dot"></span>
          <h1 className="primary__title">Latest Products</h1>
        </div>
      </div>
      <div className="container">
        <div className="glide" id="glide_2">
          <div className="glide__track">
            <ul className="glide__slides latest-center products-container">
              {state.products.map((product, index) => (
                <li className="glide__slide" key={index}>
                  <div className="product">
                    <div className="product__header">
                      <img src={product.image} alt="product" />
                    </div>
                    <div className="product__footer">
                      <h3>{product.title}</h3>

                      <div className="product__price">
                        <h4>${product.price}</h4>
                      </div>

                      <Link to={`/detail/${product.id}`}>
                        <button className="product__btn">Add To Cart</button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>    
    
    
    </>
  );
}
