import { IonIcon, IonText } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import React from "react";

const TenantReceivedList: React.FC = (props: any) => {
  return (
    <div className="mt-10 my-5 mx-3 space-y-3">
      {[...Array(15)].map((_, index) => (
        <div
          key={`DUMMYCOMPLAINT-${index}`}
          className="bg-white p-5 rounded-lg shadow-md flex flex-row justify-between items-center"
        >
          <div>
            <h3>Complaint #number</h3>
            <div className="mt-3">
              <p className="text-sm">
                Status: <IonText color="success">Reviewed</IonText>
              </p>
              <p className="text-sm">Type: Technical</p>
            </div>
          </div>
          <IonIcon icon={chevronForward} className="text-2xl" />
        </div>
      ))}
    </div>
  );
};

export default TenantReceivedList;
