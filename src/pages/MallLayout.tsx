import { IonContent, IonImg, IonSlides } from "@ionic/react";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import React from "react";
import PinchToZoom from "react-pinch-and-zoom";

const MallLayout = () => {
  return (
    <>
      <SinglePageHeader title="Mall Layout" />
      <IonContent>
        <IonImg src="assets/img/layout.png" />
      </IonContent>
    </>
  );
};

export default MallLayout;
