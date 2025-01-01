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

const Home = ({ products }: { products: Product[] }) => {
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
