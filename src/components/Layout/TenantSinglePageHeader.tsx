import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import useNavigate from "hooks/useNavigate";

type SinglePageType = {
  title: string;
  path?: string;
};

const TenantSinglePageHeader: React.FC<SinglePageType> = (props) => {
  const { title, path } = props;
  const { goTo, goBack } = useNavigate();

  const backButtonHandler = () => {
    if (path) {
      goTo(path, "back");
    } else {
      goBack();
    }
  };

  return (
    <IonHeader mode="ios" className="custom-header">
      <IonToolbar mode="ios" className="--bg-transparent !pt-5 !pb-3">
        <IonButtons slot="start">
          <IonButton onClick={backButtonHandler}>
            <IonIcon className="text-white" icon={arrowBack} slot="icon-only" />
          </IonButton>
        </IonButtons>
        <IonTitle className="text-xl text-white">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default TenantSinglePageHeader;
