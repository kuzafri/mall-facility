import React, { useState } from "react";
import { IonContent, IonImg } from "@ionic/react";

/* Hooks */
import useNavigate from "hooks/useNavigate";

/* Custom Component */
import BaseButton from "components/Base/BaseButton";

const Landing: React.FC = () => {
  const { goTo } = useNavigate();

  return (
    <>
      <IonContent fullscreen style={{ "--background": "#4B727A" }}>
        <div className="flex flex-col relative justify-center item-center px-5 h-full space-y-3">
          <div className="flex flex-col justify-center items center h-[150px]">
            <IonImg src="assets/img/logo.png" className=" h-[120px]" />
            <h3 className="text-lg text-center">Odessey Shopping Center</h3>
            <p className="text-white text-center italic">
              your favourite one stop center
            </p>
          </div>
          <BaseButton
            label="Sign In"
            className="!bg-black shadow-lg !drop-shadow-none"
            onClick={() => goTo("/login")}
          />
          <BaseButton
            label="Sign Up"
            className="bg-green-600 !text-primary"
            onClick={() => goTo("/register")}
          />
          <div className="landing absolute !bottom-0 h-full w-full opacity-[8]"></div>
        </div>
      </IonContent>
    </>
  );
};

export default Landing;
