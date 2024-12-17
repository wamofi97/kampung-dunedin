import DialogMenu from "@/components/DialogMenu";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY_BY_ID } from "@/sanity/lib/queries";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

export const revalidate = 120;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const menu: MenuItem = await client.fetch(MENU_QUERY_BY_ID, { id });

  return <DialogMenu menu={menu} />;
}
