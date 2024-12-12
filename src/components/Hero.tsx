import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MenuSlider from "./MenuSlider";
import logowithoutbackground from "../../public/logo-without-background.png";

const Hero = () => {
  return (
    <div className="z-10 flex min-h-[calc(100vh-71px)] w-full max-w-6xl flex-col justify-center px-3 py-8 pb-20 md:px-6 md:pb-8">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="hidden rounded-full border-2 px-2 py-2 text-center text-sm text-muted-foreground sm:block md:text-base">
          <span className="mr-2 rounded-full bg-gradient-to-r from-accent to-primary px-4">
            NEW
          </span>
          {"  "}
          Authentic Malaysian Food in Dunedin
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-4 sm:flex-row">
          <div>
            <Image
              src={logowithoutbackground}
              alt="Logo"
              width="300"
              height="300"
              className="w-60 sm:w-36 md:w-44"
            />
          </div>
          <div className="w-fit text-center font-heading text-[1.6rem] font-bold leading-tight text-emerald-950 sm:text-[2.5rem] md:text-[3.25rem] lg:text-6xl">
            <h1>
              Taste of Malaysia in
              <span className="block">Dunedin, New Zealand.</span>
            </h1>
          </div>
        </div>
        <p className="text-center text-lg opacity-80 md:text-xl lg:text-2xl">
          A Malaysian family bringing authentic Malaysian dishes to your
          doorstep.
        </p>

        <div className="flex justify-center gap-4 sm:hidden">
          <Link href="/menu">
            <Button variant="secondary">Our Menu</Button>
          </Link>
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button variant="default" className="border-2 border-primary">
              Order Now
            </Button>
          </Link>
        </div>

        <div className="my-4 hidden justify-center gap-4 sm:flex">
          <Link href="/menu">
            <Button size="lg" variant="secondary" className="">
              Our Menu
            </Button>
          </Link>
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button size="lg" className="border border-primary">
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="hidden items-center justify-center pt-12 sm:flex">
        <MenuSlider />
      </div>
    </div>
  );
};

export default Hero;
