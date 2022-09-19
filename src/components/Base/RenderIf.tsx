import React from "react";

type RenderComponent = {
  render: React.ReactNode;
};

interface RenderIfProps {
  condition: boolean | string;
  children?: React.ReactNode;
  if?: RenderComponent;
  else?: RenderComponent;
}

const RenderIf: React.FC<RenderIfProps> = (props) => {
  return (
    <>
      {props.if?.render
        ? props.condition
          ? props.if?.render
          : props.else?.render
        : props.condition && props.children}
    </>
  );
};

export default RenderIf;
