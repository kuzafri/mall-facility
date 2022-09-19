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
      <IonContent fullscreen style={{ "--background": "#ED6161" }}>
        <div className="landing absolute top-0 h-full w-full opacity-5"></div>
        <div className="flex flex-col relative justify-center item-center px-5 h-full space-y-3">
          <div className="flex flex-col justify-center items center h-[150px]">
            <IonImg src="" />
            <p className="text-white text-center italic">
              Order Food All You Want!
            </p>
          </div>
          <BaseButton
            label="Sign In"
            className="!bg-black shadow-lg !drop-shadow-none"
            onClick={() => goTo("/login")}
          />

          <BaseButton
            label="Sign Up"
            className="!bg-light !text-primary"
            onClick={() => goTo("/register")}
          />
        </div>
      </IonContent>
    </>
  );
};

export default Landing;
