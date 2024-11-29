import Headingwbackground from "@/components/Headingwbackground";
import Hero from "@/components/Hero";
import Note from "@/components/Note";
import ReviewsSlider from "@/components/ReviewSlider";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import family from "../../public/family.webp";
import ReviewCarousel from "@/components/ReviewCarousel";

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col items-center pb-24">
      <div className="absolute -z-10 min-h-[calc(100vh-71px)] w-full bg-[url(/batik.webp)] bg-cover bg-center opacity-40 md:opacity-20"></div>
      <Hero />

      <section className="flex w-full justify-center px-4 py-24 sm:px-6">
        <div className="max-w-6xl">
          <Headingwbackground>Welcome to Kampung Dunedin!</Headingwbackground>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-16">
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
                village in Malay. We hope these flavours bring you as much
                comfort and joy as they bring us while we are away from home.
              </p>
              <div>
                <Link href="/about">
                  <Button size="lg" variant="secondary" className="w-full">
                    Learn More About Us <ArrowUpRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center bg-gradient-to-br from-amber-100 via-background to-amber-100 px-4 py-24 sm:px-6">
        <div className="max-w-6xl">
          <Headingwbackground>Our Signature Menu</Headingwbackground>
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-8 lg:gap-16">
            <div className="sm:w-1/2 md:w-2/5">
              <h3 className="mb-4 text-center font-heading text-2xl font-semibold uppercase text-secondary sm:mb-8 sm:text-start sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
                Nasi Lemak Daun Pisang
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
              <p className="mt-4 border-l-4 border-primary pl-4 text-lg lg:text-xl">
                Our national dish and a favorite for any meal of the day!
                Aromatic basmati rice infused with coconut milk and pandan
                leaves. Served with boiled egg, crispy anchovies, roasted
                peanuts, fresh cucumber, and spicy sambal, all wrapped in banana
                leaves.
              </p>
              <p className="text-lg lg:text-xl"></p>
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

          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row-reverse sm:gap-8 lg:gap-16">
            <div className="sm:w-1/2 md:w-1/3">
              <h3 className="mb-4 text-center font-heading text-2xl font-semibold uppercase text-secondary sm:mb-8 sm:text-3xl md:text-end md:text-4xl lg:text-[2.75rem] lg:leading-none xl:text-5xl">
                Sate Ayam & Sate Daging
              </h3>
              <div className="relative flex h-[900px] w-full flex-col gap-2 sm:hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/sate-ayam.webp"
                    alt="Sate Ayam"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="rounded-lg object-cover object-bottom sm:object-center"
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/sate-daging.webp"
                    alt="Sate Daging"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="rounded-lg object-cover object-bottom sm:object-center"
                  />
                </div>
              </div>
              <p className="mt-4 w-full border-l-4 border-primary pl-4 text-lg sm:border-l-0 sm:border-r-4 sm:pl-0 sm:pr-4 lg:text-xl">
                Our chicken and beef satay are served with soft, compressed rice
                cubes, a rich peanut sauce, and fresh cucumber and onions on the
                side. Perfect for sharing with friends and{" "}
                <span className="italic">whanau!</span>
              </p>
            </div>
            <div className="relative hidden w-full flex-col gap-0 sm:flex sm:h-[500px] sm:w-1/2 md:h-[400px] md:w-2/3 md:flex-row">
              <div className="relative h-full w-full">
                <Image
                  src="/images/sate-ayam.webp"
                  alt="Sate Ayam"
                  fill
                  sizes=" (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg object-cover object-bottom md:rounded-l-lg md:object-center"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/sate-daging.webp"
                  alt="Sate Daging"
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  className="rounded-b-lg object-cover object-bottom md:rounded-r-lg md:object-center"
                />
              </div>
            </div>
          </div>

          <div className="mb-12 flex flex-col-reverse justify-between gap-x-8 gap-y-4 md:flex-row">
            <Note className="md:w-2/3">
              <h4 className="mb-2 text-lg font-medium">
                And there&apos;s more to come!
              </h4>
              <p>
                We&apos;re trialing exciting new dishes each week to bring you
                even more flavours of Malaysia. Stay tuned for updates on our
                weekly menus!
              </p>
            </Note>
            <div className="flex items-center md:w-1/3">
              <Link href="/menu" className="w-full">
                <Button size="lg" variant="secondary" className="w-full">
                  Our Menu <ArrowUpRight className="ml-2 h-8 w-8" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center px-4 py-24 sm:px-6">
        <div className="max-w-6xl">
          <Headingwbackground>
            Craving for a taste of Malaysia?
          </Headingwbackground>
          <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:gap-12">
            <div className="mb-4 space-y-4 md:w-3/5">
              <p className="text-lg lg:text-xl">
                Kampung Dunedin brings authentic Malaysian food to your
                doorstep. We&apos;re here to make your meals special, whether
                it&apos;s a quiet meal at home or a celebration with loved ones!
              </p>
              <div>
                <a href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
                  <Button size="lg" className="w-full">
                    Order Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-2/5">
              <Note>
                <p className="mb-2 text-lg font-medium">
                  Planning an event or feeding a larger group?
                </p>
                <p>
                  Kampung Dunedin is happy to cater to your needs! Whether
                  it&apos;s a family gathering, tour group, or special
                  celebration, we&apos;ll delight your guests with authentic
                  Malaysian flavours. Get in touch for catering options.
                </p>
              </Note>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSlider />

      <div
        className="blocks flex w-full max-w-3xl justify-center overflow-hidden bg-amber-100/50 sm:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 15% 85%, transparent)",
        }}
      >
        <ReviewCarousel />
      </div>

      <section className="max-w-6xl px-4 py-24 sm:px-6">
        <Headingwbackground>Stay Updated with Weekly Menu</Headingwbackground>
        <p className="mb-8 text-lg lg:text-xl">
          Our menu changes weekly, so join our WhatsApp group and follow us on
          Instagram for the latest updates and to see what&apos;s cooking each
          weekend! We&apos;d love for you to be part of our community and share
          the flavours of Kampung Dunedin.
        </p>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <Link href="https://bit.ly/WhatsAppKampungDunedin" target="_blank">
            <Button size="lg" variant="outline" className="">
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
