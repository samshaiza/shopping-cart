import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="rounded-2xl w-72 h-80 m-24 flex flex-col justify-center items-center text-center transition duration-200 cursor-pointer hover:ease-in">
      <img className="h-96 w-auto align-middle " src={productImage} />
      <div className="text-center">
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-transparent border-solid border-2 border-gray-900 min-w-100 mt-1 pl-3 pr-3 pt-1 pb-1 rounded-2xl transition duration-200 cursor-pointer hover:bg-slate-900 hover:text-white"
        >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
