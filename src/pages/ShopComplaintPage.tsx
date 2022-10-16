import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import ShopComplaint from "components/ComplaintPage/ShopComplaint";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { reportTypeFactory } from "modules";

const ShopComplaintPage: React.FC = () => {
  const [reportType, setReportType] = useState([]);

  useEffect(() => {
    reportTypeFactory()
      .getReportTypes()
      .then((data) => {
        setReportType(data);
      });
  }, []);

  return (
    <>
      <SinglePageHeader title="Shop Complaint" path="/home" />
      <IonContent>
        <ShopComplaint reportType={reportType} />
      </IonContent>
    </>
  );
};

export default ShopComplaintPage;
