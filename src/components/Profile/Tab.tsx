import React, { useState } from "react";
import { IonImg } from "@ionic/react";
import { BaseSheetModal } from "components/Base";
import CollectPointModal from "./CollectPointModal";
import useNavigate from "hooks/useNavigate";

const Tab: React.FC = () => {
  const [isOpenPoint, setIsOpenPoint] = useState(false);
  const { goTo } = useNavigate();

  return (
    <>
      <div className="mx-auto px-auto ">
        <IonImg
          className="relative w-[40%] mx-auto top-[3rem] border-4 border-primary rounded-full"
          src="assets/img/user.png"
        />
      </div>
      <div className="relative mx-auto mt-[6rem] bg-[#93b6bc] h-[100px]  rounded-lg ">
        <div className="grid grid-cols-3 h-full">
          <div
            className="flex flex-col items-center justify-center text-white"
            onClick={() => goTo("/voucher")}
          >
            <i className="fa-solid fa-ticket text-2xl"></i>
            <p className="text-xs font-semibold text-center mb-2 mt-[0.25rem]">
              Voucher
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center text-white"
            onClick={() => setIsOpenPoint(true)}
          >
            <i className="fa-solid fa-qrcode text-2xl"></i>
            <p className="text-xs font-semibold text-center mb-2 mt-[0.25rem]">
              Collect Point
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center text-white"
            onClick={() => goTo("/complaintlist")}
          >
            <i className="fa-solid fa-file text-2xl"></i>
            <p className="text-xs font-semibold text-center mb-2 mt-[0.25rem]">
              Your Complaint
            </p>
          </div>
        </div>
      </div>

      <CollectPointModal
        isOpen={isOpenPoint}
        closeModal={() => setIsOpenPoint(false)}
        initialBreakpoint={0.95}
        breakpoints={[0]}
        children={undefined}
      />
    </>
  );
};

export default Tab;
