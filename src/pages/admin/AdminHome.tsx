import React, { useState } from "react";
import { IonContent, IonHeader, IonToolbar } from "@ionic/react";
import SwiperCurrentSeason from "components/Home/SwiperCurrentSeason";
import { useRecoilValue } from "recoil";
import { userAtom } from "modules";
import DummyData from "components/AdminHome/DummyData";
import AdminChart from "components/AdminHome/AdminChart";

const AdminHome: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      <IonHeader mode="ios" className="custom-header overflow-visible ">
        <IonToolbar mode="ios" className="custom-toolbar overflow-visible">
          <div className="flex flex-row text-white items-center justify-between mx-3 pt-3 py-5 h-[80px]">
            <p className="text-lg ml-6">
              Welcome, <b>Admin</b>
            </p>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ "--background": "#efefef !important" }}>
        <AdminChart />
        <SwiperCurrentSeason />
        <DummyData />
      </IonContent>
    </>
  );
};

export default AdminHome;
