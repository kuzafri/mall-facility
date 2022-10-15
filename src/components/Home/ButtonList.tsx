import { IonImg } from "@ionic/react";
import useNavigate from "hooks/useNavigate";
import React from "react";

const ButtonList = () => {
  const { goTo } = useNavigate();

  return (
    <>
      <div className="!bg-white !h-[30%] mt-4 border-black">
        <div className="grid grid-cols-3 grid-rows-2 text-black w-auto h-full">
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-5 ml-2 w-16 h-16 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/mallcomplaintpage", "forward")}
            >
              {/* <i className="fa-solid fa-city text-2xl  mt-2 --bg-primary">
                <i className="fa-solid fa-comment-dots absolute text-[18px] text-red-400 mb-14 mr-6"></i>
              </i> */}
              <IonImg src="assets/img/city-solid.svg" className="w-9 !mr-2" />
            </div>
            <p className="text-xs text-center">Mall Complaint</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-2  w-27 h-23 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/mallcomplaintpage", "forward")}
            >
              <i className="fa-solid fa-store text-2xl  mb-2 mt-2 --bg-primary"></i>
            </div>
            <p className="text-xs text-center">Shop</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-2  w-27 h-23 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/malllayout", "forward")}
            >
              <i className="fa-solid fa-city text-2xl mb-2 mt-2 --bg-primary"></i>
            </div>
            <p className="text-xs text-center">Mall</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-3  w-27 h-23 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/voucher", "forward")}
            >
              <i className="fa-solid fa-ticket text-2xl mt-1 --bg-primary"></i>
            </div>
            <p className="text-xs text-center mb-2 mt-2">Voucher</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-3  w-27 h-23 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/complaintlist", "forward")}
            >
              <i className="fa-solid fa-file-lines ml-1 text-2xl mt-1 --bg-primary"></i>
            </div>
            <p className="text-xs text-center">
              Complaint <br />
              List
            </p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div
              className="px-5 py-5 w-16 h-16 ml-1 rounded-full !bg-[#bfdadf]"
              onClick={() => goTo("/shopcomplaintpage", "forward")}
            >
              <IonImg src="assets/img/store-solid.svg" className="w-9 mr-4 " />
            </div>
            <p className="text-xs text-center">
              Shop <br />
              Complaint
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonList;
