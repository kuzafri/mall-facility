import { IonHeader, IonToolbar, IonSearchbar, IonImg } from "@ionic/react";
import { BaseSheetModal } from "components/Base";
import { SheetModalProps } from "components/Base/BaseSheetModal";
import React from "react";

const Shop: React.FC<SheetModalProps> = (props) => {
  const { closeModal } = props;

  return (
    <>
      <div className="">
        <BaseSheetModal {...props}>
          <div className="pt-4 pb-2">
            <IonHeader mode="ios" className="custom-header">
              <IonToolbar mode="ios" className="--bg-transparent px-2">
                <IonSearchbar mode="ios" className="p-0" />
              </IonToolbar>
            </IonHeader>
          </div>
          <div className="w-[90%] h-[20%]">
            <IonImg src="assets/img/mrdiy.png" />
            <p className="font-bold text-lg">Mr Diy</p>
          </div>
        </BaseSheetModal>
      </div>
    </>
  );
};

export default Shop;
