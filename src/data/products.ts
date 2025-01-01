export interface Product {
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    discount?: string;
    image: string;
  }
  
  const products: Product[] = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: "/product1.png",
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discount: "",
      image: "/product8.jpg",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/product3.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      discount: "New",
      image: "/product4.jpg",
    },
  ];
  
  export default products;
  