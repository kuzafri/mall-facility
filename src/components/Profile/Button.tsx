import React from "react";

const Button: React.FC = () => {
  return (
    <>
      <div className="flex flex-col space-y-3 my-5 text-white">
        <div className="bg-[#93b6bc] rounded-lg p-3">
          <p>Change Password</p>
        </div>
        <div className="bg-[#93b6bc] rounded-lg p-3">
          <p>Term & Condition</p>
        </div>
      </div>
    </>
  );
};

export default Button;
