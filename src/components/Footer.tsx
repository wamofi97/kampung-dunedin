import { Instagram, Mail, MessageSquare, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 mt-24 flex w-full justify-center border-t bg-emerald-900 text-white/80">
      <div className="flex w-full max-w-6xl items-center justify-between gap-20 px-3 py-6 md:px-6">
        <div>
          <p className="text-sm">
            {" "}
            Copyright &copy; 2024 Kampung Dunedin. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">Developed by by wamofi.dev</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://bit.ly/WhatsAppKampungDunedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
          <a
            href="tel:021-123-4567"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
          </a>

          <a
            href="https://instagram.com/kampungdunedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>

          <a
            href="mailto:kampungdunedin@gmail.com"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
