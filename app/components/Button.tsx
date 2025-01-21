import React from "react";

const Button = ({
  children,
  buttonType = "primary",
}: {
  children: React.ReactNode;
  buttonType?: string;
}) => {
  const primary = `text-sm bg-red-500 text-white rounded-2xl md:rounded-full`;
  const secondary = `text-md text-green-400 border-2 border-green-400 rounded-lg font-bold`;
  const tertiary = `text-md text-black border-gray-900 font-semibold border-2 rounded-lg rounded-2xl `;
  return (
    <button
      className={`px-4 py-2  gap-2 flex justify-between items-center ${
        buttonType === "primary"
          ? primary
          : buttonType === "secondary"
          ? secondary
          : tertiary
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
