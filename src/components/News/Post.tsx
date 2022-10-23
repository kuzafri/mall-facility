import React from "react";
import { IonImg } from "@ionic/react";
import SwiperPhoto from "./SwiperPhoto";
import { Swiper, SwiperSlide } from "swiper/react";

const DUMMY_DATA = [
  "assets/img/news1.png",
  "assets/img/news2.png",
  "assets/img/news3.png",
];
const Post = () => {
  return (
    <>
      {[...Array(1)].map((_, index) => (
        <div
          key={`post-${index}`}
          className="p-2 "
          //   onClick={() => goTo("/singleitem", "forward")}
        >
          <div className="p-3 h-30% w-full bg-white rounded-lg  border border-[#ffeeee] shadow-[0_10px_15px_-3px_rgb(255,215,215,0.7)_,_0_4px_6px_-4px_rgb(255,215,215,0.7)]">
            <div className="w-[max] flex flex-row items-center space-x-3">
              <div className="rounded-full bg-gray-400 w-12 h-12"></div>
              <div>
                <div className="ml-3">Body Glove</div>
                <div className="ml-3">Lot-2-7</div>
              </div>
            </div>
            <p className="col-span-2 mt-4 p-2">
              The changing room have a lot of hole and it is uncomfortable.
            </p>

            <Swiper pagination={true} slidesPerView={2.75} spaceBetween={10}>
              {DUMMY_DATA.map((link, index) => (
                <SwiperSlide key={`swiper-${index}`} className=" w-[6rem] py-3">
                  <div className="col-span-2">
                    <IonImg src={link} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
