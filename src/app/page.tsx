import Headingwbackground from "@/components/Headingwbackground";
import Hero from "@/components/Hero";
import Note from "@/components/Note";
import ReviewsSlider from "@/components/ReviewSlider";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import family from "../../public/family.webp";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-3 sm:px-6">
      <div className="absolute -z-10 min-h-[90dvh] w-full bg-[url(/batik.webp)] bg-cover bg-center opacity-40 md:min-h-screen md:opacity-30"></div>
      <Hero />

      <section className="my-12 mt-24 max-w-6xl">
        <Headingwbackground>Welcome to Kampung Dunedin!</Headingwbackground>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16">
          <div className="relative h-96 w-full md:w-1/2">
            <Image
              src={family}
              alt="Dunedin"
              fill
              placeholder="blur"
              className="h-auto rounded-lg object-cover"
            ></Image>
          </div>
          <div className="space-y-4 md:w-1/2 md:space-y-8">
            <p className="text-lg md:text-xl">
              We are a Dunedin-based Malaysian family bringing an authentic
              taste of Malaysia through our small business. Kampung means
              village in Malay. We hope these flavours bring you as much comfort
              and joy as they bring us while we are away from home.
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
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-8 lg:gap-16">
          <div className="space-y-4 sm:w-1/2 md:w-2/5 md:space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-emerald-900 lg:text-4xl">
              NASI LEMAK DAUN PISANG
            </h3>
            <div className="relative h-96 w-full sm:hidden md:w-2/3">
              <Image
                src="/images/nasi-lemak-daun-pisang.webp"
                alt="Nasi Lemak Daun Pisang"
                fill
                sizes="(max-width: 640px) 100vw"
                className="h-auto rounded-lg object-cover"
              />
            </div>
            <p className="text-lg lg:text-xl">
              Our national dish and a favorite for any meal of the day! Aromatic
              basmati rice infused with coconut milk and pandan leaves. Served
              with boiled egg, crispy anchovies, roasted peanuts, fresh
              cucumber, and spicy sambal, all wrapped in banana leaves.
            </p>
          </div>
          <div className="relative hidden h-96 w-full sm:block sm:w-1/2 md:w-3/5">
            <Image
              src="/images/nasi-lemak-daun-pisang.webp"
              alt="Nasi Lemak Daun Pisang"
              fill
              sizes=" (max-width: 1200px) 50vw, 33vw"
              className="object-cover sm:rounded-lg"
            />
          </div>
        </div>

        <div className="my-12 flex flex-col justify-between gap-4 sm:flex-row-reverse sm:gap-8 lg:gap-16">
          <div className="space-y-4 sm:w-1/3 md:space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-emerald-900 lg:text-4xl">
              SATE AYAM & SATE DAGING
            </h3>
            <div className="relative flex h-[900px] w-full flex-col gap-2 sm:hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/images/sate-ayam.webp"
                  alt="Sate Ayam"
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover object-bottom sm:rounded-l-lg sm:object-center"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/sate-daging.webp"
                  alt="Sate Daging"
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover object-bottom sm:rounded-r-lg sm:object-center"
                />
              </div>
            </div>
            <p className="text-lg lg:text-xl">
              Our chicken and beef satay are served with soft, compressed rice
              cubes, a rich peanut sauce, and fresh cucumber and onions on the
              side. Perfect for sharing with friends and whanau!
            </p>
          </div>
          <div className="relative hidden w-full flex-row gap-0 sm:flex sm:h-[350px] sm:w-2/3 md:h-[400px]">
            <div className="relative h-full w-full">
              <Image
                src="/images/sate-ayam.webp"
                alt="Sate Ayam"
                fill
                sizes=" (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-bottom sm:rounded-l-lg sm:object-center"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/images/sate-daging.webp"
                alt="Sate Daging"
                fill
                sizes="(max-width: 1200px) 50vw, 33vw"
                className="object-cover object-bottom sm:rounded-r-lg sm:object-center"
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
                Our Menu <ExternalLink className="ml-2 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-12 max-w-6xl space-y-4">
        <Headingwbackground>
          Craving for a taste of Malaysia?
        </Headingwbackground>
        <div className="flex flex-col gap-x-8 md:flex-row-reverse">
          <div className="mb-4 space-y-4 md:w-3/5">
            <p className="text-lg lg:text-xl">
              Kampung Dunedin brings authentic Malaysian food to your doorstep.
              We&apos;re here to make your meals special, whether it&apos;s a
              quiet meal at home or a celebration with loved ones!
            </p>
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
                Planning an event or feeding a larger group? Kampung Dunedin is
                happy to cater to your needs! Whether it&apos;s a family
                gathering, tour group, or special celebration, we&apos;ll
                delight your guests with authentic Malaysian flavours. Get in
                touch for catering options.
              </p>
            </Note>
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <section className="my-12 max-w-6xl space-y-4">
        <Headingwbackground>
          Stay Updated with Our Weekly Menu
        </Headingwbackground>
        <p className="text-lg lg:text-xl">
          Our menu changes weekly, so join our WhatsApp group or follow us on
          Instagram for the latest updates and to see what&apos;s cooking each
          weekend! We&apos;d love for you to be part of our community and share
          in the flavors of Kampung Dunedin.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button size="lg" variant="outline">
              <MessageCircle />
              Join Whatsapp Group
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/kampungdunedin/"
            target="_blank"
          >
            <Button size="lg" variant="outline">
              <Instagram />
              Follow on Instagram
            </Button>
          </Link>
          <Link href="https://www.facebook.com/kampungdunedin/" target="_blank">
            <Button size="lg" variant="outline">
              <Facebook />
              Find us on Facebook
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
