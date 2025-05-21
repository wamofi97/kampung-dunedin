"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

interface MenuProps {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

interface MenuCardProps {
  menu: MenuProps;
  openModal?: (id: string) => void;
}

const MenuCard = ({ menu, openModal }: MenuCardProps) => {
  const { _id: id, name, imageUrl, blurDataURL, altText } = menu;

  const router = useRouter();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      router.prefetch(`/menu/${id}`);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (inView) {
        router.prefetch(`/menu/${id}`);
      }
    }
  }, [inView, id, router]);

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openModal?.(id);
      }}
      onMouseEnter={handleMouseEnter}
      className="group flex cursor-pointer flex-col rounded-2xl border-2 border-neutral-200/80 bg-white p-1 transition-shadow duration-500 hover:shadow-md"
      ref={ref}
    >
      <div className="relative h-[50vw] overflow-hidden rounded-t-xl sm:h-[300px]">
        <Image
          src={imageUrl}
          alt={altText || name}
          fill
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${
            name.startsWith("Sate") && "object-bottom"
          } h-auto w-auto rounded-t-sm object-cover transition-transform duration-500 group-hover:scale-105 sm:rounded-t-xl`}
        />
      </div>
      <div className="px-3 py-2">
        <h2 className="md:text-md text-center font-heading font-medium text-secondary lg:text-lg">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default MenuCard;
