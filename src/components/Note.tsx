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
        "mx-auto rounded-lg border-l-8 border-primary bg-white/50 px-6 py-6 text-foreground/80 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Note;
