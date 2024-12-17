import { client } from "@/sanity/lib/client";
import { MENU_QUERY_BY_ID } from "@/sanity/lib/queries";
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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const menu: MenuItem = await client.fetch(MENU_QUERY_BY_ID, { id });

  const { imageUrl, altText, blurDataURL, name, description } = menu;
  // console.log(menu);
  return (
    <>
      <div className="mx-auto min-h-[calc(100vh-161px)] w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-x-8 gap-y-4 px-4 py-10 sm:flex-row">
          <div className="relative h-[75vh] max-h-[800px] w-full overflow-hidden sm:w-3/5">
            <Image
              src={imageUrl}
              alt={altText || name}
              fill
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`${name.startsWith("Sate") && "object-bottom"} h-auto w-auto object-cover`}
            />
          </div>
          <div className="sm:w-2/5">
            <h2 className="mb-4 text-center font-heading text-2xl font-semibold uppercase text-secondary sm:mb-8 sm:text-start sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
              {name}
            </h2>
            {description.map((item, index) => (
              <p className="mb-4" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
