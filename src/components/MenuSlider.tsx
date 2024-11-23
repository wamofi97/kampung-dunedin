import Image from "next/image";
import React from "react";

const MenuSlider = () => {
  return (
    <div
      className="slider"
      style={
        {
          "--width": "125px",
          "--height": "200px",
          "--quantity": 11,
        } as React.CSSProperties
      }
    >
      <div className="list">
        <div
          className="item"
          style={{ "--position": 1 } as React.CSSProperties}
        >
          <Image
            src="/images/nasi-lemak-daun-pisang.webp"
            alt="nasi lemak"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 11 } as React.CSSProperties}
        >
          <Image
            src="/images/sate-ayam.webp"
            alt="sate ayam"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 6 } as React.CSSProperties}
        >
          <Image
            src="/images/sate-daging.webp"
            alt="sate daging"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 7 } as React.CSSProperties}
        >
          <Image
            src="/images/nasikandarayammadu.webp"
            alt="nasi kandar ayam madu"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 10 } as React.CSSProperties}
        >
          <Image
            src="/images/nasikandardagingmasakhitammamak.webp"
            alt="nasi kandar daging masak hitam mamak"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 3 } as React.CSSProperties}
        >
          <Image
            src="/images/nasikandaroptional.webp"
            alt="nasi kandar optional"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 9 } as React.CSSProperties}
        >
          <Image
            src="/images/nasilemakdaunpisang2.webp"
            alt="nasi lemak daun pisang 2"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 8 } as React.CSSProperties}
        >
          <Image
            src="/images/sambalobersea2.webp"
            alt="sambal obersea"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 2 } as React.CSSProperties}
        >
          <Image
            src="/images/kuih.webp"
            alt="sambal obersea"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 4 } as React.CSSProperties}
        >
          <Image
            src="/images/karipap.webp"
            alt="sambal obersea"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div
          className="item"
          style={{ "--position": 5 } as React.CSSProperties}
        >
          <Image
            src="/images/bungkus.webp"
            alt="sambal obersea"
            width={125}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
