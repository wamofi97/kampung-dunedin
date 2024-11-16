import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
