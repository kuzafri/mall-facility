import { IonImg } from "@ionic/react";
import useNavigate from "hooks/useNavigate";
import React from "react";

const ButtonListTenant = () => {
  const { goTo } = useNavigate();

  return (
    <>
      <div className="!bg-white py-3 mt-4 border-black">
        <div className="grid grid-cols-3 text-black w-auto h-full">
          <div className="text-center">
            <div
              className="flex flex-col items-center justify-center p-5 mx-auto w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/mallcomplaintpage", "forward")}
            >
              <IonImg src="assets/img/city-solid.svg" className="w-8" />
            </div>
            <p className="text-xs text-center mt-2">Mall Complaint</p>
          </div>
          <div className="text-center">
            <div
              className="p-4 w-16 h-16 rounded-full !bg-[#bfdadf] mx-auto"
              onClick={() => goTo("/tenantsendvoucher", "forward")}
            >
              <i className="fa-solid fa-ticket text-2xl --bg-primary"></i>
            </div>
            <p className="text-xs text-center mb-2 mt-2">Send Voucher</p>
          </div>
          <div className="text-center">
            <div
              className="p-4 w-16 h-16 mx-auto rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/tenantcomplaintlist", "forward")}
            >
              <i className="fa-solid fa-file-lines text-2xl --bg-primary"></i>
            </div>
            <p className="text-xs text-center mt-2">
              Complaint <br />
              List
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonListTenant;
