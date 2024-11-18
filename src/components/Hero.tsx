import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen items-center justify-center py-32 md:flex">
      <div className="text-center md:space-y-8 md:text-start">
        <h2>Authentic Malaysian Food Delivered to Your Doorstep</h2>
        <h1 className="font-heading text-3xl font-black sm:text-4xl md:text-6xl lg:text-7xl">
          Bringing a Taste of Malaysia to Dunedin!
        </h1>
        <Image
          src="/logo-without-background.svg"
          alt="Logo"
          width={300}
          height={300}
          className="mx-auto block md:hidden"
        />
        <h3 className="text-lg md:text-xl lg:text-3xl">
          Introducing{" "}
          <span className="font-semibold text-amber-900">Kampung Dunedin</span>{" "}
          – bringing authentic Malaysian 🇲🇾 dishes to your doorstep, every
          weekend.
        </h3>
        <div className="my-4 flex justify-center gap-2 md:justify-start md:gap-4">
          <Link href="/menu">
            <Button size="lg" variant="outline">
              Explore our menu
            </Button>
          </Link>
          <Button size="lg">Order Now</Button>
        </div>
      </div>
      {/* <div className="hidden md:block md:w-2/5">
        <Image
          src="/logo-without-background.svg"
          alt="Logo"
          width={500}
          height={500}
        />
      </div> */}
    </div>
  );
};

export default Hero;
