import React from "react";
import { IonIcon, IonModal } from "@ionic/react";
import BaseButton from "./BaseButton";
import { close } from "ionicons/icons";

type Button = {
  label?: string;
  type: string | string[];
  handler?: () => void;
};

type BaseQuantityModalProps = {
  children: React.ReactNode;
  button?: Button;
  isOpen: boolean;
  closeModal: () => void;
};

const BaseQuantityModal: React.FC<BaseQuantityModalProps> = (props) => {
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
            className="absolute h-10 w-10 top-[-0.75rem] right-[-0.75rem] bg-primary rounded-full flex justify-center items-center shadow-lg"
          >
            <IonIcon icon={close} className="text-white text-xl" />
          </div>
        )}

        {props.children}

        {button && (button.type.includes("cta") || button.type === "cta") && (
          <BaseButton
            label={button.label ?? ""}
            className="!w-1/2 mx-auto"
            onClick={button.handler}
          />
        )}
      </IonModal>
    </>
  );
};

export default BaseQuantityModal;
