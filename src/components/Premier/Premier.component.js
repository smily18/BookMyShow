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
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg",
      alt: "Premier Image",
      title: "Dune",
      subtitle: "English",

    }
  ];

  return (
      <>
        <div className="flex flex-col items-start gap-1 py-4">
          <h3 className="text-black text-xl font-bold">Premieres</h3>
          <p className="text-black text-sm">Brand New releases every friday</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 my-3">Popular Movies</h1>
          <Slider {...settings} >
          {PremierImages.map((image)=> (
            <div className="pr-6">
              <Poster {...image} isDark/>
            </div>
          ))}
          </Slider>
        </div>
      </>
  );
};

export default Premier;
