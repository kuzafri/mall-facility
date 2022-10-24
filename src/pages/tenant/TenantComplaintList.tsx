import React, { useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRefresher,
  IonRefresherContent,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewWillEnter,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import useNavigate from "hooks/useNavigate";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import ItemList from "components/ComplainList/ItemList";
import { Report, reportFactory } from "modules";

const ComplaintList: React.FC = () => {
  const { goBack } = useNavigate();

  const [currentSection, setCurrentSection] = useState(0);
  const [receivedReport, setReceivedReport] = useState<Report[]>([]);
  const [submittedReport, setSubmittedReport] = useState<Report[]>([]);

  const swiperRef = useRef<SwiperType>();

  useIonViewWillEnter(() => {
    reportFactory()
      .getReports("tenant")
      .then((result: Report[]) => {
        setReceivedReport(result);
      });

    reportFactory()
      .getReports("submitted")
      .then((result: Report[]) => {
        setSubmittedReport(result);
      });
  });

  const refetch = (event: CustomEvent<RefresherEventDetail>) => {
    reportFactory()
      .getReports()
      .then((result: Report[]) => {
        setSubmittedReport(result);
        event.detail.complete();
      });

    reportFactory()
      .getReports("submitted")
      .then((result: Report[]) => {
        setSubmittedReport(result);
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
        <IonRefresher slot="fixed" onIonRefresh={refetch} className="z-50">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="fixed w-full z-10 bg-white">
          <IonSegment
            value={currentSection.toString()}
            onIonChange={(e: any) => {
              setCurrentSection(+e.detail.value);
              swiperRef.current?.slideTo(+e.detail.value);
            }}
            color="success"
            mode="ios"
          >
            <IonSegmentButton value="0">
              <IonLabel>Received</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="1">
              <IonLabel>Submitted</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        <div>
          <Swiper
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
            onSlideChange={(swiper: any) => {
              setCurrentSection(swiper.activeIndex);
            }}
          >
            <SwiperSlide>
              <ItemList complaintList={receivedReport} />
            </SwiperSlide>
            <SwiperSlide>
              <ItemList complaintList={submittedReport} />
            </SwiperSlide>
          </Swiper>
        </div>
      </IonContent>
    </>
  );
};

export default ComplaintList;
