import { buttonProps } from "@/types";
import clsx from "clsx";
import React from "react";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
  ...props
}: buttonProps) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton &&
            "text-slate-500  focus:ring-4 font-medium  text-sm px-5 py-2.5 mb-2 me-2 focus: outline-none",
          `text-white font-bold ${bgColor} hover:${bgColor}  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`
        )}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
