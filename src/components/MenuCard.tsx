"use client";

import Image from "next/image";
import Link from "next/link";
// import React, { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import { useRouter } from "next/navigation";

interface MenuProps {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const MenuCard = ({ menu }: { menu: MenuProps }) => {
  const { _id: id, name, imageUrl, blurDataURL, altText } = menu;
  // const router = useRouter();

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  // });

  // const handleMouseEnter = () => {
  //   if (window.innerWidth > 768) {
  //     router.prefetch(`/menu/${id}`);
  //   }
  // };

  // useEffect(() => {
  //   if (window.innerWidth <= 768) {
  //     if (inView) {
  //       router.prefetch(`/menu/${id}`);
  //     }
  //   }
  // }, [inView, id, router]);

  return (
    <Link
      href={`/menu/${id}`}
      className={`group flex cursor-pointer flex-col rounded-lg bg-white shadow-md`}
      // onMouseEnter={handleMouseEnter}
      // ref={ref}
      scroll={false}
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
          } h-auto w-auto rounded-t-xl object-cover p-1 pb-0 transition-transform duration-500 hover:scale-105`}
        />
      </div>
      <div className="px-3 py-2">
        <h2 className="md:text-md text-center font-heading font-medium text-secondary sm:font-bold lg:text-lg">
          {name}
        </h2>
      </div>
    </Link>
  );
};

export default MenuCard;
