import React from "react";
import { IonContent } from "@ionic/react";
import { BaseButton } from "components/Base";
import PrivateHeader from "components/Layout/PrivateHeader";
import Button from "components/TenantProfile/Button";
import ShopDetails from "components/TenantProfile/ShopDetails";
import TenantTab from "components/TenantProfile/TenantTab";
import { removeLocalStorage } from "helpers";
import useNavigate from "hooks/useNavigate";
import { userAtom } from "modules";
import { useSetRecoilState } from "recoil";

const TenantProfile: React.FC = () => {
  const { goTo } = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const signOutHandler = async () => {
    // TODO: Trigger Alert Confirmation
    setUser({} as any);
    await removeLocalStorage("user");
    window.location.href = "/login";
  };

  return (
    <>
      <PrivateHeader title={"Profile"} />
      <IonContent>
        <div className="mx-3">
          <TenantTab />
          <ShopDetails />
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

export default TenantProfile;
