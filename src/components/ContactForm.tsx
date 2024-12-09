"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">Drop us a Message</h2>
      {formStatus === "submitted" ? (
        <div className="rounded-lg bg-green-100 p-4">
          <p className="text-green-700">
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
  );
};

export default ContactForm;
