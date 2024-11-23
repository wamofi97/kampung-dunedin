import React from "react";
import { cn } from "@/lib/utils";
// import clsx from "clsx";

const Note = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "mx-auto w-fit rounded-lg border-l-8 border-primary bg-gradient-to-r from-background to-accent px-8 py-8",
      )}
    >
      {children}
    </div>
  );
};

export default Note;
