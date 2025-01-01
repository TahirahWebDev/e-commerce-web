import React from "react";
import Home from "./home/page";
import products from "../data/products";

interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
}

export default function Main() {
  return (
    <div>
      {/* Pass products directly to Home */}
      <Home products={products} />
    </div>
  );
}
