"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-bg-deep/90 border-border-light backdrop-blur-md shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative h-12 w-12 overflow-hidden transition-all duration-300 group-hover:scale-108 group-hover:rotate-3 group-hover:drop-shadow-[0_0_8px_rgba(223,194,125,0.6)]">
              <Image
                src="/logo.png"
                alt="شعار مكتب جواد بن عبدالله الخرس"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-right leading-tight">
              <h1 className="text-sm font-bold text-text-light md:text-base">
                مكتب جواد بن عبدالله الخرس
              </h1>
              <span className="block text-xs font-medium text-gold-light mt-0.5">
                للاستشارات المالية لغير الأوراق المالية
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "من نحن", href: "#about" },
              { label: "خدماتنا", href: "#services" },
              { label: "منهجية العمل", href: "#process" },
              { label: "اتصل بنا", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-medium text-text-muted hover:text-text-light transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-gold-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal("استشارة عامة")}
              className="hidden md:inline-flex items-center justify-center rounded-lg bg-gold-primary px-5 py-2 text-xs font-bold text-bg-deep border border-transparent hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(190,156,70,0.25)] transition-all duration-200 cursor-pointer"
            >
              طلب استشارة مالية
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex md:hidden p-2 text-text-light hover:text-gold-light transition-colors duration-200 focus:outline-none"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-20 z-45 w-full h-[calc(100vh-80px)] bg-bg-modal/98 border-t border-border-light flex flex-col items-center justify-center gap-8 py-10 px-6 md:hidden"
          >
            {[
              { label: "من نحن", href: "#about" },
              { label: "خدماتنا", href: "#services" },
              { label: "منهجية العمل", href: "#process" },
              { label: "اتصل بنا", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-text-light transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal("استشارة عامة");
              }}
              className="w-4/5 py-3 rounded-lg bg-gold-primary text-sm font-bold text-bg-deep border border-transparent hover:bg-gold-light transition-all duration-200"
            >
              طلب استشارة مالية
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
