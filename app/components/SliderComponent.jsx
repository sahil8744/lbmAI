"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import CommonBtn from "./CommonBtn";


const slidesData = [
  {
    img: "/home_page/slider_01.png",
    title: "Powering Food Delivery with Innovation",
    text:
      "A feature-rich food delivery app with easy ordering, real-time tracking, and secure payments to enhance customer experience and sales.",
    percentage1: "80%",
    // label1: "Benefits",
    label01: "User Growth",
    percentage2: "65%",
    label2: "Revenue Boost",
  },
  {
    img: "/home_page/slider_02.png",
    title: "E-Commerce Platform with Multi-Vendor Solutions",
    text:
      "A dynamic online marketplace integrated with multiple vendors, smooth transactions, and inventory management to boost customer satisfaction.",
      // label1: "Benefits",
      percentage1: "70%",
    label01: "Vendor Participation ",
    percentage2: "55%",
    label2: "Sales Increase ",
  },
  {
    img: "/home_page/slider_03.png",
    title: "MNTC Coin for Digital Transactions",
    text:
      "MNTC Coin, a secure cryptocurrency, is designed to enhance digital payment systems and drive widespread adoption in the evolving financial landscape.",
      // label1: "Benefits",
    percentage1: "85%",
    label01: "Adoption Rate ",
    percentage2: "50%",
    label2: " Transaction Speed",
  },
 
];


const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="container-fluid lg:px-0">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className=" col-md-6 col-lg-5 text-content">
          <div className="row">
            <div className="col-md-4 d-none d-lg-block">


            </div>
            <div className="col-sm-8  col-md-12 col-lg-8 px-lg-0 mx-auto">
             
              <div className="">
                <h2 className="H2_homepage">{slidesData[activeIndex].title}</h2>
                <p className="mt-3 lh-base">{slidesData[activeIndex].text}</p>
                <div className="row align-items-end mt-lg-5">
                  <div className="col-5">
                    <p className="">{slidesData[activeIndex].label1}</p>
                    <p className="text-black fs_39">
                      {slidesData[activeIndex].percentage1}
                    </p>
                    <p>{slidesData[activeIndex].label01}</p>
                  </div>
                  <div className="col-5">
                    <p className="fs_39 text-black">
                      {slidesData[activeIndex].percentage2}
                    </p>
                    <p>{slidesData[activeIndex].label2}</p>
                  </div>
                </div>


                <CommonBtn
                  btn_name="View Case Study"
                  path="/"
                  commonbtn="btn_cls rounded-0 fw-normal mt-lg-5"
                  img_cls="d-none"
                  add_cls="d-none"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Right - Swiper Slider */}
        <div className="col-sm-8 col-md-6 col-lg-7 mx-auto mt-4 mt-lg-0">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 6,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="swiper swiper_slider"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg img-fluid"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};


export default SliderComponent;