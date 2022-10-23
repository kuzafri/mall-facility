import React from "react";
import {
  BaseSheetModal,
  SheetModalProps,
} from "components/Base/BaseSheetModal";
import useNavigate from "hooks/useNavigate";
import { IonHeader, IonImg, IonSearchbar, IonToolbar } from "@ionic/react";

const ShopModal: React.FC<SheetModalProps> = (props) => {
  const { closeModal } = props;
  const { goTo } = useNavigate();

  return (
    <BaseSheetModal {...props}>
      <div className="px-4 pt-7">
        <IonImg src="assets/img/mrdiy.png" />
        <div className="bg-white rounded-lg p-3 ">
          <p className="font-bold text-xl">Mr DIY</p>
          <p>
            It is a part of MR.DIY Group Berhad. and provides home improvement
            products for do-it yourself projects through online and online ores.
          </p>
          <div className="flex flex-row pt-2">
            <i className="fa-solid fa-globe text-xl pr-3"></i>
            <p>Https://mrdiy.com.my</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-phone text-xl pr-3"></i>
            <p>04-43784839</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-envelope text-xl pr-3 "></i>
            <p>mrdiy@work.my</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-7">
        <IonImg src="assets/img/uniqlo.png" />
        <div className="bg-white rounded-lg p-3 ">
          <p className="font-bold text-xl">Uniqlo</p>
          <p>
            Uniqlo Co., Ltd is a Japanese casual wear designer manufacturer and
            retailer. The company is a wholly owned.
          </p>
          <div className="flex flex-row pt-2">
            <i className="fa-solid fa-globe text-xl pr-3"></i>
            <p>Https://uniqlo.com.my</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-phone text-xl pr-3"></i>
            <p>04-43784839</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-envelope text-xl pr-3 "></i>
            <p>uniqlo@work.my</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-7">
        <IonImg src="assets/img/mrdiy.png" />
        <div className="bg-white rounded-lg p-3 ">
          <p className="font-bold text-xl">Mr DIY</p>
          <p>
            It is a part of MR.DIY Group Berhad. and provides home improvement
            products for do-it yourself projects.
          </p>
          <div className="flex flex-row pt-2">
            <i className="fa-solid fa-globe text-xl pr-3"></i>
            <p>Https://uniqlo.com.my</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-phone text-xl pr-3"></i>
            <p>04-43784839</p>
          </div>
          <div className="flex flex-row">
            <i className="fa-solid fa-envelope text-xl pr-3 "></i>
            <p>uniqlo@work.my</p>
          </div>
        </div>
      </div>
    </BaseSheetModal>
  );
};

export default ShopModal;
