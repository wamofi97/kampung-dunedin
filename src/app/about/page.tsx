import Headingwbackground from "@/components/Headingwbackground";
import Image from "next/image";
import React from "react";
import family from "../../../public/family.webp";

const About = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-3 py-12 md:px-6">
      <h1 className="text-3xl">Our Story</h1>
      <Headingwbackground>
        From Malaysia to Dunedin – Sharing the Flavors of Home
      </Headingwbackground>

      <div className="relative bg-white px-3 py-12 text-justify md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[url('/batik.webp')] opacity-30"></div>
        <p className="mb-4 leading-relaxed md:text-lg">
          Welcome to Kampung Dunedin, where the flavors of Malaysia meet the
          heart of Dunedin, New Zealand.
        </p>
        <p className="mb-4 leading-relaxed md:text-lg">
          We are a small, family-owned food business with a passion for sharing
          authentic Malaysian cuisine. Our journey began with a simple longing
          for home — the familiar taste of spices, the aroma of pandan leaves,
          and the warmth of dishes that remind us of the bustling streets and
          vibrant hawker stalls of Malaysia.
        </p>
        <div className="relative mb-4 h-[20vw] min-h-[450px] w-full">
          <Image
            src={family}
            alt="Dunedin"
            fill
            placeholder="blur"
            className="rounded-lg object-cover"
          ></Image>
        </div>
        <p className="mb-4 leading-relaxed md:text-lg">
          Being away from our <span className="italic">kampung</span> (village)
          has taught us the true meaning of comfort food. It&apos;s not just
          about the taste; it&apos;s about the memories, the togetherness, and
          the stories shared over a meal. That&apos;s why we started Kampung
          Dunedin, to bring a piece of our culture, traditions, and love for
          food to this beautiful city.
        </p>
        <p className="mb-4 leading-relaxed md:text-lg">
          Every weekend, we prepare dishes that hold a special place in our
          hearts. From the iconic{" "}
          <span className="font-semibold text-amber-600">Nasi Lemak</span> to
          the smoky, flavorful{" "}
          <span className="font-semibold text-amber-600">Sate Ayam</span> and{" "}
          <span className="font-semibold text-amber-600">Sate Daging</span> our
          menu reflects the diverse culinary heritage of Malaysia. Each recipe
          is crafted with care, using authentic ingredients and techniques
          passed down through generations.
        </p>
        <p className="mb-8 leading-relaxed md:text-lg">
          But Kampung Dunedin is more than just a food business — it&apos;s a
          way to build connections. Through our food, we hope to share a taste
          of Malaysia with you, sparking joy and creating new memories around
          your dining table. Whether you&apos;re new to Malaysian cuisine or
          already a fan, we invite you to experience the magic of kampung-style
          cooking.
        </p>
        {/* <p className="my-4 md:text-lg ">
        We're always experimenting with flavors and dishes, introducing new menu
        items every week. Our dream is to not only satisfy your cravings but
        also to build a community of food lovers who appreciate the richness of
        Malaysian culture.
      </p> */}
        <p className="font-medium leading-relaxed text-gray-900 md:text-lg">
          Thank you for supporting our journey. From our kitchen to your table,
          we hope to bring you comfort, warmth, and a whole lot of
          deliciousness.{" "}
          <span className="italic text-amber-600">Selamat menjamu selera!</span>{" "}
          (Enjoy your meal! 💓)
        </p>
      </div>
    </div>
  );
};

export default About;
