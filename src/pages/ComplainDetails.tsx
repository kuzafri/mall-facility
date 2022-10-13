import { IonImg } from "@ionic/react";
import Card from "components/ComplaintDetails/Card";
import PrivateHeader from "components/Layout/PrivateHeader";
import React from "react";

const ComplainDetails = () => {
  return (
    <>
      <PrivateHeader title="Complaint Details" />
      <div className="exclude">
        <IonImg
          class=" w-[70%] mx-auto mt-[6rem]"
          src="assets/img/undraw_wait_in_line_o2aq.svg"
        />
      </div>
      <Card />
    </>
  );
};

export default ComplainDetails;
