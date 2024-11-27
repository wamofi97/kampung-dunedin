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
      className={`${!isOpen && "h-fit"} group flex min-h-[460px] cursor-pointer flex-col rounded-2xl`}
    >
      <div className="relative h-[380px] overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={heading}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-105 sm:object-bottom"
        />
        {/* <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent via-60% to-black opacity-80"></div> */}
      </div>
      <div
        className={`flex flex-col rounded-b-2xl bg-white/70 p-3 shadow-md transition-colors duration-500`}
      >
        <div className="flex min-h-[70px] items-center px-2">
          <h2
            className={`mb-2 font-heading text-xl font-bold text-emerald-900 transition-[margin] duration-500`}
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
          className={`${isOpen ? "h-auto pb-3 sm:h-[240px] md:h-[230px]" : "h-0"} overflow-hidden transition-all duration-700`}
        >
          <div
            className={`${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} border-l-4 border-primary/80 pl-3 transition-all duration-700`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
