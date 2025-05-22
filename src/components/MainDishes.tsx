"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MenuCard from "./MenuCard";
import { Button } from "./ui/button";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const MainDishes = ({ mainDishes }: { mainDishes: MenuItem[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [menu, setMenu] = useState<MenuItem[]>(mainDishes);
  const [activeButton, setActiveButton] = useState<string>("all");

  const originalMenu = mainDishes;
  const filterNasi = mainDishes.filter((item: MenuItem) =>
    item.name.toLowerCase().includes("nasi"),
  );
  const filterNoodles = mainDishes.filter((item: MenuItem) =>
    ["laksa", "mee", "bihun"].some((word) =>
      item.name.toLowerCase().includes(word),
    ),
  );
  const filterOther = mainDishes.filter(
    (item: MenuItem) =>
      !["nasi", "laksa", "mee", "bihun"].some((word) =>
        item.name.toLowerCase().includes(word),
      ),
  );

  // Update the menu based on the filter type in the URL
  useEffect(() => {
    const filter = searchParams.get("filter") || undefined;

    if (!filter) {
      setMenu(originalMenu);
      setActiveButton("all");
      return;
    }
    if (filter === "rice") {
      setMenu(filterNasi);
      setActiveButton("rice");
    } else if (filter === "noodles") {
      setMenu(filterNoodles);
      setActiveButton("noodles");
    } else if (filter === "other") {
      setMenu(filterOther);
      setActiveButton("other");
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateFilter = (filter?: string) => {
    if (!filter) {
      router.replace("/menu", { scroll: false });
      return;
    }
    router.replace(`?filter=${filter}`, { scroll: false });
  };

  const openModal = (id: string) => {
    const filter = searchParams.get("filter") || null;
    if (!filter) {
      router.push(`/menu/${id}`, { scroll: false });
      return;
    }
    router.push(`/menu/${id}?filter=${filter}`, { scroll: false });
  };

  return (
    <div className="mb-8 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        <hr className="w-full -translate-y-2 border border-secondary sm:-translate-y-3" />
        <h3 className="mx-auto mb-2 w-fit text-nowrap rounded-full border-2 border-secondary px-8 py-2 font-heading text-2xl font-medium uppercase text-secondary sm:mb-8 sm:text-start sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
          Main Dishes
        </h3>
        <hr className="w-full -translate-y-2 border border-secondary sm:-translate-y-3" />
      </div>
      <div className="mb-4 flex items-center justify-center gap-2 sm:gap-4">
        <Button
          variant={activeButton === "all" ? "secondary" : "outline"}
          onClick={() => updateFilter()}
        >
          All
        </Button>
        <Button
          variant={activeButton === "rice" ? "secondary" : "outline"}
          onClick={() => updateFilter("rice")}
        >
          Rice
        </Button>
        <Button
          variant={activeButton === "noodles" ? "secondary" : "outline"}
          onClick={() => updateFilter("noodles")}
        >
          Noodles
        </Button>
        <Button
          variant={activeButton === "other" ? "secondary" : "outline"}
          onClick={() => updateFilter("other")}
        >
          Other
        </Button>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {menu.map((item: MenuItem) => {
          return <MenuCard key={item._id} menu={item} openModal={openModal} />;
        })}
      </div>
    </div>
  );
};

export default MainDishes;
