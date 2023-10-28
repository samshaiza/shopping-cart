import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/ShopContext";

export const Navbar = () => {
  const { getTotalItemCount } = useContext(ShopContext);
  const itemCount = getTotalItemCount();
  return (
    <div className="w-full h-20 bg-slate-900">
      <div className="flex items-center">
        <h1 className="text-white ">da shop</h1>
      </div>
      <div className="flex justify-end items-center">
        <div className="mr-12 flex items-center">
          <Link
            className="text-white ml-5 text-2xl transition duration-200 hover:scale-110"
            to="/"
          >
            Shop
          </Link>
          <Link
            className="flex text-white ml-5 text-2xl duration-200 hover:scale-110"
            to="/cart"
          >
            <ShoppingCart size={32} />
            {itemCount > 0 && <h2 className="mr-2">{itemCount}</h2>}
          </Link>
        </div>
      </div>
    </div>
  );
};
