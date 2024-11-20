import Headingwbackground from "@/components/Headingwbackground";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-3 py-8 md:px-6">
      <h1 className="text-3xl">Our Story</h1>
      <Headingwbackground>
        From Malaysia to Dunedin – Sharing the Flavors of Home
      </Headingwbackground>

      <p className="my-4 text-lg md:text-xl">
        Welcome to Kampung Dunedin, where the flavors of Malaysia meet the heart
        of Dunedin, New Zealand.
      </p>
      <p className="my-4 text-lg md:text-xl">
        We are a small, family-owned food business with a passion for sharing
        authentic Malaysian cuisine. Our journey began with a simple longing for
        home — the familiar taste of spices, the aroma of pandan leaves, and the
        warmth of dishes that remind us of the bustling streets and vibrant
        hawker stalls of Malaysia.
      </p>
      <div className="relative h-[20vw] max-h-[650px] min-h-[500px] w-full">
        <Image
          src="/family.webp"
          alt="Dunedin"
          fill
          className="rounded-lg object-cover"
        ></Image>
      </div>
      <p className="my-4 text-lg md:text-xl">
        Being away from our kampung (village) has taught us the true meaning of
        comfort food. It's not just about the taste; it's about the memories,
        the togetherness, and the stories shared over a meal. That's why we
        started Kampung Dunedin: to bring a piece of our culture, traditions,
        and love for food to this beautiful city.
      </p>
      <p className="my-4 text-lg md:text-xl">
        Every weekend, we prepare dishes that hold a special place in our
        hearts. From the iconic Nasi Lemak to the smoky, flavorful Sate Ayam and
        Sate Daging, our menu reflects the diverse culinary heritage of
        Malaysia. Each recipe is crafted with care, using authentic ingredients
        and techniques passed down through generations.
      </p>
      <p className="my-4 text-lg md:text-xl">
        But Kampung Dunedin is more than just a food business — it's a way to
        build connections. Through our food, we hope to share a taste of
        Malaysia with you, sparking joy and creating new memories around your
        dining table. Whether you're new to Malaysian cuisine or already a fan,
        we invite you to experience the magic of kampung-style cooking.
      </p>
      {/* <p className="my-4 text-lg md:text-xl ">
        We're always experimenting with flavors and dishes, introducing new menu
        items every week. Our dream is to not only satisfy your cravings but
        also to build a community of food lovers who appreciate the richness of
        Malaysian culture.
      </p> */}
      <p className="my-4 text-lg md:text-xl">
        Thank you for supporting our journey. From our kitchen to your table, we
        hope to bring you comfort, warmth, and a whole lot of deliciousness.
        Selamat menjamu selera! (Enjoy your meal!) 🥰
      </p>
      {/* <p className="my-4 text-lg md:text-xl ">
        As a family, we began recreating the meals that reminded us of home -
        dishes that brought us together and filled our hearts as much as our
        stomachs. These recipes, passed down through generations, became our
        little sanctuary of flavor, even when we were miles away from Malaysia.
      </p>
      <p className="my-4 text-lg md:text-xl ">
        Now, we want to share these dishes with you - our neighbors in Dunedin.
        'Kampung' means 'village' in Malay, symbolizing family, community, and
        tradition. Through Kampung Dunedin, we hope to connect with you and
        offer a taste of our heritage that we hold so dear.
      </p> */}
    </div>
  );
};

export default About;
