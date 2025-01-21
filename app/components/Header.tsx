// components/Header.tsx
import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

import { FaArrowDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

type HeaderProps = {
  cartTotalPrice: number;
  cartTotalNumber: number;
};

const Header: React.FC<HeaderProps> = ({ cartTotalPrice, cartTotalNumber }) => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-red-600">
            snap<span className="text-black">it</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link className="hidden md:block" href="/app-download">
            <Button>SAVE MORE ON APP</Button>
          </Link>
          <Link className="hidden md:block" href="/help">
            <Button> HELP AND SUPPORT</Button>
          </Link>
          <Link className="hidden md:block" href="/language">
            <Button> भाषा परिवर्तन</Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Button>
          <span>Category</span>
          <FaArrowDown className="text-center" size={10} />
        </Button>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Delivery in 10 minutes</h3>
          <p className="text-xs text-gray-400">
            Ward number-17, Thamel, Kathmandu
          </p>
        </div>

        <div className="relative w-2/4">
          <FiSearch className="absolute top-3 left-3 text-gray-900" size={18} />
          <input
            type="text"
            placeholder={`Search for "bread"`}
            className="w-full pl-10 px-4 py-2 border rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <button className="text-gray-500">Login</button>

        <Button>
          <IoCartOutline className="text-center" size={24} />
          <div className="flex flex-col text-xs">
            <span>{cartTotalNumber} Item</span>
            <span>Rs.{cartTotalPrice}</span>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
