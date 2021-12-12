import React from "react";
import Navbar from "../components/Navbar/navbar.component.js";
import HeroCarousel from "../components/HeroCarousel/Herocarousel.component.js";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
