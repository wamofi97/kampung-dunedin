import React from "react";

const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-fit rounded-xl border-0 border-l-8 border-primary bg-gradient-to-r from-neutral-100 to-neutral-200 px-8 py-8">
      <div className="">{children}</div>
    </div>
  );
};

export default Note;
