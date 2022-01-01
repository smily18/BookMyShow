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
    slidesToScroll: 1
  };
  const images=["https://in.bmscdn.com/promotions/cms/creatives/1640963738038_shadow.jpg",
  "https://in.bmscdn.com/promotions/cms/creatives/1640756827751_1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"];
  return(
    <>
    <HeroSlider {...settings}>
    {images.map((image)=>(
       <div className="w-full h-80 px-1 py-2">
        <img src={image} alt="test-img" className="w-full h-full rounded-md" />
       </div>
    ))}
    </HeroSlider>
    </>
  );
};

export default HeroCarousel;
