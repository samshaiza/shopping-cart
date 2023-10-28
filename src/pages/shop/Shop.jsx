import React, { useContext, useEffect } from "react";

import { Product } from "./Product";
import { ShopContext } from "../../context/ShopContext";
export default function Shop() {
  const { productData } = useContext(ShopContext);

  return (
    <div>
      <div className="mt-20 text-center text-4xl"></div>
      <div className="w-full h-auto grid grid-cols-3 place-items-center">
        {productData.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}

/*
<div className="w-full h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
*/
