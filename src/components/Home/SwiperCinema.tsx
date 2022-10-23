import { IonImg } from "@ionic/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const DUMMY_DATA = ["assets/img/1.png", "assets/img/2.jpg", "assets/img/3.png"];

const SwiperCinema: React.FC = () => {
  return (
    <>
      <div className="p-3">
        <h3 className="text-black text-lg font-bold">Now Premiering!</h3>
        <Swiper pagination={true} slidesPerView={1.25} spaceBetween={10}>
          {DUMMY_DATA.map((link, index) => (
            <SwiperSlide key={`swiper-${index}`} className=" w-[6rem]">
              <div
                className="h-[8rem] bg-white flex flex-row justify-center items-center rounded-lg border border-[#b6b6b6] shadow-[#878787]"
                //   onClick={() => openModal(singlePageModal)}
              >
                <div className="flex flex-row w-fit h-fit ">
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

export default SwiperCinema;
