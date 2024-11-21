import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MenuSlider from "./MenuSlider";

const Hero = () => {
  return (
    <div className="z-10 flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center gap-2 md:min-h-screen">
      <div className="flex flex-col items-center gap-y-6">
        <h2 className="rounded-full bg-amber-100 px-2 py-1 text-center text-sm text-muted-foreground md:px-4 md:text-base">
          Authentic Malaysian Food in Dunedin
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <div>
            <Image
              src="/logowbackground.webp"
              alt="Logo"
              width="200"
              height="200"
              className="mx-auto rounded-full object-cover"
            />
          </div>
          <div className="w-fit text-center font-heading text-[1.6rem] font-bold leading-none text-emerald-950 sm:text-[2.5rem] md:text-[3.25rem] lg:text-6xl xl:text-7xl">
            <h1>
              Bringing a Taste of{" "}
              <span className="block">
                <span className="bg-[url('/batikhorizontal.png')] bg-clip-text sm:stroke-black sm:stroke-1 sm:text-transparent sm:[-webkit-text-stroke:1px_black]">
                  Malaysia
                </span>{" "}
                to Dunedin.
              </span>
            </h1>
          </div>
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
