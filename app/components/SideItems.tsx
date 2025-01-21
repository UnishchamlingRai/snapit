import React from "react";

import { CiTrophy } from "react-icons/ci";
const items = [
  {
    id: 1,
    name: "Electronics",
    url: "/",
  },
  {
    id: 2,
    name: "Clothing",
    url: "/clothing",
  },
  {
    id: 3,
    name: "Electronics",
    url: "/electronics",
  },
  {
    id: 4,
    name: "Furniture",
    url: "/furniture",
  },
];
const SideItems = () => {
  return (
    <div className="flex flex-col gap-1 px-2">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center gap-2 p-2 bg-gray-400 rounded-xl"
          >
            <div className="bg-gray-200 rounded-full p-2">
              <CiTrophy size={24} />
            </div>
            <span className="text-white">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SideItems;
