import { IonContent } from "@ionic/react";
import PrivateHeader from "components/Layout/PrivateHeader";
import Button from "components/TenantProfile/Button";
import ShopDetails from "components/TenantProfile/ShopDetails";
import TenantTab from "components/TenantProfile/TenantTab";
import React from "react";

const TenantProfile = () => {
  return (
    <>
      <PrivateHeader title={"Profile"} />
      <IonContent>
        <TenantTab />
        <ShopDetails />
        <Button />
      </IonContent>
    </>
  );
};

export default TenantProfile;
