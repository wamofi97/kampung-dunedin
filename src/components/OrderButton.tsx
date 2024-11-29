import { Button } from "./ui/button";

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

type OrderButtonProps = {
  orderDetails: {
    name: string;
    quantity: number;
    specialRequest?: string;
  }[];
};

export default function OrderButton({ orderDetails }: OrderButtonProps) {
  const generateMessage = () => {
    const items = orderDetails
      .map(
        (item) =>
          `- Item: ${item.name}\n  Quantity: ${item.quantity} \n  Special Request: ${item.specialRequest || "None"}\n`,
      )
      .join("\n");

    return encodeURIComponent(
      `Hello, I’d like to order the following:\n${items}`,
    );
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${generateMessage()}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>Order Now</Button>
    </a>
  );
}
