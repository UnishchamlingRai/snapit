"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Categories = ({ categories }: { categories: string[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filterUrl = searchParams.get("category");
  // console.log(filterUrl);
  function handelFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="bg-gray-100 text-gray-500 py-1 my-2">
      <ul className="flex gap-2 justify-between items-center w-11/12 m-auto">
        <li
          className={`cursor-pointer ${
            filterUrl === "All" ? "text-red-600 font-bold" : ""
          }`}
          onClick={() => handelFilter("All")}
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            onClick={() => handelFilter(category)}
            className={`cursor-pointer ${
              filterUrl === category ? "text-red-600 font-bold" : ""
            }`}
            key={index}
          >
            {category}
          </li>
        ))}
        <button className="flex items-end gap-1">
          <span>More</span>
          <IoIosArrowDown size={16} />
        </button>
      </ul>
    </div>
  );
};

export default Categories;
