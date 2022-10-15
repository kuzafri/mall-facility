import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

type PrivateHeaderType = {
  title: string;
};

const PrivateHeader: React.FC<PrivateHeaderType> = ({ title }) => {
  return (
    <IonHeader className="!rounded-lg ">
      <IonToolbar className="--bg-transparent !pt-5 !pb-3">
        <IonTitle className="text-xl text-white text-center">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PrivateHeader;
