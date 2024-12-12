import { client } from "@/sanity/lib/client";
import { MENU_IMAGES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

type image = {
  _id: string;
  imageUrl: string;
  altText: string;
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
          "--width": "125px",
          "--height": "170px",
          "--quantity": images.length,
        } as React.CSSProperties
      }
    >
      <div className="list">
        {images.map((image: image, index: number) => (
          <div
            key={image._id}
            className="item relative h-[170px] w-[125px]"
            style={
              { "--position": initialPositions[index] } as React.CSSProperties
            }
          >
            <Image
              src={image.imageUrl}
              alt={image.altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 125px"
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSlider;
