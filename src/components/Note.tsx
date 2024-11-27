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
        "mx-auto rounded-lg bg-gradient-to-r from-card to-accent/50 px-6 py-6 text-card-foreground shadow-xl shadow-primary/50",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Note;
