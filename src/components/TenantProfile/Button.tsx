import React from "react";
import { IonIcon } from "@ionic/react";
import { lockClosedOutline } from "ionicons/icons";

/** Custom Component **/
import BaseButton from "components/Base/BaseButton";

const Button: React.FC = () => {
  return (
    <div className="space-y-4 my-5">
      <div className="bg-light flex flex-row space-x-4 mx-auto rounded-lg p-3 text-white">
        <IonIcon icon={lockClosedOutline} className="text-white text-lg" />
        <p>Change Password</p>
      </div>
      <div className="bg-light flex flex-row space-x-4 mx-auto rounded-lg p-3 text-white">
        <IonIcon icon={lockClosedOutline} className="text-white text-lg" />
        <p>Term & Condition</p>
      </div>
    </div>
  );
};

export default Button;
