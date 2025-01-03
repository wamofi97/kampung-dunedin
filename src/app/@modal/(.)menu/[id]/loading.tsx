import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2 md:px-12">
      <dialog className="relative w-full max-w-6xl bg-transparent" open>
        <div className="flex h-[90dvh] max-h-[1000px] flex-col items-center gap-x-4 overflow-auto rounded-lg bg-white p-1 pb-2 sm:flex-row sm:p-0 sm:pr-4">
          <div className="relative h-1/3 min-h-[400px] w-full sm:h-full sm:w-2/3 md:w-3/5">
            <div className="h-full w-full animate-pulse bg-slate-200"></div>
          </div>
          <div className="flex flex-col justify-center gap-2 p-2 sm:w-1/3 sm:px-0 md:w-2/5">
            <h2 className="mb-4 h-6 animate-pulse bg-slate-200 sm:h-12"></h2>
            <div className="mb-4 h-14 animate-pulse bg-slate-200 sm:h-20"></div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default loading;
