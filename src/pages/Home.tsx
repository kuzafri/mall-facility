import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonImg,
} from "@ionic/react";
import { cart, search } from "ionicons/icons";
import ButtonList from "components/Home/ButtonList";
import SwiperCinema from "components/Home/SwiperCinema";
import SwiperSale from "components/Home/SwiperSale";

const Home: React.FC = () => {
  return (
    <>
      <IonHeader mode="ios" className="custom-header overflow-visible">
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
      <IonContent fullscreen className="!bg-gray-600">
        <ButtonList />
        <SwiperSale />
        <SwiperCinema />
      </IonContent>
    </>
  );
};

export default Home;
