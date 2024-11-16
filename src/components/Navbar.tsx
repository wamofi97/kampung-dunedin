"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Kampung Dunedin</h1>
        <ul className="hidden gap-4 md:flex">
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
        <button
          className="z-10 block md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Menu
        </button>

        <ul
          className={`${!isOpen && "translate-x-full"} absolute right-0 top-0 flex h-screen w-1/2 flex-col items-center justify-center gap-4 p-4 py-20 text-2xl shadow transition-transform duration-500 md:hidden`}
        >
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

        {/* <ul className="flex flex-col gap-4 sm:hidden">
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
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
