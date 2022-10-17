import { IonContent } from "@ionic/react";
import MallComplaint from "components/ComplaintPage/MallComplaint";
import TenantSinglePageHeader from "components/Layout/TenantSinglePageHeader";
import React from "react";

const MallComplaintPage = () => {
  return (
    <>
      <TenantSinglePageHeader title="Mall Complaint" />
      <IonContent>
        <MallComplaint />
      </IonContent>
    </>
  );
};

export default MallComplaintPage;
