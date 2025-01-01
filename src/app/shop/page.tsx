import React from "react";
import ShopHeader from "../components/ShopHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import OurProducts from "../components/OurProducts";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import FeatureBar from "../components/FeatureBar";

// Sample products (replace this with real data or API call)
const products = [
  { name: "Product 1", description: "Description 1", price: "100", image: "/product1.jpg" },
  { name: "Product 2", description: "Description 2", price: "150", image: "/product2.jpg" },
  { name: "Product 3", description: "Description 3", price: "200", image: "/product3.jpg" },
  { name: "Product 4", description: "Description 4", price: "250", image: "/product4.jpg" },
];

const Shop = () => {
  return (
    <div>
      <Navbar />
      <ShopHeader title="Shop" breadcrumb="Shop" />
      <FilterBar />

      {/* First OurProducts Component with products */}
      <OurProducts
        products={products} // Pass the products prop
        showHeading={true}
        showButton={true}
      />

      {/* Second OurProducts Component with different products or settings (if needed) */}
      <OurProducts
        products={products} // Same products or different set
        showHeading={false}
        showButton={false}
      />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">3</PaginationLink>
          </PaginationItem>
          <PaginationNext href="/" />
        </PaginationContent>
      </Pagination>

      <FeatureBar />
      <Footer />
    </div>
  );
};

export default Shop;
