"use client";

import React from "react";

interface HeroProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-radial-[circle_at_top,_var(--color-bg-panel-hover)_0%,_var(--color-bg-deep)_70%] py-24 sm:py-32 text-center">
      {/* Visual Depth Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold-primary/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">


        {/* Headings */}
        <h2 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-text-light sm:text-5xl md:text-6xl/tight">
          نصنع الاستقرار المالي ونرسم مسارات نمو منشآتكم
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-text-muted">
          حلول مالية متكاملة ودراسات جدوى اقتصادية واستشارات ضريبية مبنية على أسس أكاديمية رصينة لدعم اتخاذ القرار وتفادي المخاطر.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            تصفح خدماتنا الاستشارية
          </a>
        </div>
      </div>
    </section>
  );
}
