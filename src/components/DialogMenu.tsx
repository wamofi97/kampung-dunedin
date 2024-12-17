"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-md bg-white p-4 shadow-lg transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 z-10 flex items-center justify-center rounded-full bg-gray-200/80 px-3 py-1 text-2xl font-bold text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="flex flex-col items-center gap-x-4 md:flex-row">
          <div className="relative h-[50vh] w-full overflow-hidden md:h-[70vh] md:w-3/5">
            <Image
              src={menu.imageUrl}
              alt={menu.altText || menu.name}
              fill
              placeholder="blur"
              blurDataURL={menu.blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`${
                menu.name.startsWith("Sate") && "object-bottom"
              } h-auto w-auto object-cover`}
            />
          </div>
          <div className="md:w-2/5">
            <h2 className="my-4 text-center font-heading text-2xl font-semibold uppercase text-secondary sm:mb-8 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {menu.name}
            </h2>
            <div className="border-l-4 border-primary pl-2">
              {menu.description.map((item: string, index: number) => (
                <p
                  className={`mb-${
                    index === menu.description.length - 1 ? "0" : "4"
                  } text-gray-700 md:text-lg`}
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogMenu;
