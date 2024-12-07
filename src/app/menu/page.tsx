import Headingwbackground from "@/components/Headingwbackground";
import MenuCard from "@/components/MenuCard";
import Note from "@/components/Note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import nasilemakdaunpisang from "../../../public/images/nasi-lemak-daun-pisang.webp";
// import sateayam from "../../../public/images/sate-ayam.webp";
// import satedaging from "../../../public/images/sate-daging.webp";
// import nasikandarayammadu from "../../../public/images/nasikandarayammadu.webp";
// import nasikandardagingmasakhitammamak from "../../../public/images/nasikandardagingmasakhitammamak.webp";
// import sambalobersea from "../../../public/images/sambalobersea.webp";
// import nasilemakayamrendang from "../../../public/images/nasilemakayamrendang.webp";
// import karipap from "../../../public/images/karipap.webp";
import { client } from "@/sanity/lib/client";
import { MENU_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface MenuItem {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  description: string[];
}

const Menu = async () => {
  const menu = await client.fetch(MENU_QUERY, {
    revalidate: 30,
  });

  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center justify-center px-3 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>
        Malaysian Flavours You&apos;ll Love
      </Headingwbackground>

      <div className="mb-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((item: MenuItem) => {
          return (
            <MenuCard
              key={item._id}
              heading={item.name}
              image={urlFor(item.image).url()}
            >
              {item.description.map((item: string, i: number) => (
                <p key={i} className="mb-2">
                  {item}
                </p>
              ))}
            </MenuCard>
          );
        })}
      </div>

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
