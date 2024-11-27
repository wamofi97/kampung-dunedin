"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      name: "Our Story",
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
    <nav className="sticky top-0 z-20 flex w-full justify-center overflow-x-hidden bg-emerald-900 shadow-md">
      <div className="flex w-full max-w-6xl items-center justify-between px-3 py-4 md:px-6">
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={120}
            height={40}
            className="w-28"
          />
        </Link>
        <div className="hidden gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`${pathname === link.link ? "font-medium text-primary" : ""} text-accent transition-colors duration-300 hover:text-amber-300 lg:text-lg`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a
          href="https://bit.ly/WhatsAppKampungDunedin"
          target="_blank"
          className="hidden md:block"
        >
          <Button>Order Now</Button>
        </a>

        <button
          className="z-50 block text-accent md:hidden"
          aria-label="Toggle Menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        <div
          className={`${!isOpen && "translate-x-full"} fixed right-0 top-[71px] flex h-screen w-screen justify-end text-accent transition-all duration-700 md:hidden`}
        >
          <div
            className="w-1/3 sm:w-1/2"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <div
            className={`h-screen w-2/3 space-y-20 bg-emerald-900/95 sm:w-1/2`}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className={`${pathname === link.link && "font-semibold text-primary"} w-fit text-2xl`}
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
            <div className="flex justify-center gap-8">
              <a
                href="https://instagram.com/kampungdunedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568764888910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>

              <a href="mailto:kampungdunedin@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
