import React from "react";
import { IonContent } from "@ionic/react";

/* Custom Component */
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MallLayout: React.FC = () => {
  return (
    <>
      <SinglePageHeader title="Mall Layout" />
      <IonContent fullscreen>
        <Swiper
          modules={[Zoom]}
          slidesPerView={1}
          className="h-full"
          zoom={true}
        >
          <SwiperSlide zoom={true}>
            <img src="assets/img/layout.png" alt="mall-layout" />
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </>
  );
};

export default MallLayout;
