import React from "react";
import HeroSlider from "react-slick";

//Arrow Components
import {PrevArrow,NextArrow} from "./Arrows.component"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel= () => {
  var settings = {
    arrows:true,
    centerMode:true,
    centerPadding:"160px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>
  };
  const images=["https://images.unsplash.com/photo-1639173925921-5d5fd027713c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1594873676631-e7219ce8eac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1592839656073-833413ae8874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1588796460733-82d656bfbc49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"];
  return(
    <>
    <HeroSlider {...settings}>
    {images.map((image)=>(
       <div className="w-20 h-96 px-1 py-2">
        <img src={image} alt="test-img" className="w-full h-full rounded-md" />
       </div>
    ))}
  </HeroSlider>
    </>
  );
};

export default HeroCarousel;
