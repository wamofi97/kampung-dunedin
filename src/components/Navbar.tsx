"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 z-20 flex w-full justify-center overflow-x-hidden">
      <div className="flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/"}>
          <Image
            src="/logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="w-32"
          />
        </Link>
        <ul className="hidden gap-8 md:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/review">Review</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <a href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
          <Button className="hidden md:block">Order Now</Button>
        </a>
        <button
          className="z-50 block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Menu
        </button>

        <div
          className={`${!isOpen && "translate-x-full"} fixed right-0 top-0 h-screen w-2/3 bg-neutral-100/95 p-4 py-20 text-2xl shadow transition-all duration-500 sm:w-1/3 md:hidden`}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-12">
            <li>
              <Link
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/review"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Contact
              </Link>
            </li>
            <a href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
              <Button className="">Order Now</Button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
