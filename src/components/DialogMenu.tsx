"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface MenuItem {
  menu: {
    _id: string;
    name: string;
    description: string[];
    imageUrl: string;
    blurDataURL: string;
    category: string;
    altText: string;
  };
}

const DialogMenu = ({ menu }: MenuItem) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2"
      onClick={closeModal}
    >
      <dialog
        className="relative w-full max-w-6xl rounded-md bg-white p-2"
        onClick={(e) => e.stopPropagation()}
        open
      >
        <button
          onClick={closeModal}
          className="absolute right-1 top-1 z-10 flex items-center justify-center rounded-full bg-gray-200/70 p-2 text-2xl text-gray-600 hover:text-gray-800 sm:right-2 sm:top-2"
        >
          <X />
        </button>
        <div className="flex max-h-[85vh] flex-col items-center gap-x-4 overflow-auto sm:flex-row">
          <div
            className={`relative h-[50vh] min-h-[350px] w-full sm:h-[80vh] sm:w-3/4 md:w-3/5`}
          >
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 5
              0vw"
              onLoad={() => setLoading(false)}
              className={`${
                menu.name.startsWith("Sate") && "object-bottom"
              } h-auto w-auto object-cover`}
            />
          </div>
          <div className="sm:w-1/4 md:w-2/5">
            <h2 className="my-2 text-center font-heading text-xl font-semibold uppercase text-secondary sm:my-4 sm:text-3xl md:mb-4 md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {menu.name}
            </h2>
            <div className="border-l-4 border-primary pl-2">
              {menu.description.map((item: string, index: number) => (
                <p className="mb-4 text-gray-700 sm:text-lg" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DialogMenu;
