import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

type DetailFoodHeaderType = {
  title: string;
};

const DetailFoodHeader: React.FC<DetailFoodHeaderType> = ({title}) => {

  return (
    <IonHeader className="!rounded-lg ">
      <IonToolbar className="--bg-light !pt-5 !pb-3">
        <IonTitle className="text-xl text-white ">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default DetailFoodHeader;
