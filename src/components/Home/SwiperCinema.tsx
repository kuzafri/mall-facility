import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCinema: React.FC = () => {
  return (
    <>
      <div className="p-3">
        <h3 className="text-black text-lg font-bold">Now Premiering!</h3>
        <Swiper pagination={true} slidesPerView={1.25} spaceBetween={10}>
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={`cafe-${index}`} className=" w-[6rem] py-3">
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg px-3 border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className="flex flex-row space-x-2">
                  {/* <IonImg src="assets/img/cafe.png" /> */}
                  <div className=" pt-auto">
                    <div className="inline-block">
                      <p className="flex items-center text-xs">
                        {/* <FmdGoodOutlinedIcon className="!text-xl text-muted  pr-1" /> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SwiperCinema;
