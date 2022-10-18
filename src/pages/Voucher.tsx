import { IonContent, IonImg } from "@ionic/react";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import React from "react";

const Voucher = () => {
  return (
    <>
      <SinglePageHeader title="Voucher" />
      <IonContent>
        <div className="mx-3">
          <IonImg
            src="assets/img/voucher2.jpg"
            className="h-[40%] mx-auto shadow-md mt-10 bg-white"
          />
        </div>
      </IonContent>
    </>
  );
};

export default Voucher;
