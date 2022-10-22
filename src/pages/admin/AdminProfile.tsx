import React from "react";
import Button from "components/AdminProfile/Button";
import { BaseButton } from "components/Base";
import { removeLocalStorage } from "helpers";
import { useSetRecoilState } from "recoil";
import { userAtom } from "modules";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import useNavigate from "hooks/useNavigate";

const AdminProfile: React.FC = () => {
  const setUser = useSetRecoilState(userAtom);
  useNavigate();

  const signOutHandler = async () => {
    // TODO: Trigger Alert Confirmation
    setUser({} as any);
    await removeLocalStorage("user");
    window.location.href = "/login";
  };

  return (
    <>
      <IonHeader mode="ios" className="custom-header">
        <IonToolbar mode="ios" className="--bg-transparent !pt-5 !pb-3">
          <IonTitle className="text-xl text-white">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mx-3 my-5">
          <div className="bg-light rounded-lg shadow-lg p-5">
            <p>
              <span className="font-semibold"> Mall Name:</span> Odyssey
              Shopping Center
            </p>
            <p>
              <span className="font-semibold"> Address:</span> Odyssey Shopping
              Center, 12366, Kedah, Malaysia
            </p>
            <p>
              <span className="font-semibold"> Registration Number:</span>{" "}
              HK234523436J
            </p>
            <p>
              <span className="font-semibold"> License:</span> 2022
            </p>
            <p>
              <span className="font-semibold"> Contact Number:</span>{" "}
              04-123456789
            </p>
          </div>
          <Button />
          <BaseButton
            label="Log Out"
            className="my-3 justify-center item-center mx-auto !bg-[#196B79] mt-3 drop-shadow-none text-white"
            onClick={signOutHandler}
          />
        </div>
      </IonContent>
    </>
  );
};

export default AdminProfile;
