import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonImg,
} from "@ionic/react";
import { cart, search } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <>
      <IonHeader mode="ios" className="custom-header overflow-visible">
        <IonToolbar mode="ios" className="custom-toolbar overflow-visible">
          <div className="flex flex-row text-white items-center justify-between mx-3 pt-3 py-5 h-[80px]">
            <div className="h-[50px]">
              <IonImg src="assets/img/UniEat.png" className="h-[50px]" />
            </div>
            <div className="flex items-center space-x-3"></div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </>
  );
};

export default Home;
