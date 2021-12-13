import React from "react";
import {BiChevronRight} from "react-icons/bi";
import {IoIosSearch} from "react-icons/io";

const NavSm = () => {
  return(
    <>
      <div className="flex justify-between">
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
/* Ref Code
<>
  <div className="text-white flex items-center justify-between">
    <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-400 text-xs flex items-center">
         Bhubaneswar
      <BiChevronRight />
      </span>
    </div>
    <div className="w-8 h-8">
      <BiSearch className="w-full h-full" />
    </div>
  </div>
</>
*/

const NavMd = () => {
  return (
    <>
        <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
          <IoIosSearch />
          <input
            type="search"
            className="w-full "
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="w-1/2">
          <div>
            <img src="../public/favicon.ico"alt="Icon "/>
          </div>
          <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
            <IoIosSearch />
            <input
              type="search"
              className="w-full"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div>
          <button className="rounded-lg px-5 py-2 m-2 bg-red-500 text-white text-md font-semibold">Sign In</button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return(
    <>
    <nav className="bg-gray-800 px-2 py-4">
      <div className="md:hidden">{/*Mobile Screen*/}
        <NavSm />
      </div>
      <div className="hidden md:flex lg:hidden">{/*Tablet Screen*/}
        <NavMd />
      </div>
      <div className="hidden lg:flex">{/*Large Screen*/}
        <NavLg />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
