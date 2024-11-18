import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen items-center justify-center gap-x-8 py-32 md:flex">
      <div className="text-center md:w-3/5 md:space-y-8 md:text-start">
        <h2>Authentic Malaysian Food Delivered to Your Doorstep</h2>
        <h1 className="font-heading text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
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
      <div className="relative hidden h-[450px] md:block md:w-2/5">
        <Image
          src="/logo-without-background.svg"
          alt="Logo"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
