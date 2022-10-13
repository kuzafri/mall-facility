import { IonContent, IonImg } from "@ionic/react";
import ItemList from "components/ComplainList/ItemList";
import PrivateHeader from "components/Layout/PrivateHeader";
import React from "react";

const ComplainList = () => {
  return (
    <>
      <PrivateHeader title="Complaint List" />
      <IonContent>
        <ItemList />
      </IonContent>
    </>
  );
};

export default ComplainList;
