import React, { useState } from "react";
import { IonContent, IonHeader, IonToolbar, IonImg } from "@ionic/react";
import { getLocalStorage } from "helpers";
import SwiperSeason from "components/Home/SwiperSeason";
import ButtonListTenant from "components/Home/ButtonListTenant";
import SwiperCurrentSeason from "components/Home/SwiperCurrentSeason";

const Home: React.FC = () => {
  return (
    <>
      <IonHeader mode="ios" className="custom-header overflow-visible ">
        <IonToolbar mode="ios" className="custom-toolbar overflow-visible">
          <div className="flex flex-row text-white items-center justify-between mx-3 pt-3 py-5 h-[80px]">
            <p className="text-lg ml-6">
              Welcome, <b>Shop</b>
            </p>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ "--background": "#efefef !important" }}>
        <ButtonListTenant />
        <SwiperCurrentSeason />
        <SwiperSeason />
      </IonContent>
    </>
  );
};

export default Home;
