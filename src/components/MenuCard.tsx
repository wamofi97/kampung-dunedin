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
      className={`group flex h-fit cursor-pointer flex-col rounded-2xl bg-white/50 shadow-md`}
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
      </div>
      <div className="rounded-b-2xl px-3 py-2 transition-colors duration-500">
        <div className="flex min-h-[70px] items-center gap-2">
          <h2 className="font-heading text-xl font-bold text-secondary">
            {heading}
          </h2>
          <span className="ml-auto">
            <ChevronRight
              className={`${isOpen && "rotate-90"} transition-transform duration-300 group-hover:scale-125`}
            />
          </span>
        </div>
        <div
          className={`grid ${isOpen ? "mb-3 mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows, margin] duration-500`}
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
