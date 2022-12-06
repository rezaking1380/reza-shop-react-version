import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Slider() {
  const [sliders, setsliders] = useState();

  const fetcher = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=9");
    const data = await response.json();
    setsliders(data);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <>
      {!sliders ? (
        <Loading />
      ) : (
        <div className="mx-auto bg-white h-80 max-w-7xl">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper bg-white"
          >
            {sliders.map((slider) => (
              <SwiperSlide key={slider.id}>
                <Link to={`product/${slider.id}`} className="">
                  <div className="flex bg-white p-5 h-[100%] w-[100%] items-center justify-around">
                    <div className="flex max-h-full w-[100%]">
                      <div className="flex mr-12 flex-col justify-center w-[50%]">
                        <h2 className="sm:text-4xl mb-3">{slider.category}</h2>
                        <h3 className="sm:text-3xl">{slider.title}</h3>
                      </div>
                      <div className="w-[50%] flex justify-center">
                        <img src={slider.image} alt="" className=" max-h-80" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
