"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const partnersLogos = [
    { name: "وكالة فكرة متجددة", src: "/partners/fikra.webp" },
    { name: "مطعم التنور الهندي", src: "/partners/altannoor.webp" },
    { name: "معالي البرجر", src: "/partners/burger_excellence.webp" },
    { name: "نظيف", src: "/partners/nadeef.webp" },
    { name: "قيود", src: "/partners/qoyod.webp" },
    { name: "الشركة النخبة", src: "/partners/elite.webp" },
    { name: "مؤسسة وادي الخردة التجارية", src: "/partners/wadi_alkhorda.webp" },
    { name: "هيدروليك", src: "/partners/hydraulic.webp" },
    { name: "مكتب جواد الخرس", src: "/partners/partner_logo.webp" },
  ];

  // Duplicate the array to ensure smooth continuous marquee scroll
  const doubleLogos = [...partnersLogos, ...partnersLogos, ...partnersLogos];

  return (
    <section id="partners" className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 border-t border-border-light/10">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          شركاء النجاح
        </span>
        <h2 className="text-xl font-bold text-text-light sm:text-3xl">
          منشآت وثقت باستشاراتنا المالية
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Infinite Marquee Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden py-4 select-none"
        style={{ direction: "ltr" }}
      >
        {/* Left and Right Fade Overlays for Elegant Depth */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#011411] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#011411] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee gap-8 sm:gap-12 items-center hover:[animation-play-state:paused]">
          {doubleLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center bg-bg-panel/20 border border-border-light/10 rounded-xl px-5 py-4 h-20 w-36 sm:w-44 hover:border-gold-primary/30 transition-all duration-300 backdrop-blur-xs shadow-[0_4px_20px_rgba(0,0,0,0.1)] group cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain filter brightness-90 contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center text-xs text-text-muted/75 italic mt-12 select-none"
      >
        * تمثل الشعارات أعلاه علامات تجارية لمنشآت وشركات مسجلة حظيت بخدماتنا الاستشارية.
      </motion.p>
    </section>
  );
}
