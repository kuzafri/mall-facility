import React from "react";
import {
  BaseSheetModal,
  SheetModalProps,
} from "components/Base/BaseSheetModal";
import useNavigate from "hooks/useNavigate";
import { IonHeader, IonImg, IonSearchbar, IonToolbar } from "@ionic/react";

const SearchModal: React.FC<SheetModalProps> = (props) => {
  const { closeModal } = props;
  const { goTo } = useNavigate();

  return (
    <BaseSheetModal {...props}>
      <div className="pt-4 pb-2">
        <IonImg src="assets/img/qr.png" />
      </div>
    </BaseSheetModal>
  );
};

export default SearchModal;
