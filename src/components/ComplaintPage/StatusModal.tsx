import { IonContent, IonImg, IonModal } from "@ionic/react";
import { BaseButton } from "components/Base";
import useNavigate from "hooks/useNavigate";
import React from "react";

const StatusModal: React.FC<any> = (props) => {
  const { isOpen, closeModal } = props;
  const { goTo } = useNavigate();

  return (
    <>
      <IonModal
        isOpen={isOpen}
        onDidDismiss={() => {
          closeModal();
        }}
      >
        <IonContent fullscreen>
          <div className="p-5 pt-10 bg-primary h-full text-white flex flex-col justify-center space-y-10">
            <div className="text-center ">
              <h1 className="text-2xl font-semibold">Complaint Submitted</h1>
              <p className="text-sm pb-10">
                We are looking forward to improve our facilities
              </p>
              <IonImg src="assets/img/statusModal.png" />
            </div>
            <BaseButton
              label="Continue"
              onClick={() => {
                closeModal();
                goTo("/complaintlist", "forward", "pop");
              }}
              className="!bg-white !text-primary"
            />
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default StatusModal;
