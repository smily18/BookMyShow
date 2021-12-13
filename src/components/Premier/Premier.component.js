import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premier = () => {
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",
      isDark: false
    }
  ];

  return (
      <>
        <Slider {...settings} >
        {PremierImages.map((image)=> (
          <Poster {...image} />
        ))}
        </Slider>
      </>
  );
};

export default Premier;
