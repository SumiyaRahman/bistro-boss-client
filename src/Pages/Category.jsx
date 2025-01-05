import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionTitle from "../Components/SectionTitle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section>
      <SectionTitle 
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}>
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
