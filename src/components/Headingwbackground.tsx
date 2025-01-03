import { cn } from "@/lib/utils";
import React from "react";

const Headingwbackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "mb-8 w-full rounded-xl py-3 text-center font-heading text-3xl font-bold text-emerald-950/80 sm:text-4xl md:mb-16 lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Headingwbackground;
