"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import Headingwbackground from "@/components/Headingwbackground";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const handleChange = async (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )
      .then(async () => {
        console.log("SUCCESS!");
        setFormStatus("submitted");
        setFormData({ name: "", email: "", message: "" });
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setFormStatus("idle");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setFormStatus("idle");
      });
  };

  // Simulate form submission

  return (
    <div className="mx-auto flex min-h-[calc(100vh-161px)] w-full max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-12 md:px-6">
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
        <div>
          <h2 className="mb-4 text-2xl font-medium">Drop us a Message</h2>
          {formStatus === "submitted" ? (
            <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
              <p className="text-green-700 dark:text-green-100">
                Thank you for your message! We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="min-h-[150px]"
                  disabled={formStatus === "submitting"}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
