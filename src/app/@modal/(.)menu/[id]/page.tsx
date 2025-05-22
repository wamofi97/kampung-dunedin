import { redirect } from "next/navigation";
import DialogMenu from "@/components/DialogMenu";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY, MENU_QUERY_BY_ID } from "@/sanity/lib/queries";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

const menuCategories = async () => {
  const menu = await client.fetch(MENU_QUERY);
  const mainDishes = menu.filter(
    (item: MenuItem) => item.category === "Main Dishes",
  );
  const sideDishes = menu.filter(
    (item: MenuItem) => item.category === "Side Dishes",
  );

  return { mainDishes, sideDishes };
};

const getMainDishesIds = async (filter: string | null) => {
  const { mainDishes } = await menuCategories();
  const menus = mainDishes;
  const filteredMenus = filter
    ? menus.filter((menu: MenuItem) => {
        if (filter === "rice") return menu.name.toLowerCase().includes("nasi");
        if (filter === "noodles")
          return ["laksa", "mee", "bihun"].some((word) =>
            menu.name.toLowerCase().includes(word),
          );
        if (filter === "other")
          return (
            menu.category === "Main Dishes" &&
            !["nasi", "laksa", "mee", "bihun"].some((word) =>
              menu.name.toLowerCase().includes(word),
            )
          );
        return true; // Default: no filter
      })
    : menus;

  return filteredMenus.map((menu: MenuItem) => menu._id);
};

const getSideDishesIds = async () => {
  const { sideDishes } = await menuCategories();
  return sideDishes.map((menu: MenuItem) => menu._id);
};

const getMenu = async (id: string) => {
  const menu = await client.fetch(MENU_QUERY_BY_ID, { id });
  if (!menu) {
    redirect("/menu");
  }
  return menu;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ filter?: string }>;
}) {
  const id = (await params).id;
  const filter = (await searchParams).filter || null;
  const menu = await getMenu(id);
  const mainDishesIds = await getMainDishesIds(filter);
  const sideDishesIds = await getSideDishesIds();
  const ids = [...mainDishesIds, ...sideDishesIds];

  return <DialogMenu menu={menu} ids={ids} />;
}
