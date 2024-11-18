import React from "react";

const Headingwbackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-8 w-full rounded-xl py-3 text-center uppercase md:mb-16">
      <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
        {children}
      </h2>
    </div>
  );
};

export default Headingwbackground;
