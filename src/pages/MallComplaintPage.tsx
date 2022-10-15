import { IonContent } from "@ionic/react";
import MallComplaint from "components/ComplaintPage/MallComplaint";
import PrivateHeader from "components/Layout/PrivateHeader";
import React from "react";

const MallComplaintPage = () => {
  return (
    <>
      <PrivateHeader title="Mall Complaint " />
      <IonContent>
        <MallComplaint />
      </IonContent>
    </>
  );
};

export default MallComplaintPage;
