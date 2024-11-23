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
      className={`group ${!isOpen && "h-fit"} cursor-pointer grid-flow-row-dense rounded-lg bg-white/70 p-6 shadow-md`}
    >
      <div className="relative my-4 h-[370px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={heading}
          fill
          className="rounded-lg object-cover object-bottom transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-center">
        <h2 className="mb-4 font-heading text-xl font-semibold text-primary-foreground">
          {heading}
        </h2>
        <span className="ml-auto text-sm text-gray-500">
          <ChevronRight
            className={`${isOpen && "rotate-90"} -translate-y-2 transition-transform duration-300 group-hover:scale-125`}
          />
        </span>
      </div>
      <div className={isOpen ? "block" : "hidden"}>{children}</div>
    </div>
  );
};

export default MenuCard;
