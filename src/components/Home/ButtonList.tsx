import React from "react";

const ButtonList = () => {
  return (
    <>
      <div className="!bg-white h-[30%] mt-4">
        <div className="grid grid-cols-3 grid-rows-2 text-black w-auto h-full">
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-fullt ">
              <i className="fa-solid fa-city text-2xl ml-8 mt-2 !text-primary ">
                <i className="fa-solid fa-comment-dots absolute text-[18px] text-red-400 mb-14 mr-6"></i>
              </i>
            </div>
            <p className="text-xs text-center">
              Mall <br />
              Complaint
            </p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-full ">
              <i className="fa-solid fa-store text-2xl ml-9 mb-2 mt-2 text-primary"></i>
            </div>
            <p className="text-xs text-center">Shop</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-full ">
              <i className="fa-solid fa-city text-2xl ml-8 mb-2 mt-2 text-primary"></i>
            </div>
            <p className="text-xs text-center">Mall</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-full ">
              <i className="fa-solid fa-ticket text-2xl ml-8 mt-2 text-primary"></i>
            </div>
            <p className="text-xs text-center mb-2 mt-2">Voucher</p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-full ">
              <i className="fa-solid fa-file-lines text-2xl ml-10 mt-2 text-primary"></i>
            </div>
            <p className="text-xs text-center">
              Complaint <br />
              List
            </p>
          </div>
          <div className="w-auto mx-auto my-auto">
            <div className="w-24 h-23 rounded-full ">
              <i className="fa-solid fa-store text-2xl ml-8 mt-2 text-primary">
                <i className="fa-solid fa-comment-dots absolute text-[18px] text-red-400 mb-14 mr-6"></i>
              </i>
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
