import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BrowseRange from "../components/BrowseRange";
import OurProducts from "../components/OurProducts";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
}

const Home = async () => {
  // Use a relative URL instead of localhost to make sure it works in server-side rendering
  const res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <div>
      <Navbar />
      <Banner />
      <BrowseRange />
      <OurProducts
        showHeading={true}
        showButton={true}
        products={products} // Pass the products here
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
