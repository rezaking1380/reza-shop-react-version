// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function SliderCart({ title, products }) {
  const dispatch = useDispatch();
  const handelid = (e, id, img, title, price) => {
    e.preventDefault();
    dispatch({ type: "inc" });
    dispatch({
      type: "Add_product_id",
      id: id,
      image: img,
      title: title,
      price: price,
    });
  };

  return (
    <>
      {/* {!products ? (
        <p>loding...</p>
      ) : ( */}
      <>
        <div className="max-w-7xl mx-auto">
          <div className=" flex p-5 justify-between">
            <div className=" font-bold text-2xl">
              <span>{title}</span>
            </div>
            <Link to={`productlist/${title}`}>
              <div className="flex items-center">
                <div className="mr-3 text-xl">
                  <p href="#"> more </p>
                </div>
                <div>
                  <FaAngleRight className="text-xl" />
                </div>
              </div>
            </Link>
          </div>
          <div className="h-[450px] m-5">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                425: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

                640: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              // slidesPerView={
              //   3
              // }
              draggable={true}
              spaceBetween={10}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination]}
              className="mySwiper parentslidercart"
            >
              {products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="flex items-start p-2 rounded-lg
                    border-solid bg-white border-2 border-gray-200 "
                >
                  <div className="w-full">
                    <Link to={`product/${product.id}`} className="w-full">
                      <div className="mb-3 flex justify-center h-56 hover:opacity-75">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="rounded-lg object-contain"
                        />
                      </div>
                    </Link>
                    <div>
                      <div className="mb-3 flex flex-col h-[100px]">
                        <span>{product.title}</span>
                      </div>

                      <div className="flex justify-around items-center">
                        <button
                          onClick={(e) =>
                            handelid(
                              e,
                              product.id,
                              product.image,
                              product.title,
                              product.price,
                            )
                          }
                          className="bg-amber-400 rounded-lg py-2 px-4"
                        >
                          <span className="font-semibold">Add to bag</span>
                        </button>
                        <div className="text-2xl">
                          <span className="font-semibold">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
}
