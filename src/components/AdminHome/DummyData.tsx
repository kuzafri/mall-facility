import React from "react";

const DummyData = () => {
  return (
    <>
      <div className="flex flex-row space-x-2 w-full p-3">
        <div className="bg-secondary w-full px-2 rounded-lg text-center p-3 shadow-xl">
          <div className="text-md font-semibold ">Total Complaint</div>
          <p className="text-xl font-bold">1,349</p>
        </div>
        <div className="bg-secondary w-full px-2 rounded-lg text-center p-3 shadow-xl">
          <div className="text-md font-semibold ">Total Shop</div>
          <p className="text-xl font-bold">104</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="bg-secondary !w-[60%] px-2 rounded-lg text-center p-3 mx-auto shadow-xl">
          <div className="text-md font-semibold ">Total User</div>
          <p className="text-xl font-bold">30,887</p>
        </div>
      </div>
    </>
  );
};

export default DummyData;
