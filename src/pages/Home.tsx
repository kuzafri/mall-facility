import React, { useState } from "react";
import { IonContent, IonHeader, IonToolbar, IonImg } from "@ionic/react";
import ButtonList from "components/Home/ButtonList";
import SwiperSale from "components/Home/SwiperSale";
import SwiperCinema from "components/Home/SwiperCinema";
import { getLocalStorage } from "helpers";

const Home: React.FC = () => {
  return (
    <>
      <IonHeader mode="ios" className="custom-header overflow-visible ">
        <IonToolbar mode="ios" className="custom-toolbar overflow-visible">
          <div className="flex flex-row text-white items-center justify-between mx-3 pt-3 py-5 h-[80px]">
            <p className="text-lg ml-6">
              Welcome <b>Kuzafri</b>
            </p>
            <p className="text-sm text-center">
              3434 <br />
              point collected
            </p>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ "--background": "#efefef !important" }}>
        <ButtonList />
        <SwiperSale />
        <SwiperCinema />
      </IonContent>
    </>
  );
};

export default Home;
