import { X } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2">
      <dialog
        className="relative w-full max-w-5xl rounded-md bg-white p-2"
        open
      >
        <div className="relative mb-4 h-[50vh] min-h-[350px] w-full bg-slate-200 sm:h-[70vh] sm:w-3/5">
          <div className="h-full w-full animate-pulse bg-slate-200"></div>
          <button className="absolute right-1 top-1 z-10 flex items-center justify-center rounded-full bg-gray-200/70 p-2 text-2xl text-gray-600 hover:text-gray-800 sm:right-2 sm:top-2">
            <X />
          </button>
        </div>
        <div className="sm:w-2/5">
          <h2 className="mb-4 h-6 animate-pulse bg-slate-200"></h2>
          <div className="mb-4 h-14 animate-pulse bg-slate-200"></div>
        </div>
      </dialog>
    </div>
  );
};

export default loading;
