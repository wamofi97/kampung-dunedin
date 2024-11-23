"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, MessageSquare } from "lucide-react";
import Headingwbackground from "@/components/Headingwbackground";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormStatus("submitted");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setFormStatus("idle");
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-12 md:px-6">
      <h1 className="text-3xl">Get in Touch</h1>
      <Headingwbackground>We&apos;d Love to Hear from You!</Headingwbackground>

      <div className="mb-12 grid gap-12 md:grid-cols-2">
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
                  placeholder="Your Name"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>
              <div>
                <Textarea
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

        <div className="order-last md:order-first">
          <h2 className="mb-4 text-2xl font-medium"> Contact Us</h2>
          <p className="mb-6 text-muted-foreground">
            Whether you have questions, special requests, or simply want to say
            hello, we&apos;re here for you. Reach out to Kampung Dunedin
            anytime!
          </p>
          <div className="space-y-4">
            <a
              href="https://bit.ly/WhatsAppKampungDunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Join our WhatsApp group</span>
            </a>

            <a
              href="https://instagram.com/kampungdunedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow us on Instagram</span>
            </a>

            <a
              href="mailto:kampungdunedin@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span>kampungdunedin@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
