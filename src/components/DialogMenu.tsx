"use client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const DialogMenu = ({ menu, ids }: { menu: MenuItem; ids: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";
  const currentIndex = ids.indexOf(menu._id);
  const [loading, setLoading] = useState(true);

  const closeModal = () => router.back();

  const navigateTo = (index: number) => {
    const id = ids[index];
    router.replace(`/menu/${id}?filter=${filter}`, { scroll: false });
  };

  const handleNext = () => {
    if (currentIndex !== -1) {
      navigateTo((currentIndex + 1) % ids.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== -1) {
      navigateTo((currentIndex - 1 + ids.length) % ids.length);
    }
  };

  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyPress);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyPress);
    };
  }, [currentIndex, ids]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2 md:px-12`}
      onClick={closeModal}
    >
      <dialog
        className="relative w-full max-w-6xl bg-transparent"
        onClick={(e) => e.stopPropagation()}
        open
      >
        <button
          onClick={closeModal}
          className="group absolute -top-12 right-0 z-10 items-center justify-center rounded-full bg-gray-800/80 p-2 text-2xl text-gray-300 transition-colors hover:text-gray-900 sm:right-2 sm:top-2 sm:bg-gray-200/80 sm:text-gray-600"
        >
          <X />
        </button>
        <div className="flex h-[87dvh] max-h-[1000px] flex-col items-center gap-x-4 overflow-auto rounded-lg bg-white p-1 pb-2 sm:flex-row sm:p-0 sm:pr-2">
          <div className="relative h-full min-h-[400px] w-full sm:w-2/3 md:w-3/5">
            {loading && (
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-t-secondary"></div>
              </div>
            )}
            <Image
              src={menu.imageUrl}
              alt={menu.altText || menu.name}
              fill
              placeholder="blur"
              blurDataURL={menu.blurDataURL}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              onLoad={() => setLoading(false)}
              className={`${
                menu.name.startsWith("Sate") ? "object-bottom" : ""
              } h-auto w-auto rounded-md rounded-b-none object-cover sm:rounded-l-md sm:rounded-r-none`}
            />
          </div>
          <div className="flex flex-col justify-center gap-2 p-2 sm:w-1/3 sm:px-0 md:w-2/5">
            <h2 className="text-center font-heading text-xl font-semibold uppercase text-secondary sm:my-4 sm:text-3xl md:mb-4 md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {menu.name}
            </h2>
            <div className="border-l-4 border-primary pl-2">
              {menu.description.map((item: string, index: number) => (
                <p
                  className={`${
                    index === menu.description.length - 1 ? "mb-0" : "mb-4"
                  } text-gray-700 md:text-lg`}
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="mt-2 flex items-center justify-center gap-8 sm:hidden">
          <ChevronLeft
            size={40}
            className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900"
            onClick={handlePrev}
          />
          <ChevronRight
            size={40}
            className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900"
            onClick={handleNext}
          />
        </div> */}
        <div className="">
          <ChevronRight
            size={40}
            className="absolute -bottom-12 right-1/3 z-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900 md:-right-12 md:top-1/2"
            onClick={handleNext}
          />

          <ChevronLeft
            size={40}
            className="absolute -bottom-12 left-1/3 z-10 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900 md:-left-12 md:top-1/2"
            onClick={handlePrev}
          />
        </div>
      </dialog>
    </div>
  );
};

export default DialogMenu;
