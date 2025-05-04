import React from 'react';

export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className="flex-1 px-4 py-3 h-12 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
    />
  );
};

export default Input;