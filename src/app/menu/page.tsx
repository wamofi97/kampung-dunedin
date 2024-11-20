import Headingwbackground from "@/components/Headingwbackground";
import MenuCard from "@/components/MenuCard";
import Note from "@/components/Note";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 py-12 md:px-6">
      <h1 className="text center texl-xl md:text-3xl">Our Signature Dishes</h1>
      <Headingwbackground>
        Malaysian Flavors You&apos;ll Love
      </Headingwbackground>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MenuCard
          heading="Nasi Lemak Daun Pisang"
          image="/images/nasi-lemak-daun-pisang.webp"
        >
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
        <MenuCard
          heading="Sate Ayam | Chicken Satay"
          image="/images/sate-ayam.webp"
        >
          <p className="mb-4">
            Juicy, marinated chicken skewers grilled to perfection. Served with:
            Nasi Impit: Soft, compressed rice cubes Kuah Kacang: Rich, creamy
            peanut sauce Timun: Fresh cucumber slices Bawang: Crisp onion pieces
          </p>
          <p>
            A timeless Malaysian favorite that&apos;s perfect for any occasion!
          </p>
        </MenuCard>
        <MenuCard
          heading="Sate Daging | Beef Satay "
          image="/images/sate-daging.webp"
        >
          <p className="mb-4">
            Tender, flavorful beef skewers with a smoky char. Paired with: Nasi
            Impit: Soft, compressed rice cubes Kuah Kacang: Signature peanut
            sauce Timun: Crunchy cucumber slices Bawang: Fresh onion pieces
          </p>
          <p>
            A hearty and satisfying classic from Malaysia&apos;s street food
            scene.
          </p>
        </MenuCard>
        <MenuCard
          heading="Nasi Kandar Ayam Madu"
          image="/images/nasikandarayammadu.webp"
        >
          <p className="">
            A beloved favorite from Northern Malaysia, this dish brings the
            authentic flavors of Penang&apos;s Mamak stalls straight to you!
            Wrapped takeaway-style to blend all the flavors perfectly
            (&apos;Baru surrrrr!&apos;), each plate includes:
          </p>
          <ul className="mb-4">
            <li>
              <span className="font-semibold">Nasi Basmati:</span> Fluffy,
              aromatic basmati rice
            </li>
            <li>
              <span className="font-semibold">Ayam Madu:</span> Sweet,
              caramelized chicken
            </li>
            <li>
              <span className="font-semibold">Kuah Kari:</span> Rich, flavorful
              curry gravy
            </li>
            <li>
              <span className="font-semibold">Telur Dadar:</span> Classic
              Mamak-style omelet
            </li>
            <li>
              <span className="font-semibold">Bendi Rebus:</span> Tender boiled
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
          image="/images/nasikandardagingmasakhitammamak.webp"
        >
          <p>
            Another gem from Penang, perfect for beef lovers! Just like the
            Mamak stalls, it&apos;s wrapped takeaway-style to let all the
            delicious flavors blend together. Each serving includes: Nasi
            Basmati: Fluffy, aromatic basmati rice Ayam Madu: Sweet, caramelized
            chicken Kuah Kari: Rich, flavorful curry gravy Telur Dadar: Classic
            Mamak-style omelet Bendi Rebus: Tender boiled okra
          </p>
          <p>
            Optional Add-ons:🥘 Extra kuah campur (mixed gravy) for the ultimate
            &apos;kuah banjir&apos; experience🥬 Fried sayur kobis goreng mamak
            (cabbage) for an added crunch!
          </p>
        </MenuCard>
        <MenuCard
          heading="Aunty Anija's Sambal Obersea"
          image="/images/sambalobersea1.webp"
        >
          <p>
            200g+ pack of crunchy sambal premium ikan bilis kering (dried
            anchovies). Packed with bold Malaysian flavors, it&apos;s perfect as
            a snack or a savory topping for your favorite dishes.
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
