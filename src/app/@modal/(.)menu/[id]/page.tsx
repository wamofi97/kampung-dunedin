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

const getFilteredMenuIds = async (filter?: string) => {
  const menus = await client.fetch(MENU_QUERY);
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
  const filter = (await searchParams).filter || "all";
  const [menu, ids] = await Promise.all([
    getMenu(id),
    getFilteredMenuIds(filter),
  ]);

  return <DialogMenu menu={menu} ids={ids} />;
}
