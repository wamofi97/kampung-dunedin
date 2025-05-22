"use client";
import { useRouter } from "next/navigation";
import MenuCard from "./MenuCard";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const SideDishes = ({ sideDishes }: { sideDishes: MenuItem[] }) => {
  const router = useRouter();

  return (
    <div className="mb-8 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        <hr className="w-full -translate-y-2 border border-secondary sm:-translate-y-3" />
        <h3 className="mx-auto mb-2 w-fit text-nowrap rounded-full border-2 border-secondary px-8 py-2 font-heading text-2xl font-medium uppercase text-secondary sm:mb-8 sm:text-start sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
          Side Dishes
        </h3>
        <hr className="w-full -translate-y-2 border border-secondary sm:-translate-y-3" />
      </div>

      <div className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {sideDishes.map((item: MenuItem) => {
          return <MenuCard key={item._id} menu={item} />;
        })}
      </div>
    </div>
  );
};

export default SideDishes;
