import React from "react";

type BaseButtonConfirmationType = {
  label: string;
  className?: string;
  onClick?: () => void;
};

const BaseButtonConfirmation: React.FC<BaseButtonConfirmationType> = (
  props
) => {
  const { label, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className : ""
      } bg-primary w-full rounded-full text-center py-2 text-white `}
    >
      {label}
    </button>
  );
};

export default BaseButtonConfirmation;
