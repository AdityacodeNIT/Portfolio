import React from "react";
import { services } from "../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <section
      className="services bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20"
      id="services"
    >
      <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
      <p className="text-lg text-center mb-10">
        My <span className="font-semibold">Services</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="container mx-auto px-4"
      >
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
              key={index}
            >
              <span className="block text-sm font-bold text-gray-400 mb-4">
                {name}
              </span>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300 mb-6">{description}</p>

              <a
                href="#pricing"
                className="inline-flex items-center text-blue-500 hover:underline"
              >
                See Pricing <FaArrowRight className="ml-2" />
              </a>

              <img
                src={shapeTwo}
                alt=""
                className="absolute bottom-4 right-4 w-16 opacity-10"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="relative mt-10">
        <img
          src={shapeOne}
          alt=""
          className="absolute right-0 w-20 opacity-20"
        />
      </div>

      <div className="relative mt-10">
        <span className="text-6xl font-bold opacity-5 absolute left-1/2 transform -translate-x-1/2">
          Services
        </span>
      </div>
    </section>
  );
};

export default Services;
