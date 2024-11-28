import Headingwbackground from "@/components/Headingwbackground";
import Image from "next/image";
import React from "react";
import family from "../../../public/family.webp";

const About = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center justify-center px-4 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>Our Story</Headingwbackground>

      <div className="relative md:px-12 lg:px-20">
        {/* <div className="absolute inset-0 bg-[url('/batik.webp')] opacity-30"></div> */}
        <p className="mb-4 leading-relaxed md:text-lg">
          Welcome to Kampung Dunedin, where authentic flavours of Malaysia meet
          Dunedin, New Zealand.
        </p>
        <p className="mb-4 leading-relaxed md:text-lg">
          We are a small, family-owned food business with a passion for sharing
          authentic Malaysian cuisine.
        </p>
        <div className="relative mb-4 h-[50vw] max-h-[525px] min-h-[350px] w-full">
          <Image
            src={family}
            alt="Dunedin"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
          ></Image>
        </div>
        <p className="mb-4 leading-relaxed md:text-lg">
          Our journey began with a simple longing for home – the familiar taste
          of spices, the aroma of pandan and banana leaves, and simple dishes
          that remind us of the vibrant hawker stalls in Malaysia.
        </p>
        <p className="mb-4 leading-relaxed md:text-lg">
          Being away from our{" "}
          <span className="font-semibold italic">kampung</span> (village) has
          taught us the true meaning of comfort food.
        </p>
        <p className="mb-4 md:text-lg">
          It&apos;s not just about the taste, but also, the memories of eating
          together as a community, and stories shared over our meals.
        </p>
        <p className="my-4 leading-relaxed md:text-lg">
          We prepare dishes that hold a special place in our hearts (and
          tummies). Our recipes are crafted with care, using authentic
          techniques and passed down through generations.
        </p>
        <p className="my-4 leading-relaxed md:text-lg">
          We hope to build a community in Ōtepoti Dunedin through Kampung
          Dunedin.
        </p>
        <p className="my-4 leading-relaxed md:text-lg">
          Thank you for supporting our journey. From our kitchen to your home,
          we hope to bring you a taste of our village.{" "}
          <span className="font-semibold italic">Selamat menjamu selera! </span>
        </p>
        <p className="mt-8 text-center text-[0.95rem] font-medium leading-relaxed text-gray-900 md:text-lg">
          💓 Aunty Anija, Fareez Fauzi & Arina Aizal 💓
        </p>
      </div>
    </div>
  );
};

export default About;
