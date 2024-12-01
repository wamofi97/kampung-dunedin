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
      className={`group flex h-fit cursor-pointer flex-col rounded-lg bg-white/50 shadow-md`}
    >
      <div className="relative h-[100vw] min-h-[350px] overflow-hidden rounded-t-lg sm:h-[380px]">
        <Image
          src={image}
          alt={heading}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-auto w-auto rounded-t-lg object-cover object-[0_80%] transition-transform duration-500 group-hover:scale-105 lg:object-center"
        />
      </div>
      <div className="px-3 py-4 transition-colors duration-500 sm:py-0">
        <div className="flex items-center gap-2 sm:min-h-[70px]">
          <h2 className="font-heading text-lg font-bold text-secondary">
            {heading}
          </h2>
          <span className="ml-auto">
            <ChevronRight
              className={`${isOpen && "rotate-90"} transition-transform duration-300 group-hover:scale-125`}
            />
          </span>
        </div>
        <div
          className={`grid ${isOpen ? "grid-rows-[1fr] pb-3 pt-3 sm:pt-0" : "grid-rows-[0fr]"} transition-[grid-template-rows, padding] duration-500`}
        >
          <div className="overflow-hidden border-l-4 border-primary/80 pl-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
