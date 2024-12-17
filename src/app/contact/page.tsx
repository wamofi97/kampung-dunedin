import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import Headingwbackground from "@/components/Headingwbackground";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get In Touch With Kampung Dunedin",
  alternates: {
    canonical: "https://kampungdunedin.nz/contact",
  },
};

const Contact = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center px-6 pb-24 pt-12 md:px-6">
      <div className="dotted-background"></div>
      <Headingwbackground>We&apos;d Love to Hear from You!</Headingwbackground>

      <div className="mb-12 grid gap-12 md:grid-cols-2">
        <div className="">
          <h2 className="mb-4 text-2xl font-medium"> Contact Us</h2>
          <p className="mb-6 text-muted-foreground">
            Whether you have questions, special requests, or simply want to say
            hello, we&apos;re here for you.
          </p>
          <div className="space-y-4">
            <a
              href="https://bit.ly/WhatsAppKampungDunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sm:text-lg">Join our WhatsApp group</span>
            </a>
            <a
              href="https://facebook.com/kampungdunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors hover:text-primary"
            >
              <Facebook className="h-6 w-6" />
              <span className="sm:text-lg">Find us on Facebook</span>
            </a>

            <a
              href="https://instagram.com/kampungdunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6" />
              <span className="sm:text-lg">Follow us on Instagram</span>
            </a>

            <a
              href="mailto:kampungdunedin@gmail.com"
              className="flex items-center gap-4 transition-colors hover:text-primary"
            >
              <Mail className="h-6 w-6" />
              <span className="sm:text-lg">kampungdunedin@gmail.com</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
