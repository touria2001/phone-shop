import axios from "axios";
import React, { useState, useEffect } from "react";
import { GET_CART, GET_PRODUCTS } from "../../context/actions";
import { useProductContext } from "../../context/CustomHookContext";
import Cart from "./components/cart/Cart";
import Collection from "./components/collection/Collection";
import Contact from "./components/contact/Contact";
import DetailProduct from "./components/detail/DetailProduct";
import ListProducts from "./components/ListProducts";
import PhoneNews from "./components/phoneNews/PhoneNews";
import Reviews from "./components/reviews/Reviews";
import Slider from "./components/slider/Slider";

const API_URL = " http://localhost:3000";

export default function Home() {
  const [state, dispatch] = useProductContext();

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${API_URL}/products`)
        .then((data) => dispatch({ type: GET_PRODUCTS, payload: data.data }))
        .catch((error) => console.log(error));
    };
    getProducts();
    const getCart = () => {
      axios
        .get(`${API_URL}/cart`)
        .then((data) => dispatch({ type: GET_CART, payload: data.data }))
        .catch((error) => console.log(error));
    };
    getCart();
  }, []);

  if (state.products.length === 0) return <></>;

  return (
    <div>
      <Slider
        products={
          state.products.filter(
            (product) => product.category === "Trending Products"
          ).length
        }
      />
      <Collection />
      <ListProducts />
      <Reviews />
      <PhoneNews />
      <Contact />
    </div>
  );
}
