import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MenuSlider from "./MenuSlider";

const Hero = () => {
  return (
    <div className="z-10 flex min-h-[80vh] w-full max-w-7xl flex-col items-center justify-center gap-2 md:min-h-screen">
      <div className="flex flex-col items-center gap-y-6 md:w-4/5">
        <h2 className="rounded-full bg-amber-100 px-2 py-1 text-center text-sm text-muted-foreground md:px-4 md:text-base">
          Authentic Malaysian Food in Dunedin
        </h2>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="md:w-1/4">
            <Image
              src="/whitelogo.png"
              alt="Logo"
              width="150"
              height="100"
              className="mx-auto object-cover invert"
            />
          </div>
          <h1 className="w-fit text-center font-heading text-[1.6rem] font-bold text-emerald-950 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Bringing a Taste of <span className="">Malaysia</span> to Dunedin.
          </h1>
        </div>

        <p className="text-center text-lg md:text-xl lg:text-2xl">
          A family-owned food business serving authentic Malaysian dishes to
          your doorstep, every weekend.
        </p>

        <div className="flex justify-center gap-2 sm:hidden md:gap-4">
          <Link href="/menu">
            <Button variant="outline">Explore our menu</Button>
          </Link>
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button variant="default" className="border-2 border-primary">
              Order Now
            </Button>
          </Link>
        </div>

        <div className="my-4 hidden justify-center gap-2 sm:flex md:gap-4">
          <Link href="/menu">
            <Button size="lg" variant="outline">
              Explore our menu
            </Button>
          </Link>
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button
              size="lg"
              variant="default"
              className="border-2 border-primary"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="hidden h-[250px] items-center justify-center md:flex md:max-w-3xl lg:max-w-5xl">
        <MenuSlider />
      </div>
    </div>
  );
};

export default Hero;
