import Headingwbackground from "@/components/Headingwbackground";
import MenuCard from "@/components/MenuCard";
import Note from "@/components/Note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import nasilemakdaunpisang from "../../../public/images/nasi-lemak-daun-pisang.webp";
import sateayam from "../../../public/images/sate-ayam.webp";
import satedaging from "../../../public/images/sate-daging.webp";
import nasikandarayammadu from "../../../public/images/nasikandarayammadu.webp";
import nasikandardagingmasakhitammamak from "../../../public/images/nasikandardagingmasakhitammamak.webp";
import sambalobersea from "../../../public/images/sambalobersea.webp";

const Menu = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 py-12 md:min-h-[calc(100vh-257px)] md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>
        Malaysian Flavours You&apos;ll Love
      </Headingwbackground>

      <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            heading: "Nasi Lemak Daun Pisang",
            image: nasilemakdaunpisang,
            content: (
              <>
                <p className="mb-4">
                  Our national dish and a favorite for any meal of the day!
                  Aromatic basmati rice infused with coconut milk and pandan
                  leaves.
                </p>
                <p>
                  Served with boiled egg, crispy anchovies, roasted peanuts,
                  fresh cucumber, and spicy sambal, all bundled in banana
                  leaves.
                </p>
              </>
            ),
          },
          {
            heading: "Sate Ayam | Chicken Satay",
            image: sateayam,
            content: (
              <>
                <p className="mb-4">
                  Our chicken satay is marinated with spices, served with soft,
                  compressed rice cubes, a rich peanut sauce, and fresh cucumber
                  and onions on the side
                </p>
                <p>Perfect for sharing with friends and whanau!</p>
              </>
            ),
          },
          {
            heading: "Sate Daging | Beef Satay",
            image: satedaging,
            content: (
              <>
                <p className="mb-4">
                  Our beef satay is marinated with spices, served with soft,
                  compressed rice cubes, a rich peanut sauce, and fresh cucumber
                  and onions on the side.
                </p>
                <p>
                  A timeless Malaysian favorite that&apos;s perfect for any
                  occasion!
                </p>
              </>
            ),
          },
          {
            heading: "Nasi Kandar Ayam Madu",
            image: nasikandarayammadu,
            content: (
              <>
                <p className="mb-4">
                  A beloved favorite from Northern Malaysia, bringing flavours
                  of Penang&apos;s Mamak stalls straight to you! Wrapped
                  takeaway-style to blend all the flavours perfectly.
                </p>
                <p>
                  Basmati rice with ayam madu (sweet caramelized chicken) with
                  curry gravy, Mamak-style omelet and boiled okra.
                </p>
              </>
            ),
          },
          {
            heading: "Nasi Kandar Daging Masak Hitam Mamak",
            image: nasikandardagingmasakhitammamak,
            content: (
              <>
                <p className="mb-4">
                  Another gem from Penang, perfect for beef lovers! Just like
                  the Mamak stalls, it&apos;s wrapped takeaway-style to let all
                  the delicious flavours blend together.
                </p>
                <p>
                  Basmati rice with daging masak hitam mamak (mamak style soy
                  beef) with curry gravy, Mamak-style omelet and boiled okra.
                </p>
              </>
            ),
          },
          {
            heading: "Aunty Anija's Sambal Obersea",
            image: sambalobersea,
            content: (
              <>
                <p className="mb-4">
                  200g+ pack of crunchy sambal premium ikan bilis kering (dried
                  anchovies).
                </p>
                <p>
                  Packed with bold Malaysian flavours, it&apos;s perfect as a
                  snack or a savory topping for your favorite dishes.
                </p>
              </>
            ),
          },
        ].map((item, index) => (
          <MenuCard key={index} heading={item.heading} image={item.image}>
            {item.content}
          </MenuCard>
        ))}
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
        <Link href="https:bit.ly/WhatsAppKampungDunedin" target="_blank">
          <Button size="lg" className="mt-8 w-full">
            Order now
          </Button>
        </Link>
      </Note>
    </div>
  );
};

export default Menu;
