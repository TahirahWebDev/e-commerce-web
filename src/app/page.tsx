import React from "react";
import Home from "./home/page";
import products from "../data/products";

export default function Main() {
  return (
    <div>
      {/* Pass products directly to Home */}
      <Home products={products} />
    </div>
  );
}
