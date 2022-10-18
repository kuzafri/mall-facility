import React, { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import useNavigate from "hooks/useNavigate";
import UserItemList from "components/ComplainList/UserItemList";
import { Report, reportFactory } from "modules";

const ComplaintList: React.FC = () => {
  const { goBack } = useNavigate();

  const [submittedReport, setSubmittedReport] = useState<Report[]>([]);

  useEffect(() => {
    reportFactory()
      .getReports("submitted")
      .then((result) => {
        setSubmittedReport(result);
      });
  }, []);

  return (
    <>
      <IonHeader mode="ios" className="custom-header">
        <IonToolbar mode="ios" className="--bg-transparent !pt-5 !pb-3">
          <IonButtons slot="start">
            <IonButton
              onClick={() => {
                goBack();
              }}
            >
              <IonIcon
                className="text-white"
                icon={arrowBack}
                slot="icon-only"
              />
            </IonButton>
          </IonButtons>
          <IonTitle className="text-xl text-white">Complaint List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <UserItemList complaintList={submittedReport} />
      </IonContent>
    </>
  );
};

export default ComplaintList;
