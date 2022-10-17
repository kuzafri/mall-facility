import BaseButton from "components/Base/BaseButton";
import React from "react";

const Button = () => {
  return (
    <>
      <div className="w-[90%] h-[6%] bg-[#93b6bc] mx-auto mt-6 rounded-lg p-3 text-white">
        Change Password
      </div>
      <div className="w-[90%] h-[6%] bg-[#93b6bc] mx-auto mt-6 rounded-lg p-3 text-white">
        Term & Condition
      </div>

      <BaseButton
        label="Log Out"
        className=" !bg-[#196B79] w-[90%] mt-3 mx-auto drop-shadow-[bg-white] text-white justify-center item-center"
      />
    </>
  );
};

export default Button;
