import { client } from "@/sanity/lib/client";
import { MENU_IMAGES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

type image = {
  _id: string;
  imageUrl: string;
  altText: string;
  blurDataURL: string;
};

const MenuSlider = async () => {
  const images = await client.fetch(MENU_IMAGES_QUERY);
  const initialPositions = Array.from(
    { length: images.length },
    (_, i) => i + 1,
  ).sort(() => Math.random() - 0.5);

  return (
    <div
      className="slider"
      style={
        {
          "--width": "140px",
          "--height": "180px",
          "--quantity": images.length,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {images.map((image: image, index: number) => (
          <div
            key={image._id}
            className="item relative"
            style={
              { "--position": initialPositions[index] } as React.CSSProperties
            }
          >
            <Image
              src={image.imageUrl}
              alt={image.altText || "Menu Image"}
              fill
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 140px"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider;
