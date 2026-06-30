"use client";

import React from "react";

export default function Partners() {
  const logos = [
    {
      name: "شركة الغد للتجارة",
      icon: (
        <svg viewBox="0 0 40 40" width="40" height="40" fill="none" strokeWidth="2.5">
          <path d="M5,10 L25,10 L20,30 L0,30 Z" className="stroke-gold-primary" />
          <text x="11" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="12" fill="var(--color-gold-primary)" stroke="none">G</text>
        </svg>
      ),
      label: "شركة الغد للتجارة",
      desc: "Al-Ghad Co."
    },
    {
      name: "المدار العقارية",
      icon: (
        <svg viewBox="0 0 40 40" width="40" height="40" fill="none" strokeWidth="2.5">
          <circle cx="20" cy="20" r="14" className="stroke-gold-primary" />
          <line x1="20" y1="6" x2="20" y2="34" className="stroke-gold-primary" />
          <line x1="6" y1="20" x2="34" y2="20" className="stroke-gold-primary" />
        </svg>
      ),
      label: "المدار العقارية",
      desc: "Al-Madar Ltd."
    },
    {
      name: "روافد للمقاولات",
      icon: (
        <svg viewBox="0 0 40 40" width="40" height="40" fill="none" strokeWidth="2.5">
          <polyline points="6,28 20,10 34,28" className="stroke-gold-primary" />
          <polyline points="13,28 20,18 27,28" className="stroke-gold-primary" />
        </svg>
      ),
      label: "روافد للمقاولات",
      desc: "Rawafed Est."
    },
    {
      name: "البوابة الشرقية",
      icon: (
        <svg viewBox="0 0 40 40" width="40" height="40" fill="none" strokeWidth="2.5">
          <rect x="6" y="8" width="28" height="24" rx="4" className="stroke-gold-primary" />
          <text x="20" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="10" fill="var(--color-gold-primary)" stroke="none" textAnchor="middle">EG</text>
        </svg>
      ),
      label: "البوابة الشرقية",
      desc: "Eastern Gate"
    }
  ];

  return (
    <section id="partners" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 border-t border-border-light/15">
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          شركاء النجاح
        </span>
        <h2 className="text-xl font-bold text-text-light sm:text-2xl">
          منشآت وثقت باستشاراتنا المالية
        </h2>
        <div className="w-12 h-0.5 bg-gold-primary mx-auto mt-3 rounded-full" />
      </div>

      {/* Static Partners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 select-none mt-10">
        {logos.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-bg-panel/20 border border-border-light rounded-xl px-5 py-3.5 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 hover:border-gold-primary/30 hover:bg-bg-panel/40 transition-all duration-300"
          >
            {/* SVG Icon */}
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            
            {/* Labels */}
            <div className="text-right flex flex-col justify-center">
              <span className="text-xs font-bold text-text-light">{item.label}</span>
              <span className="text-[10px] text-text-muted mt-0.5 font-mono">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[10px] sm:text-xs text-text-muted/60 italic mt-8 select-none">
        * تمثل الشعارات أعلاه نماذج ومحاكاة لعملاء تعاون معهم المكتب مهنياً.
      </p>
    </section>
  );
}
