import { IonImg } from "@ionic/react";
import PublicHeader from "components/Layout/PublicHeader";
import AccountDetails from "components/Profile/AccountDetails";
import Button from "components/Profile/Button";
import Tab from "components/Profile/Tab";

const Profile = () => {
  return (
    <>
      <PublicHeader title="Profile" />
      <IonImg
        className="absolute w-[7rem] top-[7rem] border-4 border-primary rounded-full ml-[10rem]"
        src="assets/img/user.png"
      />
      <Tab />
      <AccountDetails />
      <Button />
    </>
  );
};

export default Profile;
