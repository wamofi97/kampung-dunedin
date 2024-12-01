import Headingwbackground from "@/components/Headingwbackground";
import Image from "next/image";
import React from "react";
import family from "../../../public/family.webp";

const About = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full flex-col items-center justify-center px-4 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>Our Story</Headingwbackground>

      <div className="max-w-6xl space-y-4 leading-relaxed md:px-8 md:text-xl lg:space-y-8 lg:text-2xl">
        <p>
          Selamat Datang to Kampung Dunedin, where authentic flavours of
          Malaysia meet Dunedin, New Zealand.
        </p>
        <div className="relative h-[50vw] max-h-[525px] min-h-[350px] w-full">
          <Image
            src={family}
            alt="Dunedin"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
          ></Image>
          <p className="text-center"></p>
        </div>
        <p>
          We are a small, family-owned food business with a passion for sharing
          authentic Malaysian cuisine.
        </p>
        <p>
          Our journey began with a simple longing for home – the familiar taste
          of spices, the aroma of pandan and banana leaves, and simple dishes
          that remind us of the vibrant hawker stalls in Malaysia.
        </p>
        <p>
          Being away from our{" "}
          <span className="font-semibold italic">kampung</span> (village) has
          taught us the true meaning of comfort food.
        </p>
        <p>
          It&apos;s not just about the taste, but also, the memories of eating
          together as a community, and stories shared over our meals.
        </p>
        <p>
          We prepare dishes that hold a special place in our hearts (and
          tummies). Our recipes are crafted with care, using authentic
          techniques and passed down through generations.
        </p>
        <p>
          We hope to build a community in Ōtepoti Dunedin through Kampung
          Dunedin.
        </p>
        <p>
          Thank you for supporting our journey. From our kitchen to your home,
          we hope to bring you a taste of our village.{" "}
          <span className="font-semibold italic">Selamat menjamu selera! </span>
        </p>
        <p className="mt-8 text-center text-[0.95rem] font-medium text-gray-900 md:text-lg lg:text-2xl">
          💓 Aunty Anija, Fareez Fauzi & Arina Aizal 💓
        </p>
      </div>
    </div>
  );
};

export default About;
