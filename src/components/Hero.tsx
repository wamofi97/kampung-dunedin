import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MenuSlider from "./MenuSlider";

const Hero = () => {
  return (
    <div className="z-10 flex min-h-[90dvh] w-full max-w-6xl flex-col justify-center gap-2 md:min-h-screen">
      <div className="flex flex-col items-center gap-y-4">
        {/* <h2 className="hidden rounded-full border-2 px-2 py-2 text-center text-sm text-muted-foreground sm:block md:px-4 md:text-base">
          Authentic Malaysian Food in Dunedin
        </h2> */}
        <div className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-8 sm:flex-row">
          <div>
            <Image
              src="/whitelogo.webp"
              alt="Logo"
              width="250"
              height="250"
              className="w-60 invert sm:w-36 md:w-44"
            />
          </div>
          {/* <div className="w-fit text-center font-heading text-[1.6rem] font-bold leading-tight text-emerald-950 sm:text-[2.5rem] md:text-[3.25rem] lg:text-6xl xl:text-7xl">
            <h1>
              Bringing a Taste of{" "}
              <span className="block">Malaysia to Dunedin.</span>
            </h1>
          </div> */}
          <div className="w-fit text-center font-heading text-[1.6rem] font-bold leading-tight text-emerald-950 sm:text-[2.5rem] md:text-[3.25rem] lg:text-6xl">
            <h1>
              Taste of Malaysia in
              <span className="block">Dunedin, New Zealand.</span>
            </h1>
          </div>
        </div>

        {/* <p className="text-center text-lg md:text-xl lg:text-2xl">
          A family-owned food business serving authentic Malaysian dishes to
          your doorstep, every weekend.
        </p> */}
        <p className="text-center text-lg md:text-xl lg:text-2xl">
          A Malaysian family bringing authentic Malaysian dishes to your
          doorstep.
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
              Our menu
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

      <div className="hidden items-center justify-center pt-10 md:flex">
        <MenuSlider />
      </div>
    </div>
  );
};

export default Hero;
