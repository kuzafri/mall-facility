import BaseButton from "components/Base/BaseButton";
import React from "react";

const Button = () => {
  return (
    <>
      <div className="w-[80%] h-[6%] bg-[#93b6bc] mx-auto mt-6 rounded-lg p-3">
        Change Password
      </div>
      <div className="w-[80%] h-[6%] bg-[#93b6bc] mx-auto mt-6 rounded-lg p-3">
        Term & Condition
      </div>

      <BaseButton
        label="Log Out"
        className="my-3 !bg-[#196B79] w-[60%] mt-3 !mx-auto drop-shadow-[bg-white] text-white"
      />
    </>
  );
};

export default Button;
