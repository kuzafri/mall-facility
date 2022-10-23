import React, { useRef, useState } from "react";
import { IonImg } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";

const DUMMY_DATA = [
  "assets/img/offer1.png",
  "assets/img/offer2.png",
  "assets/img/offer3.jpg",
  "assets/img/offer4.jpg",
];

const SwiperSale = () => {
  return (
    <>
      <div className="p-3 pt-8">
        <h3 className="text-black text-lg font-bold">Save 8% Today!</h3>
        <Swiper pagination={true} slidesPerView={2.75} spaceBetween={10}>
          {DUMMY_DATA.map((link, index) => (
            <SwiperSlide key={`swiper-${index}`} className=" w-[6rem] py-3">
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className="flex flex-row">
                  <IonImg src={link} />
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

export default SwiperSale;
