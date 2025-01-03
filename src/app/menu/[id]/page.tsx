import { client } from "@/sanity/lib/client";
import { MENU_QUERY, MENU_QUERY_BY_ID } from "@/sanity/lib/queries";
import { Metadata } from "next";
import Image from "next/image";

interface MenuItem {
  _id: string;
  name: string;
  description: string[];
  imageUrl: string;
  blurDataURL: string;
  category: string;
  altText: string;
}

export const generateStaticParams = async () => {
  const menus = await client.fetch(MENU_QUERY);
  return menus.map((menu: MenuItem) => ({ id: menu._id }));
};

const getMenu = async (id: string) => {
  const menu = await client.fetch(MENU_QUERY_BY_ID, { id });
  return menu;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const menu: MenuItem = await getMenu(id);
  return {
    title: { absolute: menu.name + " - Kampung Dunedin" },
    keywords: menu.name + " - Kampung Dunedin",
    description: `Discover more about ${menu.name} at Kampung Dunedin`,
    openGraph: {
      title: menu.name + " - Kampung Dunedin",
      description: `Discover more about ${menu.name} at Kampung Dunedin`,
      images: [menu.imageUrl],
      siteName: "Kampung Dunedin",
      type: "website",
      url: `https://kampungdunedin.nz/menu/${id}`,
    },
    alternates: {
      canonical: `https://kampungdunedin.nz/menu/${id}`,
    },
  };
}

export const revalidate = 120;

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const menu: MenuItem = await getMenu(id);
  const { imageUrl, altText, blurDataURL, name, description } = menu;

  return (
    <>
      <div className="mx-auto min-h-[calc(100vh-161px)] w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-x-8 gap-y-4 p-2 sm:flex-row sm:p-4">
          <div className="relative h-[60vh] max-h-[800px] w-full overflow-hidden sm:h-[85vh] sm:w-3/5">
            <Image
              src={imageUrl}
              alt={altText || name}
              fill
              placeholder="blur"
              blurDataURL={blurDataURL}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`${name.startsWith("Sate") && "object-bottom"} h-auto w-auto rounded-md object-cover`}
            />
          </div>
          <div className="sm:w-2/5">
            <h2 className="mb-4 text-center font-heading text-2xl font-semibold uppercase text-secondary sm:mb-8 sm:text-start sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {name}
            </h2>
            <div className="border-l-4 border-primary pl-2">
              {description.map((item, index) => (
                <p className="mb-4 md:text-lg" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
