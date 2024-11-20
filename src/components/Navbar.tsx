"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Review",
      link: "/review",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 flex w-full justify-center overflow-x-hidden bg-lime-900">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-32 invert"
          />
        </Link>
        <div className="flex gap-8 font-heading uppercase text-white lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`${pathname === link.link ? "font-bold text-primary" : "font-normal"} hidden text-lg transition-colors duration-300 hover:text-amber-400 md:block`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
          <Button className="hidden md:block">Order Now</Button>
        </a>
        <button
          className="z-50 block text-primary md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        <div
          className={`${!isOpen && "translate-x-full"} fixed right-0 top-20 h-screen w-2/3 space-y-20 bg-neutral-100/95 p-4 py-32 text-2xl shadow transition-all duration-500 sm:w-1/3 md:hidden`}
        >
          <div className="flex flex-col items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className={`${pathname === link.link && "font-semibold text-primary"} w-fit`}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
              <Button size="lg" className="">
                Order Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
