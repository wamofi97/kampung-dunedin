import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2">
      <dialog
        className="relative w-full max-w-5xl rounded-md bg-white p-2"
        open
      >
        <div className="flex max-h-[85vh] flex-col items-center gap-x-4 overflow-auto sm:flex-row">
          <div className="relative h-[50vh] min-h-[350px] w-full bg-slate-200 sm:h-[70vh] sm:w-3/5">
            <div className="h-full w-full animate-pulse bg-slate-200"></div>
          </div>
          <div className="sm:w-2/5">
            <h2 className="mb-4 h-6 animate-pulse bg-slate-200 sm:h-12"></h2>
            <div className="mb-4 h-14 animate-pulse bg-slate-200 sm:h-20"></div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default loading;
