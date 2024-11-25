"use client";

import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface MenuProps {
  heading: string;
  image: StaticImageData;
  children: React.ReactNode;
}

const MenuCard = ({ heading, image, children }: MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${!isOpen && "h-fit"} group flex cursor-pointer flex-col rounded-lg bg-white/70 p-6 shadow-md md:min-h-[490px]`}
    >
      <div className="relative mb-4 h-[370px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={heading}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="t rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 sm:object-bottom"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex">
          <h2
            className={`${isOpen && "mb-4"} font-heading text-xl font-semibold text-primary-foreground transition-[font-size] duration-500`}
          >
            {heading}
          </h2>
          <span className="ml-auto text-sm text-gray-500">
            <ChevronRight
              className={`${isOpen && "rotate-90"} transition-transform duration-300`}
            />
          </span>
        </div>
        <div
          className={`${isOpen ? "h-full sm:h-[230px] xl:h-[205px]" : "h-0"} overflow-hidden transition-all duration-500`}
        >
          <div
            className={`${isOpen ? "translate-y-0" : "translate-y-full"} transition-transform duration-500`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
