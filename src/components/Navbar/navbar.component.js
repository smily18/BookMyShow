import React from "react";
import {BiChevronRight} from "react-icons/bi";
import {IoIosSearch} from "react-icons/io";

const NavSm = () => {
  return(
    <>
      <div className="bg-gray-700 flex justify-between">
        <div className="mx-3.5 p-1.5">
          <h3 className="text-white text-2xl font-bold">It All Starts Here!</h3>
          <span className="flex items-center text-gray-300 text-xs p-1">
          Tirupur <BiChevronRight />
          </span>
        </div>
        <div className="flex items-center mx-3.5">
          <button className="rounded-lg p-2 m-2 bg-red-500 text-white text-xs font-semibold">Use App</button>
          <span className="text-white text-xl"><IoIosSearch /></span>
        </div>
      </div>
    </>
  );
};

const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
  return(
    <>
    <nav>
      <div className="md:hidden">{/*Mobile Screen*/}
        <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}</div>
      <div className="hidden lg:flex">{/*Large Screen*/}</div>
    </nav>
    </>
  );
};

export default Navbar;
