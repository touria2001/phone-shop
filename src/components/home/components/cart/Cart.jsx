import React, { useState, useEffect } from "react";
import { GET_CART, SET_QUANTITY, DELETE } from "../../../../context/actions";
import { useProductContext } from "../../../../context/CustomHookContext";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = " http://localhost:3000/cart";

export default function Cart() {
  const [state, dispatch] = useProductContext();
  const [total, setTotal] = useState(0);
  const [addShipping, setAddShipping] = useState(false);
  

  useEffect(() => {    
    const getCart = () => {
      axios
        .get(`${API_URL}`)
        .then((data) => dispatch({ type: GET_CART, payload: data.data }))
        .catch((error) => console.log(error));
    };
    getCart();

    let totalPrice = state.cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );

    setTotal(totalPrice);
  }, []);

  useEffect(() => {
    setTotal(total + 7);
  }, [addShipping]);

  const minusQuantity = (item) => {
    minusPlus(item, true);
  };
  const plusQuantity = (item) => {
    minusPlus(item, false);
  };

  const minusPlus = (item, minusBool) => {
    let quantity = 0;
    if (minusBool === true) {
      if (item.quantity === 1) return;
      quantity = item.quantity - 1;
    } else {
      quantity = item.quantity + 1;
    }

    const setQuantityOnServer = () => {
      axios
        .put(`${API_URL}/${item.id}`,  { ...item, quantity: quantity })
        .then((res) =>
          dispatch({
            type: SET_QUANTITY,
            payload: { ...item, quantity: quantity },
          })
        );
    };
    setQuantityOnServer();
  };

  const deleteCardItem = (id) => {
    axios.delete(API_URL + "/" + id).then((res) =>
      dispatch({
        type: DELETE,
        payload: { id: id },
      })
    );
  };

  if (state.cart.length === 0) return <><div className="no-item">No Item yet!</div></>;
  return (
    <section className="section cart__area">
      <div className="container">
        <div className="responsive__cart-area">
          <div className="cart__form">
            <div className="cart__table table-responsive">
              <table width="100%" className="table">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>NAME</th>
                    <th>UNIT PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cart.map((cart, index) => (
                    <tr key={index}>
                      <td className="product__thumbnail">
                        <a href="#">
                          <img src={cart.image} alt="" />
                        </a>
                      </td>
                      <td className="product__name">
                        <a href="#">{cart.title}</a>
                        <br />
                        <br />
                        <small>White/6.25</small>
                      </td>
                      <td className="product__price">
                        <div className="price">
                          <span className="new__price">${cart.price}</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="input-counter">
                          <div>
                            <span
                              className="minus-btn"
                              onClick={() => minusQuantity(cart)}
                            >
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-minus"></use>
                              </svg>
                            </span>
                            <input
                              type="text"
                              value={cart.quantity}
                              className="counter-btn"
                              readOnly={true}
                            />
                            <span
                              className="plus-btn"
                              onClick={() => plusQuantity(cart)}
                            >
                              <svg>
                                <use xlinkHref="./images/sprite.svg#icon-plus"></use>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="product__subtotal">
                        <div className="price">
                          <span className="new__price">
                            ${cart.price * cart.quantity}
                          </span>
                        </div>
                        <a
                          href="#"
                          className="remove__cart-item"
                          onClick={() => deleteCardItem(cart.id)}
                        >
                          <svg>
                            <use xlinkHref="./images/sprite.svg#icon-trash"></use>
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-btns">
              <div className="continue__shopping">
                <Link to="/">Continue Shopping</Link>
              </div>
              <div className="check__shipping">
                <input
                  type="checkbox"
                  onChange={() => {
                    setAddShipping(!addShipping);
                  }}
                  checked={addShipping}
                />
                <span>Shipping(+7$)</span>
              </div>
            </div>

            <div className="cart__totals">
              <h3>Cart Totals</h3>
              <ul>
                <li>
                  Subtotal
                  <span className="new__price">${total}</span>
                </li>
                <li>
                  Shipping
                  <span>${addShipping ? 7 : 0}</span>
                </li>
                <li>
                  Total
                  <span className="new__price">${total}</span>
                </li>
              </ul>
              <a href="">PROCEED TO CHECKOUT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
