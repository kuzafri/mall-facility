import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSeason = () => {
  return (
    <>
      <div className="p-3 pt-8">
        <h3 className="text-black text-lg font-bold">Upcoming season!</h3>
        <Swiper pagination={true} slidesPerView={1.25} spaceBetween={10}>
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={`cafe-${index}`} className=" w-[6rem] pb-5 pt-3">
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg px-3 border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className="flex flex-row space-x-2">
                  {/* <IonImg src="assets/img/cafe.png" /> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSeason;
