import React from "react";
import { IonContent } from "@ionic/react";
import PrivateHeader from "components/Layout/PrivateHeader";
import AccountDetails from "components/Profile/AccountDetails";
import Button from "components/Profile/Button";
import Tab from "components/Profile/Tab";
import { BaseButton } from "components/Base";
import { removeLocalStorage } from "helpers";
import { useSetRecoilState } from "recoil";
import { userAtom } from "modules";
import useNavigate from "hooks/useNavigate";

const Profile: React.FC = () => {
  const { goTo } = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const signOutHandler = async () => {
    // TODO: Trigger Alert Confirmation
    setUser({} as any);
    await removeLocalStorage("user");
    goTo("/landing", "forward", "pop");
  };

  return (
    <>
      <PrivateHeader title="Profile" />
      <IonContent>
        <div className="mx-3 mb-5">
          <Tab />
          <AccountDetails />
          <Button />

          <BaseButton
            label="Log Out"
            className="my-3 !bg-[#196B79] mt-3 drop-shadow-none text-white"
            onClick={signOutHandler}
          />
        </div>
      </IonContent>
    </>
  );
};

export default Profile;
