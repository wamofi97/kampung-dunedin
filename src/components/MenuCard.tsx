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
      className={`group flex cursor-pointer flex-col border-b-2 pb-3`}
    >
      <div className="relative mb-4 h-[380px] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={heading}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 sm:object-bottom"
        />
        {/* <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent via-60% to-black opacity-80"></div> */}
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <h2
            className={`mb-4 font-heading text-xl font-semibold text-emerald-900 transition-[font-size] duration-500`}
          >
            {heading}
          </h2>
          <span className="ml-auto">
            <ChevronRight
              className={`${isOpen && "rotate-90"} transition-transform duration-300 group-hover:scale-125`}
            />
          </span>
        </div>
        <div
          className={`${isOpen ? "h-auto sm:h-[240px] md:h-[210px]" : "h-0"} overflow-hidden transition-all duration-500`}
        >
          <div
            className={`${isOpen ? "translate-y-0" : "-translate-y-full"} border-l-4 border-primary/80 pl-3 transition-transform duration-500`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
