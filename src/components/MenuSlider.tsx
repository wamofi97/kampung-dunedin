import Image from "next/image";
import React from "react";

const randomPosition = () => {
  const positions = new Set();
  return () => {
    let position;
    do {
      position = Math.floor(Math.random() * 15) + 1;
    } while (positions.has(position));
    positions.add(position);
    return position;
  };
};

const MenuSlider = () => {
  const getPosition = randomPosition();
  const images = [
    { src: "/images/nasi-lemak-daun-pisang.webp", alt: "nasi lemak" },
    { src: "/images/sate-ayam.webp", alt: "sate ayam" },
    { src: "/images/sate-daging.webp", alt: "sate daging" },
    { src: "/images/nasikandarayammadu.webp", alt: "nasi kandar ayam madu" },
    {
      src: "/images/nasikandardagingmasakhitammamak.webp",
      alt: "nasi kandar daging masak hitam mamak",
    },
    { src: "/images/nasikandaroptional.webp", alt: "nasi kandar optional" },
    {
      src: "/images/nasilemakdaunpisang2.webp",
      alt: "nasi lemak daun pisang 2",
    },
    { src: "/images/sambalobersea2.webp", alt: "sambal obersea" },
    { src: "/images/kuih.webp", alt: "kuih" },
    { src: "/images/karipap.webp", alt: "karipap" },
    { src: "/images/bungkus.webp", alt: "bungkus" },
    { src: "/images/ayammadu.webp", alt: "ayam madu" },
    { src: "/images/satedaging2.webp", alt: "sate daging 2" },
    { src: "/images/bungkus2.webp", alt: "bungkus 2" },
    { src: "/images/bungkus3.webp", alt: "bungkus 3" },
  ];

  return (
    <div
      className="slider"
      style={
        {
          "--width": "125px",
          "--height": "170px",
          "--quantity": images.length,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": getPosition() } as React.CSSProperties}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={125}
              height={200}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider;
