import React from "react";
import ProductCard from "./ProductCard";

interface ProductProps {
  _id: string;
  name: string;
  price: number;
  units: string;
  imageURL: string;
  category: {
    name: string;
  };
}
const ProductCardList = ({
  products,
  filterUrl,
}: {
  products: ProductProps[];
  filterUrl: string;
}) => {
  console.log(filterUrl);
  let filteredProducts;
  if (filterUrl === "All" || !filterUrl) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.category.name === filterUrl
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4">
        <h3 className="font-bold">Buy Diapers & More Online</h3>
        <div className="flex gap-2 justify-center items-center">
          <h4 className="text-gray-500">Sort By</h4>

          <select className="outline-none text-green-700  border border-gray-400 p-1 rounded-md">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 bg-gray-100 p-4 rounded-md  gap-2 ">
        {filteredProducts.map((product: ProductProps) => {
          return (
            <ProductCard
              key={product._id}
              discount="31%"
              deliveryTime="8 MINS"
              imageUrl={product.imageURL} // Replace with an actual image path
              productName={product.name}
              quantity={`1 pack (${product.units})`}
              price={product.price}
              originalPrice="599"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCardList;
