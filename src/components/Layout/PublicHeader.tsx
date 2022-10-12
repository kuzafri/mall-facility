import React, { forwardRef } from "react";
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

type PublicHeaderType = {
  title: string;
  path?: string;
};

const PublicHeader: React.ForwardRefRenderFunction<any, PublicHeaderType> = (
  props,
  ref
) => {
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
      <IonToolbar ref={ref} mode="ios" className="--bg-transparent !pt-5">
        <IonButtons slot="start">
          <IonButton onClick={backButtonHandler}>
            <IonIcon className="text-white" icon={arrowBack} slot="icon-only" />
          </IonButton>
        </IonButtons>
        <IonTitle className="text-xl text-primary">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default forwardRef(PublicHeader);
