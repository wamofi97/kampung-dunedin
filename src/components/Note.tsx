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
        "mx-auto rounded-lg border-2 border-dotted border-primary bg-amber-100/50 px-6 py-6 text-foreground/80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Note;
