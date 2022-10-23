import { IonImg } from "@ionic/react";
import useNavigate from "hooks/useNavigate";
import React, { useState } from "react";
import ShopModal from "./ShopModal";

const ButtonList = () => {
  const { goTo } = useNavigate();
  const [isOpenPoint, setIsOpenPoint] = useState(false);

  return (
    <>
      <div className="!bg-white mt-4 border-black">
        <div className="grid grid-cols-3 grid-rows-2 text-black w-auto h-full">
          <div className="w-auto mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center mx-auto p-4 w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/mallcomplaintpage", "forward")}
            >
              <IonImg src="assets/img/city-solid.svg" />
            </div>
            <p className="text-xs text-center">Mall Complaint</p>
          </div>
          <div className="mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => setIsOpenPoint(true)}
            >
              <i className="fa-solid fa-store text-2xl --bg-primary"></i>
            </div>
            <p className="text-xs text-center">Shop</p>
          </div>
          <div className="mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/malllayout", "forward")}
            >
              <i className="fa-solid fa-city text-2xl mb-2 mt-2 --bg-primary"></i>
            </div>
            <p className="text-xs text-center">Mall</p>
          </div>
          <div className="mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/voucher", "forward")}
            >
              <i className="fa-solid fa-ticket text-2xl mt-1 --bg-primary"></i>
            </div>
            <p className="text-xs text-center mb-2 mt-2">Voucher</p>
          </div>
          <div className="mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/complaintlist", "forward")}
            >
              <i className="fa-solid fa-file-lines ml-1 text-2xl mt-1 --bg-primary"></i>
            </div>
            <p className="text-xs text-center">
              Complaint <br />
              List
            </p>
          </div>
          <div className="mx-auto my-auto">
            <div
              className="flex flex-row items-center justify-center py-4 pr-3 w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/shopcomplaintpage", "forward")}
            >
              <IonImg
                src="assets/img/store-solid.svg"
                className="ml-[1.15rem]"
              />
            </div>
            <p className="text-xs text-center">
              Shop <br />
              Complaint
            </p>
          </div>
        </div>
      </div>

      <ShopModal
        isOpen={isOpenPoint}
        closeModal={() => setIsOpenPoint(false)}
        initialBreakpoint={0.95}
        breakpoints={[0]}
        children={undefined}
      />
    </>
  );
};

export default ButtonList;
