import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import MallComplaint from "components/ComplaintPage/MallComplaint";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { ReportType, reportTypeFactory } from "modules";

const MallComplaintPage: React.FC = () => {
  const [reportType, setReportType] = useState<ReportType[]>([]);

  useEffect(() => {
    reportTypeFactory()
      .getReportTypes()
      .then((data) => {
        setReportType(data);
      });
  }, []);

  return (
    <>
      <SinglePageHeader title="Mall Complaint" path="/home" />
      <IonContent fullscreen>
        <MallComplaint reportType={reportType} />
      </IonContent>
    </>
  );
};

export default MallComplaintPage;
