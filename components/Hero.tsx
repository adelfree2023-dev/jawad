"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-radial-[circle_at_top,_var(--color-bg-panel-hover)_0%,_var(--color-bg-deep)_70%] py-20 sm:py-28">
      {/* Visual Depth Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold-primary/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-center lg:text-right flex flex-col items-center lg:items-start order-2 lg:order-1">
            {/* Headings */}
            <h2 className="text-3xl font-extrabold tracking-tight text-text-light sm:text-4xl md:text-5xl/tight leading-tight">
              نصنع الاستقرار المالي ونرسم مسارات نمو منشآتكم
            </h2>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-text-muted">
              حلول مالية متكاملة ودراسات جدوى اقتصادية واستشارات ضريبية مبنية على أسس أكاديمية رصينة لدعم اتخاذ القرار وتفادي المخاطر.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenModal("طلب استشارة")}
                className="rounded-lg bg-gold-primary px-8 py-3.5 text-sm font-bold text-bg-deep hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(190,156,70,0.3)] transition-all duration-200 cursor-pointer"
              >
                طلب استشارة
              </button>
              <a
                href="#services"
                className="rounded-lg border border-border-light bg-bg-panel px-8 py-3.5 text-sm font-bold text-text-light hover:border-gold-light hover:bg-bg-panel-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                تصفح خدماتنا
              </a>
            </div>
          </div>

          {/* Animated Illustration Column */}
          <div className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -12, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-border-light bg-bg-panel/40 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-xs overflow-hidden group hover:border-gold-primary/30 transition-all duration-500"
            >
              {/* Animated corner glows inside the card */}
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gold-primary/10 filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold-light/5 filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative w-full h-full overflow-hidden rounded-xl border border-border-light/20 bg-bg-deep/50">
                <Image
                  src="/advisory_hero.png"
                  alt="مكتب جواد الخرس للاستشارات المالية"
                  fill
                  sizes="(max-w-7xl) 100vw, 420px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
