import Headingwbackground from "@/components/Headingwbackground";
import Hero from "@/components/Hero";
import Note from "@/components/Note";
import ReviewsSlider from "@/components/ReviewSlider";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-3 sm:px-6">
      {/* <div className="absolute min-h-screen w-full bg-[url('/kampung.jpg')] bg-cover"></div> */}
      <div className="absolute w-full bg-gradient-to-b from-white/50 to-black/90"></div>
      <Hero />

      <section className="my-12 max-w-6xl">
        <Headingwbackground>Welcome to Kampung Dunedin!</Headingwbackground>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-20">
          <div className="rounded-xl md:w-1/2">
            <Image
              src="/family.webp"
              alt="Dunedin"
              width={5120}
              height={3414}
              className="rounded-lg"
            ></Image>
          </div>
          <div className="space-y-4 md:w-1/2 md:space-y-8">
            <p className="text-lg md:text-xl">
              We&apos;re a family-owned business bringing the authentic taste of
              Malaysia to Dunedin. Kampung means village in Malay, symbolizing
              warmth, tradition, and family. We hope these flavors will bring
              you as much joy as they bring us.
            </p>
            <div>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full">
                  Learn More About Us <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 max-w-6xl">
        <Headingwbackground>Our Signature Menu</Headingwbackground>
        <div className="">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-8 lg:gap-16">
            <div className="space-y-8 md:w-1/3">
              <h3 className="font-heading text-2xl font-semibold text-emerald-900 lg:text-4xl">
                NASI LEMAK DAUN PISANG
              </h3>
              <p className="text-lg lg:text-xl">
                Our national dish and a favorite for any meal of the day!
                Aromatic basmati rice infused with coconut milk and pandan
                leaves, wrapped in banana leaves. Served with a boiled egg,
                crispy anchovies, roasted peanuts, and a spicy sambal sauce that
                brings it all together.
              </p>
            </div>
            <div className="relative h-[450px] w-full md:w-2/3">
              <Image
                src="/images/nasi-lemak-daun-pisang.webp"
                alt="Nasi Lemak Daun Pisang"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="my-12 flex flex-col justify-between gap-4 md:flex-row-reverse md:gap-8 lg:gap-16">
            <div className="space-y-8 md:w-2/5">
              <h3 className="font-heading text-2xl font-semibold text-emerald-900 lg:text-4xl">
                SATE ATAM & SATE DAGING
              </h3>
              <p className="text-lg lg:text-xl">
                Grilled to perfection, our chicken and beef satay are served
                with soft, compressed rice cubes, a rich peanut sauce, and fresh
                cucumber and onions on the side. Perfect for sharing with
                friends and family!
              </p>
            </div>
            <div className="flex h-[400px] w-full md:w-3/5 md:flex-row">
              <div className="relative w-full">
                <Image
                  src="/images/sate-ayam.webp"
                  alt="Sate Ayam"
                  fill
                  className="rounded-l-lg object-cover"
                />
              </div>
              <div className="relative w-full">
                <Image
                  src="/images/sate-daging.webp"
                  alt="Sate Daging"
                  fill
                  className="rounded-r-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row">
            <Note>
              <h4 className="text-xl font-medium lg:text-2xl">
                And there&apos;s more to come!
              </h4>
              <p className="text-lg lg:text-xl">
                We&apos;re trialing exciting new dishes each week to bring you
                even more flavors of Malaysia. Stay tuned for updates on our
                weekly menus!
              </p>
            </Note>
            <div className="flex items-center justify-end">
              <Link href="/menu">
                <Button size="lg" variant="outline">
                  View More Menu <ExternalLink className="ml-2 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12 max-w-6xl space-y-4">
        <Headingwbackground>
          Ready to Savor Authentic Malaysian Flavors?
        </Headingwbackground>
        <div className="flex flex-col gap-x-8 md:flex-row-reverse">
          <div className="mb-4 space-y-4 md:w-3/5">
            <p className="text-lg lg:text-xl">
              Craving a taste of home or curious about Malaysian cuisine? Place
              your order now and let Kampung Dunedin bring the deliciousness to
              your doorstep. We&apos;re here to make your meals special, whether
              it&apos;s a quiet weekend at home or a celebration with loved
              ones!
            </p>
            <ul className="text-lg lg:text-xl">
              Delivery info:
              <li>
                •{" "}
                <span className="font-semibold text-accent-foreground">
                  Weekends
                </span>{" "}
                only (Saturday & Sunday)
              </li>
              <li>
                •{" "}
                <span className="font-semibold text-accent-foreground">
                  Dunedin
                </span>{" "}
                and surrounding areas
              </li>
            </ul>
            <div>
              <a href="">
                <Button size="lg" className="w-full">
                  Order Now
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <Note>
              <p className="text-lg lg:text-xl">
                Planning an event or feeding a{" "}
                <span className="font-semibold">larger group</span>? Kampung
                Dunedin is happy to cater to your needs! Whether it&apos;s a
                family gathering, office party, or special celebration,
                we&apos;ll craft a menu to delight your guests with authentic
                Malaysian flavors. Get in touch for custom catering options.
              </p>
            </Note>
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <section className="my-12 max-w-6xl space-y-4">
        <Headingwbackground>
          Stay Updated with Our Weekly Menu!
        </Headingwbackground>
        <p className="text-lg lg:text-xl">
          Our menu changes weekly, so join our WhatsApp group or follow us on
          Instagram for the latest updates and to see what&apos;s cooking each
          weekend! We&apos;d love for you to be part of our community and share
          in the flavors of Kampung Dunedin.
        </p>
        <div className="flex flex-col items-start justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="outline">
            Join Whatsapp Group
          </Button>
          <Button size="lg" variant="outline">
            Follow @kampungdunedin
          </Button>
        </div>
      </section>
    </div>
  );
}
