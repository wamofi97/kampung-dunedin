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

const getMenuIds = async () => {
  const menus = await client.fetch(MENU_QUERY);
  const sortedMenus = menus.sort((a: MenuItem, b: MenuItem) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
  });
  const ids = sortedMenus.map((menu: MenuItem) => menu._id);
  return ids;
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
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const [menu, ids] = await Promise.all([getMenu(id), getMenuIds()]);

  return <DialogMenu menu={menu} ids={ids} />;
}
