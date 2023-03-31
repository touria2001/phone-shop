import React, { useEffect, useState } from "react";
import { useProductContext } from "../../context/CustomHookContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState({
    auth: false,
    research: false,
    cart: false,
  });
  const [state] = useProductContext();
  
  const [total, setTotal] = useState(0);

  const showCart = () => {
    setIsActive({ ...isActive, cart: !isActive.cart });
  };
  const showAuth = () => {
    
    setIsActive({ ...isActive, auth: !isActive.auth });
  };
  const showResearch = () => {
    
    setIsActive({ ...isActive, research: !isActive.research });
  };

  useEffect(() => {
     let totalPrice = state.cart.reduce(
      (accumulator, item) => accumulator + 1,
      0
    );
    setTotal(totalPrice);
  }, []);
  return (
    <header id="header" className="header">
      <div className="navigation">
        <div className="container">
          <nav className="nav">
            <div className="nav__hamburger">
              <svg>
                <use xlinkHref="../../images/sprite.svg#icon-menu"></use>
              </svg>
            </div>

            <div className="nav__logo">
              <a href="/" className="scroll-link">
                PHONE
              </a>
            </div>

            <div className="nav__menu">
              <div className="menu__top">
                <span className="nav__category">PHONE</span>
                <a href="#" className="close__toggle">
                  <svg>
                    <use xlinkHref="../../images/sprite.svg#icon-cross"></use>
                  </svg>
                </a>
              </div>
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#header" className="nav__link scroll-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#category" className="nav__link scroll-link">
                    Category
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#news" className="nav__link scroll-link">
                    Blog
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link scroll-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <a
                href="#"
                className="icon__item"
                id="login-btn"
                onClick={showAuth}
              >
                <svg className="icon__user">
                  <use xlinkHref="../../images/sprite.svg#icon-user"></use>
                </svg>
              </a>

              <a
                href="#"
                className="icon__item"
                id="search-btn"
                onClick={showResearch}
              >
                <svg className="icon__search">
                  <use xlinkHref="../../images/sprite.svg#icon-search"></use>
                </svg>
              </a>

              <a
                href="#"
                className="icon__item"
                id="cart-btn"
                onClick={showCart}
              >
                <svg className="icon__cart">
                  <use xlinkHref="../../images/sprite.svg#icon-shopping-basket"></use>
                </svg>
                <span id="cart__total">{total}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className= "auth active" >
        <form action="" className="login-form">
          <h3>Login Now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            forget your password <a href="#">Click Here</a>
          </p>
          <p>
            don't have an account <a href="#">Create now</a>
          </p>
          <input type="submit" value="Login now" className="btn" />
        </form>
      </div>
      <div className="searchF active">
        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="Search here.." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>

      <div className={isActive.cart ? "shopping-cart active" : "shopping-cart"} onClick={showCart}>
        {state.cart.map((item, index) => {
          return (
            <div className="box" key={index}>
              <i className="fas fa-trash"></i>
              <img src={item.image} alt=""/>
              <div className="content">
                <h3>{item.title}</h3>
                <span className="price">${item.price}</span>
                <span className="quantity">qty : {item.quantity}</span>
              </div>
            </div>
          );
        })}
       
      </div>
    </header>
  );
}
