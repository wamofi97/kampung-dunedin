"use client";
import {
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
  const filter = searchParams.get("filter") || null;
  const currentIndex = ids.indexOf(menu._id);
  const [loading, setLoading] = useState(true);

  const closeModal = () => router.back();

  const navigateTo = (index: number) => {
    const id = ids[index];
    const path = filter ? `/menu/${id}?filter=${filter}` : `/menu/${id}`;
    router.prefetch(path);
    router.replace(path, { scroll: false });
  };

  const handleNavigation = (direction: "next" | "prev") => {
    if (currentIndex !== -1) {
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % ids.length
          : (currentIndex - 1 + ids.length) % ids.length;
      navigateTo(newIndex);
    }
  };

  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNavigation("next");
      if (e.key === "ArrowLeft") handleNavigation("prev");
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleGlobalKeyPress);
    return () => window.removeEventListener("keydown", handleGlobalKeyPress);
  }, [currentIndex, ids]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2 backdrop-blur-sm md:px-12"
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
        <div className="flex h-[83dvh] max-h-[1000px] flex-col items-center gap-x-4 overflow-auto rounded-lg bg-white pb-2 sm:flex-row sm:p-0 sm:pr-2 md:h-[87dvh]">
          <div
            className="relative h-full min-h-[400px] w-full bg-cover bg-center sm:w-2/3 md:w-3/5"
            style={{
              backgroundImage: `url(${menu.blurDataURL})`,
            }}
          >
            {loading && (
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-t-secondary"></div>
              </div>
            )}
            {loading && (
              <div className="absolute inset-0 animate-pulse bg-white opacity-10"></div>
            )}
            <Image
              src={menu.imageUrl}
              alt={menu.altText || menu.name}
              fill
              placeholder="blur"
              blurDataURL={menu.blurDataURL}
              quality={100}
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
              onLoad={() => setLoading(false)}
              className={`transition-filter duration-300 ease-in-out ${
                loading ? "blur-md" : "blur-0"
              } ${
                menu.name.startsWith("Sate") ? "object-bottom" : "object-center"
              } h-auto w-auto rounded-md rounded-b-none object-cover sm:rounded-l-md sm:rounded-r-none`}
            />
          </div>
          <div className="flex flex-col justify-center gap-2 p-2 sm:w-1/3 sm:px-0 md:w-2/5">
            <h2 className="text-center font-heading text-xl font-semibold uppercase text-secondary sm:my-4 sm:text-3xl md:mb-4 md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {menu.name}
            </h2>
            <div className="border-l-4 border-primary pl-2">
              {menu.description.map((item, index) => (
                <p
                  className={`${
                    index === menu.description.length - 1 ? "mb-0" : "mb-4"
                  } text-gray-700 lg:text-lg`}
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:hidden">
          {currentIndex < ids.length - 1 && (
            <Button
              variant={"secondary"}
              size={"lg"}
              onClick={() => handleNavigation("next")}
              className="absolute -bottom-11 right-0 z-10 flex items-center gap-4 rounded-md px-8 text-lg transition-colors hover:text-gray-900"
            >
              <p>Next</p>
              <MoveRight size={30} />
            </Button>
          )}

          {currentIndex > 0 && (
            <Button
              variant={"secondary"}
              size={"lg"}
              onClick={() => handleNavigation("prev")}
              className="absolute -bottom-11 left-0 z-10 flex items-center gap-4 rounded-md px-8 text-lg transition-colors hover:text-gray-900"
            >
              <MoveLeft size={30} />
              <p>Prev</p>
            </Button>
          )}
        </div>
        <div>
          <ChevronRight
            size={40}
            className="absolute -right-12 top-1/2 z-10 hidden cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900 md:flex"
            onClick={() => handleNavigation("next")}
          />
          <ChevronLeft
            size={40}
            className="absolute -left-12 top-1/2 z-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 text-2xl text-gray-600 transition-colors hover:text-gray-900 md:flex"
            onClick={() => handleNavigation("prev")}
          />
        </div>
      </dialog>
    </div>
  );
};

export default DialogMenu;
