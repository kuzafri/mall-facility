import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonImg } from "@ionic/react";

const DUMMY_DATA = ["assets/img/event1.jpg", "assets/img/event2.jpg"];

const DUMMY_DATA2 = ["assets/img/event3.jpg", "assets/img/event4a.jpg"];
const SwiperCurrentSeason = () => {
  return (
    <>
      <div className="p-3 pt-8">
        <h3 className="text-black text-lg font-bold">Current season!</h3>
        <Swiper pagination={true} slidesPerView={1.25} spaceBetween={10}>
          {DUMMY_DATA.map((link, index) => (
            <SwiperSlide
              key={`swiper-${index}`}
              className=" !w-[fit] pb-5 pt-3"
            >
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className=" flex flex-row space-x-2">
                  <IonImg src={link} className="relative bg-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-3 pt-8">
        <h3 className="text-black text-lg font-bold">Current season!</h3>
        <Swiper pagination={true} slidesPerView={1.25} spaceBetween={10}>
          {DUMMY_DATA2.map((link, index) => (
            <SwiperSlide
              key={`swiper-${index}`}
              className=" !w-[fit] pb-5 pt-3"
            >
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className=" flex flex-row space-x-2">
                  <IonImg src={link} className="relative bg-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCurrentSeason;
