"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const slidingLogos = [
    { name: "وكالة فكرة متجددة", src: "/partners/fikra.webp" },
    { name: "مطعم التنور الهندي", src: "/partners/altannoor.webp" },
    { name: "معالي البرجر", src: "/partners/burger_excellence.webp" },
    { name: "نظيف", src: "/partners/nadeef.webp" },
    { name: "الشركة النخبة", src: "/partners/elite.webp" },
    { name: "مؤسسة وادي الخردة التجارية", src: "/partners/wadi_alkhorda.webp" },
    { name: "هيدروليك", src: "/partners/hydraulic.webp" },
    { name: "مكتب جواد الخرس", src: "/partners/partner_logo.webp" },
  ];

  // Duplicate the array to ensure smooth continuous marquee scroll
  const doubleLogos = [...slidingLogos, ...slidingLogos, ...slidingLogos];

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

      {/* Main Partners Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 w-full mt-10">
        
        {/* Pinned Program on the Right (RTL right side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto"
        >
          <div className="flex items-center justify-center bg-white border-2 border-gold-primary rounded-2xl p-2.5 h-28 w-44 sm:w-56 shadow-[0_10px_30px_rgba(190,156,70,0.25)] relative">
            <div className="relative w-full h-full">
              <Image
                src="/partners/qoyod.webp"
                alt="برنامج قيود المحاسبي المعتمد"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-contain opacity-100"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Divider line for desktop */}
        <div className="hidden lg:block w-px h-20 bg-gold-primary/20 self-center" />

        {/* Sliding Marquee container on the Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-grow w-full overflow-hidden py-4 select-none relative"
          style={{ direction: "ltr" }}
        >
          {/* Left and Right Fade Overlays for depth */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#011411] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#011411] to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex animate-marquee gap-6 sm:gap-8 items-center hover:[animation-play-state:paused]">
            {doubleLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-white border border-gold-primary/20 rounded-2xl p-2 h-28 w-44 sm:w-56 hover:border-gold-primary/60 hover:shadow-[0_10px_30px_rgba(190,156,70,0.15)] transition-all duration-300 group cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    className="object-contain opacity-100 group-hover:scale-106 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Footer Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center text-xs text-text-muted/75 italic mt-16 select-none"
      >
        * تمثل الشعارات أعلاه علامات تجارية لمنشآت وشركات مسجلة حظيت بخدماتنا الاستشارية.
      </motion.p>
    </section>
  );
}
