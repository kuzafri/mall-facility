import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  useIonViewWillEnter,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import useNavigate from "hooks/useNavigate";
import UserItemList from "components/ComplainList/UserItemList";
import { Report, reportFactory } from "modules";

const ComplaintList: React.FC = () => {
  const { goBack } = useNavigate();

  const [submittedReport, setSubmittedReport] = useState<Report[]>([]);

  useIonViewWillEnter(() => {
    console.log("test");
  });

  useEffect(() => {
    reportFactory()
      .getReports("submitted")
      .then((result) => {
        setSubmittedReport(result);
      });
  }, []);

  const refetch = (event: CustomEvent<RefresherEventDetail>) => {
    reportFactory()
      .getReports("submitted")
      .then((result) => {
        setSubmittedReport(result);
        event.detail.complete();
      });
  };

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
        <IonRefresher slot="fixed" onIonRefresh={refetch}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <UserItemList complaintList={submittedReport} />
      </IonContent>
    </>
  );
};

export default ComplaintList;
