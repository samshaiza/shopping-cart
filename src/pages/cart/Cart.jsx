import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, getTotalCartAmount, productData } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="font-bold text-4xl my-10">Your cart items...</h1>
      </div>
      <div className="">
        {productData.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p>Subtotal: ${totalAmount}</p>
          <div className="flex">
            <button
              className="w-36 h-16 bg-slate-900 text-white border-none shadow-md rounded-lg m-3 cursor-pointer transition duration-200 hover:bg-white hover:text-black"
              onClick={() => navigate("/")}
            >
              Continue Shopping...
            </button>
            <button className="w-36 h-12 bg-slate-900 text-white border-none shadow-md rounded-lg m-3 cursor-pointer transition duration-200 hover:bg-white hover:text-black">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1>Your cart is empty...</h1>
      )}
    </div>
  );
}
