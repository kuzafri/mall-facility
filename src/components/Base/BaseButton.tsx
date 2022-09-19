import React from "react";

type BaseButtonType = {
  label: string;
  className?: string;
  onClick?: () => void;
};

const BaseButton: React.FC<BaseButtonType> = (props) => {
  const { label, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className : ""
      } bg-primary w-full rounded-full text-center py-2 text-white drop-shadow-[8px_8px_8px_rgba(255,170,170)]`}
    >
      {label}
    </button>
  );
};

export default BaseButton;
