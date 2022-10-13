import React from "react";
import AccountDetails from "./AccountDetails";

const Tab = () => {
  return (
    <>
      <div className="relative mx-auto mt-[-3rem] w-[80%] bg-[#93b6bc] h-[100px]  rounded-lg ">
        <div className="grid grid-cols-3 h-full">
          <div>
            <div className="w-auto mx-auto my-auto">
              <div className="w-24 h-23 rounded-full ">
                <i className="fa-solid fa-ticket text-2xl ml-[2.55rem] mt-5 text-primary"></i>
              </div>
              <p className="text-xs text-center mb-2 mt-[0.25rem]">Voucher</p>
            </div>
          </div>
          <div>
            <div className="w-auto mx-auto my-auto">
              <div className="w-24 h-23 rounded-full ">
                <i className="fa-solid fa-qrcode text-2xl ml-[2.8rem] mt-5 text-primary"></i>
              </div>
              <p className="text-xs text-center mb-2 mt-[0.25rem]">
                Collect Point
              </p>
            </div>
          </div>
          <div>
            <div className="w-auto mx-auto my-auto">
              <div className="w-24 h-23 rounded-full ">
                <i className="fa-solid fa-file text-2xl ml-[2.55rem] mt-5  "></i>
              </div>
              <p className="text-xs text-center mb-2 mt-[0.25rem]">
                Your Complaint
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
