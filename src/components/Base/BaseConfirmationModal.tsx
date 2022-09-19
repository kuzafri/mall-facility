import React from "react";
import { close } from "ionicons/icons";
import { IonIcon, IonModal } from "@ionic/react";
import BaseButtonConfirmation from "./BaseButtonConfirmation";

type Button = {
  label?: string;
  type: string | string[];
  handler?: () => void;
};

type BaseConfirmationModalProps = {
  children: React.ReactNode;
  button?: Button;
  isOpen: boolean;
  closeModal: () => void;
};

const BaseConfirmationModal: React.FC<BaseConfirmationModalProps> = (props) => {
  const { button, isOpen, closeModal } = props;

  return (
    <>
      <IonModal
        className="alert-modal text-black text-center"
        isOpen={isOpen}
        onDidDismiss={closeModal}
      >
        {button && (button.type.includes("close") || button.type === "close") && (
          <div
            onClick={closeModal}
            className="absolute h-4 w-10 top-[-0.75rem] right-[-0.75rem] bg-primary rounded-full flex justify-center items-center "
          >
            <IonIcon icon={close} className="text-white text-xl" />
          </div>
        )}

        {props.children}

        {button && (button.type.includes("cta") || button.type === "cta") && (
          <BaseButtonConfirmation
            label={button.label ?? ""}
            className="!w-1/2 mx-auto "
            onClick={button.handler}
          />
        )}
      </IonModal>
    </>
  );
};

export default BaseConfirmationModal;
