"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface MenuProps {
  heading: string;
  image: string;
  children: React.ReactNode;
}

const MenuCard = ({ heading, image, children }: MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group flex h-fit cursor-pointer flex-col rounded-lg bg-white shadow-md`}
    >
      <div className="relative h-[90vw] min-h-[350px] overflow-hidden rounded-t-xl sm:h-[375px]">
        <Image
          src={image}
          alt={heading}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${heading.startsWith("Sate") && "object-bottom"} h-auto w-auto rounded-t-xl object-cover p-1 pb-0 transition-transform duration-500 hover:scale-105`}
        />
      </div>
      <div className="px-3 py-4 transition-colors duration-500 sm:py-3">
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
