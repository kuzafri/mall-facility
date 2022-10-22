import { IonIcon } from "@ionic/react";
import { newspaper, personCircle } from "ionicons/icons";
import React from "react";

const DummyData: React.FC = () => {
  return (
    <>
      <div className="flex flex-row space-x-2 w-full p-3">
        <div className="bg-secondary w-full px-2 rounded-lg text-center p-3 shadow-xl text-zinc-800">
          <div className="flex flex-row items-center space-x-2 justify-center text-sm ">
            <IonIcon icon={newspaper} className=" text-xl" />
            <p>Total Complaint</p>
          </div>
          <p className="text-xl font-bold">1,349</p>
        </div>
        <div className="bg-secondary w-full px-2 rounded-lg text-center p-3 shadow-xl text-zinc-800">
          <div className="flex flex-row items-center space-x-2 justify-center text-sm ">
            <i className="fa-solid fa-shop"></i>
            <p>Total Shop</p>
          </div>
          <p className="text-xl font-bold">104</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-secondary !w-[60%] px-2 rounded-lg text-center p-3 mx-auto shadow-xl text-zinc-800">
          <div className="flex flex-row items-center space-x-2 justify-center text-sm ">
            <IonIcon icon={personCircle} className=" text-xl" />
            <p>Total User</p>
          </div>
          <p className="text-xl font-bold">30,887</p>
        </div>
      </div>
    </>
  );
};

export default DummyData;
