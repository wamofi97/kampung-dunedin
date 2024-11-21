"use client";

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
    <div className="h-fit rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-center font-heading text-xl font-semibold">
        {heading}
      </h2>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative my-4 h-[370px] cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={heading}
          fill
          className="rounded-lg object-cover object-bottom transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className={isOpen ? "block" : "hidden"}>{children}</div>
    </div>
  );
};

export default MenuCard;
