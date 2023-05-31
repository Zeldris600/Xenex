import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../features/api";

import React from "react";

const PayButton = ({ cartItems }) => {


  /* cart = [
    { id: 1, quantity: 12 },
    { id: 2, quantity: 12 }
  ] */

  const user = useSelector((state) => state.auth);
  const handleCheckout = () => {
    //    console.log(cartItems)
    axios.post(`${url}/stripe/create-checkout-session`, {
      cartItems,
      userId: user._id
    }).then((res) => {
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch((err) => {
        console.log(err.message);
    });
  };

  return (
    <button
      className="bg-blue-500 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full rounded-md"
      onClick={() => handleCheckout()}
    >
      Checkout
    </button>
  );
};

export default PayButton;
