import React from 'react';
import clsx from 'clsx';

export interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | React.ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

const Button = ({ type = "button", text, onClick, actionButton, bgColor }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "text-black font-bold rounded-lg text-sm px-6 h-12 focus:outline-none align-middle",
        bgColor ?? "bg-gradient-to-r from-white to-gray-300",
        actionButton ? "hover:from-gray-200 hover:to-gray-100 focus:ring-4" : "hover:opacity-90"
      )}
      
    >
      {text}
    </button>
  );
};

export default Button;
