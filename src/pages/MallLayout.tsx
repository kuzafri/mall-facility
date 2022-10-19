import { IonContent, IonImg, IonSlides } from "@ionic/react";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import React from "react";

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
