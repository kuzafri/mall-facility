import React, { ReactNode } from "react";
import {
  IonModal,
  IonContent,
  IonHeader,
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonLabel,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

export interface SheetModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  initialBreakpoint?: number;
  breakpoints: number[];
  className?: string;
  fixed?: boolean;
  header?: boolean;
  title?: string;
}

export const BaseSheetModal: React.FC<SheetModalProps> = (props) => {
  const {
    isOpen,
    closeModal,
    initialBreakpoint = 0.25,
    breakpoints,
    fixed,
    header,
    title,
    ...rest
  } = props;

  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={() => closeModal()}
      initialBreakpoint={initialBreakpoint}
      breakpoints={fixed ? undefined : breakpoints}
      {...rest}
    >
      {header && (
        <IonHeader mode="ios" className="custom-header">
          <IonToolbar mode="ios" className="--bg-transparent !pt-5">
            <IonButtons slot="start">
              <IonButton onClick={closeModal}>
                <IonIcon
                  className="text-primary"
                  icon={arrowBack}
                  slot="icon-only"
                />
              </IonButton>
            </IonButtons>
            <IonTitle className="text-xl text-primary">{title}</IonTitle>
            <IonLabel
              className="float-right pr-4 text-primary text-lg"
              onClick={closeModal}
            >
              Done
            </IonLabel>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent fullscreen>{props.children}</IonContent>
    </IonModal>
  );
};
