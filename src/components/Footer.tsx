import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 flex w-full justify-center border-t bg-secondary text-accent">
      <div className="flex w-full max-w-6xl items-center justify-between gap-14 px-3 py-6 md:px-6">
        <div className="text-[0.75rem] md:text-sm">
          <p>Copyright &copy; 2024 Kampung Dunedin. All Rights Reserved.</p>
          <p className="text-gray-400">Developed by by wamofi.dev</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="https://bit.ly/WhatsAppKampungDunedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-primary"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="mailto:kampungdunedin@gmail.com"
            className="flex items-center gap-3 transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/kampungdunedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568764888910"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
