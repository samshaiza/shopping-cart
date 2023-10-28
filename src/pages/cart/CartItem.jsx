import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="w-700 h-64 flex items-center shadow-md rounded-3xl">
      <img
        src={productImage}
        alt={productName}
        className="mr-3 h-56 w-auto align-middle"
      />
      <div className="w-full text-2xl">
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
        <div>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            className="w-10 text-center font-extrabold"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
