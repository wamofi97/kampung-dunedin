import Headingwbackground from "@/components/Headingwbackground";
import MenuCard from "@/components/MenuCard";
import Note from "@/components/Note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import MainDishes from "@/components/MainDishes";
import { Suspense } from "react";
import SideDishes from "@/components/SideDishes";

export const metadata: Metadata = {
  title: "Menu",
  description: "Discover Malaysian Flavours You'll Love",
  alternates: {
    canonical: "https://kampungdunedin.nz/menu",
  },
};

export const revalidate = 60;

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const Menu = async () => {
  const menu = await client.fetch(MENU_QUERY);
  const mainDishes = menu.filter(
    (item: MenuItem) => item.category === "Main Dishes",
  );
  const sideDishes = menu.filter(
    (item: MenuItem) => item.category === "Side Dishes",
  );

  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center justify-center px-3 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>
        Malaysian Flavours You&apos;ll Love
      </Headingwbackground>

      {/* mainDishes */}
      <Suspense
        fallback={
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-secondary"></div>
        }
      >
        <MainDishes mainDishes={mainDishes} />
      </Suspense>

      {/* sideDishes */}
      <SideDishes sideDishes={sideDishes} />

      <Note>
        <h3 className="mb-2 text-xl font-medium">
          And there&apos;s more to come!
        </h3>
        <p className="text-lg">
          We&apos;re trialing exciting new dishes each week to bring you even
          more flavours of Malaysia. Join our WhatsApp group for updates on our
          weekly menus!
        </p>
        <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
          <Button size="lg" className="mt-8 w-full">
            Order now
          </Button>
        </Link>
      </Note>
    </div>
  );
};

export default Menu;
