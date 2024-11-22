import Headingwbackground from "@/components/Headingwbackground";
import MenuCard from "@/components/MenuCard";
import Note from "@/components/Note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import nasilemakdaunpisang from "../../../public/images/nasi-lemak-daun-pisang.webp";
import sateayam from "../../../public/images/sate-ayam.webp";
import satedaging from "../../../public/images/sate-daging.webp";
import nasikandarayammadu from "../../../public/images/nasikandarayammadu.webp";
import nasikandardagingmasakhitammamak from "../../../public/images/nasikandardagingmasakhitammamak.webp";
import sambalobersea from "../../../public/images/sambalobersea.webp";

const Menu = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 py-12 md:px-6">
      <h1 className="text center texl-xl md:text-3xl">Our Signature Dishes</h1>
      <Headingwbackground>
        Malaysian Flavors You&apos;ll Love
      </Headingwbackground>

      <div className="mb-8 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <MenuCard heading="Nasi Lemak Daun Pisang" image={nasilemakdaunpisang}>
          <p className="mb-4">
            Our national dish, wrapped in tradition. Fragrant coconut rice
            steamed with pandan leaves, served with a boiled egg, crispy
            anchovies, roasted peanuts, and spicy sambal, all bundled in a
            banana leaf.
          </p>
          <ul className="">
            Optional:
            <li> 🍗 Add on fried chicken </li>
            <li> 🌶️ Add on extra sambal on the side </li>
          </ul>
        </MenuCard>
        <MenuCard heading="Sate Ayam | Chicken Satay" image={sateayam}>
          <p className="mb-4">
            Juicy, marinated chicken skewers grilled to perfection. Served with:
          </p>
          <ul className="mb-4">
            <li>
              <span className="font-medium">Nasi Impit:</span> Soft, compressed
              rice cubes
            </li>
            <li>
              <span className="font-medium">Kuah Kacang:</span> Rich, creamy
              peanut sauce
            </li>
            <li>
              <span className="font-medium">Timun:</span> Fresh cucumber slices
            </li>
            <li>
              <span className="font-medium">Bawang:</span> Crisp onion pieces
            </li>
          </ul>
          <p>
            A timeless Malaysian favorite that&apos;s perfect for any occasion!
          </p>
        </MenuCard>
        <MenuCard heading="Sate Daging | Beef Satay " image={satedaging}>
          <p className="mb-4">
            Tender, flavorful beef skewers with a smoky char. Served with:
          </p>
          <ul className="mb-4">
            <li>
              <span className="font-medium">Nasi Impit:</span> Soft, compressed
              rice cubes
            </li>
            <li>
              <span className="font-medium">Kuah Kacang:</span> Rich, creamy
              peanut sauce
            </li>
            <li>
              <span className="font-medium">Timun:</span> Fresh cucumber slices
            </li>
            <li>
              <span className="font-medium">Bawang:</span> Crisp onion pieces
            </li>
          </ul>
          <p>
            A hearty and satisfying classic from Malaysia&apos;s street food
            scene.
          </p>
        </MenuCard>
        <MenuCard heading="Nasi Kandar Ayam Madu" image={nasikandarayammadu}>
          <p className="mb-4">
            A beloved favorite from Northern Malaysia, this dish brings the
            authentic flavors of Penang&apos;s Mamak stalls straight to you!
            Wrapped takeaway-style to blend all the flavors perfectly
            (&apos;Baru surrrrr!&apos;), each plate includes:
          </p>
          <ul className="mb-4">
            <li>
              <span className="font-medium">Nasi Basmati:</span> Fluffy,
              aromatic basmati rice
            </li>
            <li>
              <span className="font-medium">Ayam Madu:</span> Sweet, caramelized
              chicken
            </li>
            <li>
              <span className="font-medium">Kuah Kari:</span> Rich, flavorful
              curry gravy
            </li>
            <li>
              <span className="font-medium">Telur Dadar:</span> Classic
              Mamak-style omelet
            </li>
            <li>
              <span className="font-medium">Bendi Rebus:</span> Tender boiled
              okra
            </li>
          </ul>
          <ul>
            Optional Add-ons:
            <li>
              🥘 Extra kuah campur (mixed gravy) for the ultimate &apos;kuah
              banjir&apos; experience
            </li>
            <li>
              🍗 Fried sayur kobis goreng mamak (cabbage) for an added crunch!
            </li>
          </ul>
        </MenuCard>
        <MenuCard
          heading="Nasi Kandar Daging Masak Hitam Mamak"
          image={nasikandardagingmasakhitammamak}
        >
          <p className="mb-4">
            Another gem from Penang, perfect for beef lovers! Just like the
            Mamak stalls, it&apos;s wrapped takeaway-style to let all the
            delicious flavors blend together. Each serving includes:
          </p>
          <ul className="mb-4">
            <li>
              <span className="font-medium">Nasi Basmati:</span> Fluffy,
              aromatic basmati rice
            </li>
            <li>
              <span className="font-medium">Ayam Madu:</span> Sweet, caramelized
              chicken
            </li>
            <li>
              <span className="font-medium">Kuah Kari:</span> Rich, flavorful
              curry gravy
            </li>
            <li>
              <span className="font-medium">Telur Dadar:</span> Classic
              Mamak-style omelet
            </li>
            <li>
              <span className="font-medium">Bendi Rebus:</span> Tender boiled
              okra
            </li>
          </ul>
          <ul>
            Optional Add-ons:
            <li>
              🥘 Extra kuah campur (mixed gravy) for the ultimate &apos;kuah
              banjir&apos; experience
            </li>
            <li>
              🍗 Fried sayur kobis goreng mamak (cabbage) for an added crunch!
            </li>
          </ul>
        </MenuCard>
        <MenuCard heading="Aunty Anija's Sambal Obersea" image={sambalobersea}>
          <p className="mb-4">
            200g+ pack of crunchy sambal premium ikan bilis kering (dried
            anchovies).
          </p>
          <p>
            Packed with bold Malaysian flavors, it&apos;s perfect as a snack or
            a savory topping for your favorite dishes.
          </p>
        </MenuCard>
      </div>
      <Note>
        <h3 className="text-2xl font-bold">And there&apos;s more to come!</h3>
        <p>
          We&apos;re trialing exciting new dishes each week to bring you even
          more flavors of Malaysia. Stay tuned for updates on our weekly menus!
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
