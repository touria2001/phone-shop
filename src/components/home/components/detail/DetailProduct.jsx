import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ADD_TO_CART } from "../../../../context/actions";
import { useProductContext } from "../../../../context/CustomHookContext";

const API_URL = " http://localhost:3000";

export default function DetailProduct() {
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [state, dispatch] = useProductContext();

  const navigate = useNavigate();

  const addToCart = (product) => {
    const addToCartToServer = () => {
      axios
        .post(`${API_URL}/cart`, { ...product, quantity: 1 })
        .then((res) =>
          dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: 1 } })
        );
    };

   if (!state.cart.some((p) => p.id === product.id)) {
      addToCartToServer();
   }

    navigate("/cart");
  };

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${API_URL}/products/${params.id}`)
        .then((data) => setProduct(data.data))
        .catch((error) => console.log(error));
    };
    getProducts();
  }, []);

  if (product === null) return;
  return (
    <main id="main">
      <div className="container">
        <section className="section product-details__section">
          <div className="product-detail__container">
            <div className="product-detail__left">
              <div className="details__container--left">
                
                <div className="product__picture" id="product__picture">
                  <div className="picture__container">
                    <img src={`../${product.image}`} id="pic" />
                  </div>
                </div>
                <div className="zoom" id="zoom"></div>
              </div>

              <div
                className="product-details__btn"
                onClick={() => addToCart(product)}
              >
                <a className="add" href="#">
                  <span>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-cart-plus"></use>
                    </svg>
                  </span>
                  ADD TO CART
                </a>
                <a className="buy" href="#">
                  <span>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-credit-card"></use>
                    </svg>
                  </span>
                  BUY NOW
                </a>
              </div>
            </div>

            <div className="product-detail__right">
              <div className="product-detail__content">
                <h3>{product.title}</h3>
                <div className="price">
                  <span className="new__price">${product.price}</span>
                </div>
                <div className="product__review">
                  <div className="rating">
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-star-full"></use>
                    </svg>
                    <svg>
                      <use xlinkHref="../images/sprite.svg#icon-star-empty"></use>
                    </svg>
                  </div>
                  <a href="#" className="rating__quatity">
                    3 reviews
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  a doloribus iste natus et facere? dolor sit amet consectetur
                  adipisicing elit. Sunt a doloribus iste natus et facere?
                </p>
                <div className="product__info-container">
                  <ul className="product__info">
                    <li className="select">
                      <div className="select__option">
                        <label htmlFor="colors">Color</label>
                        <select
                          name="colors"
                          id="colors"
                          className="select-box"
                        >
                          <option value="blue">blue</option>
                          <option value="red">red</option>
                        </select>
                      </div>
                      <div className="select__option">
                        <label htmlFor="size">Inches</label>
                        <select name="size" id="size" className="select-box">
                          <option value="6.65">6.65</option>
                          <option value="7.50">7.50</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="input-counter">
                        <span>Quantity:</span>
                        <div>
                          <span className="minus-btn">
                            <svg>
                              <use xlinkHref="../images/sprite.svg#icon-minus"></use>
                            </svg>
                          </span>
                          <input
                            type="text"
                            min="1"
                            value="1"
                            max="10"
                            className="counter-btn"
                            readOnly={true}
                          />
                          <span className="plus-btn">
                            <svg>
                              <use xlinkHref="../images/sprite.svg#icon-plus"></use>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <span>Subtotal:</span>
                      <a href="#" className="new__price">
                        $250.99
                      </a>
                    </li>
                    <li>
                      <span>Brand:</span>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <span>Product Type:</span>
                      <a href="#">Phone</a>
                    </li>
                    <li>
                      <span>Availability:</span>
                      <a href="#" className="in-stock">
                        In Stock (7 Items)
                      </a>
                    </li>
                  </ul>
                  <div className="product-info__btn">
                    <a href="#">
                      <span>
                        <svg>
                          <use xlinkHref="../images/sprite.svg#icon-crop"></use>
                        </svg>
                      </span>
                      &nbsp; SIZE GUIDE
                    </a>
                    <a href="#">
                      <span>
                        <svg>
                          <use xlinkHref="../images/sprite.svg#icon-truck"></use>
                        </svg>
                      </span>
                      &nbsp; SHIPPING
                    </a>
                    <a href="#">
                      <span>
                        <svg>
                          <use xlinkHref="../images/sprite.svg#icon-envelope-o"></use>
                        </svg>
                        &nbsp;
                      </span>
                      ASK ABOUT THIS PRODUCT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </section>
      </div>
    </main>
  );
}
