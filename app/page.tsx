import React from "react";
import SideItems from "./components/SideItems";

import ProductCardList from "./components/ProductCardList";
import AppDownloadCard from "./components/AppDownloadCard";
import Categories from "./components/Categories";
import { getAllProducts } from "./services/ProductService";

interface Product {
  category: { name: string };
}

const Page = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const params = await searchParams;
  const filterUrl = params.category;

  const products = await getAllProducts();
  const categories = products.products.map(
    (product: Product) => product.category.name
  );
  // console.log(categories);
  const uniqueCategories: string[] = Array.from(new Set(categories));
  // console.log(uniqueCategories);

  return (
    <>
      <Categories categories={uniqueCategories} />
      <div className="grid grid-cols-[auto_1fr_18%] relative">
        <SideItems />
        <ProductCardList products={products.products} filterUrl={filterUrl} />
        <AppDownloadCard />
      </div>
    </>
  );
};

export default Page;
