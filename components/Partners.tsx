"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  } as const;

  const logos = [
    {
      name: "شركة الغد للتجارة",
      icon: (
        <svg viewBox="0 0 40 40" className="w-11 h-11 transition-transform duration-500 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ghadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be9c46" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
          </defs>
          {/* Abstract geometric 'G' combined with a forward arrow for growth */}
          <path d="M8 20C8 13.3726 13.3726 8 20 8C25.3 8 29.8 11.4 31.4 16.2" stroke="url(#ghadGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 20C32 26.6274 26.6274 32 20 32C14.7 32 10.2 28.6 8.6 23.8" stroke="url(#ghadGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 20H32" stroke="url(#ghadGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 14L34 20L28 26" stroke="url(#ghadGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      label: "شركة الغد للتجارة",
      desc: "Al-Ghad Co."
    },
    {
      name: "المدار العقارية",
      icon: (
        <svg viewBox="0 0 40 40" className="w-11 h-11 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="madarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be9c46" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
          </defs>
          {/* Stylized orbit / compass layout denoting real estate structure */}
          <circle cx="20" cy="20" r="14" stroke="url(#madarGrad)" strokeWidth="2" />
          <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20" stroke="url(#madarGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M15 25C15 22.24 17.24 20 20 20C22.76 20 25 22.24 25 25" stroke="url(#madarGrad)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="6" x2="20" y2="34" stroke="url(#madarGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      ),
      label: "المدار العقارية",
      desc: "Al-Madar Ltd."
    },
    {
      name: "روافد للمقاولات",
      icon: (
        <svg viewBox="0 0 40 40" className="w-11 h-11 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="rawafedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be9c46" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
          </defs>
          {/* Precision architectural rafters / beams structural emblem */}
          <path d="M6 30L20 8L34 30" stroke="url(#rawafedGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 30L20 19L27 30" stroke="url(#rawafedGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="17" y1="30" x2="23" y2="30" stroke="url(#rawafedGrad)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      label: "روافد للمقاولات",
      desc: "Rawafed Est."
    },
    {
      name: "البوابة الشرقية",
      icon: (
        <svg viewBox="0 0 40 40" className="w-11 h-11 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be9c46" />
              <stop offset="100%" stopColor="#e5c158" />
            </linearGradient>
          </defs>
          {/* Dynamic eastern archway gateway emblem */}
          <path d="M10 32V16C10 10.4772 14.4772 6 20 6C25.5228 6 30 10.4772 30 16V32" stroke="url(#gateGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M15 32V20C15 17.2386 17.2386 15 20 15C22.7614 15 25 17.2386 25 20V32" stroke="url(#gateGrad)" strokeWidth="2" />
          <line x1="6" y1="32" x2="34" y2="32" stroke="url(#gateGrad)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      label: "البوابة الشرقية",
      desc: "Eastern Gate"
    }
  ];

  return (
    <section id="partners" className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 border-t border-border-light/10">
      {/* Section Header with Fade-in */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          شركاء النجاح
        </span>
        <h2 className="text-xl font-bold text-text-light sm:text-3xl">
          منشآت وثقت باستشاراتنا المالية
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Animated Partners Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none"
      >
        {logos.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              y: -6, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="group relative flex flex-col items-center text-center sm:flex-row sm:text-right gap-5 bg-gradient-to-br from-bg-panel/20 to-bg-panel/5 border border-border-light/10 rounded-2xl px-6 py-5 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-gold-primary/30 hover:bg-bg-panel/25 hover:shadow-[0_12px_32px_rgba(190,156,70,0.15)] transition-all duration-500 overflow-hidden"
          >
            {/* Ambient Background Hover Glow */}
            <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-gold-primary/5 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-gold-light/2 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* SVG Icon Box with Glowing Ring */}
            <div className="flex-shrink-0 flex items-center justify-center p-3 rounded-xl bg-bg-deep/50 border border-border-light/15 group-hover:border-gold-primary/20 group-hover:shadow-[0_0_15px_rgba(190,156,70,0.1)] transition-all duration-500">
              {item.icon}
            </div>
            
            {/* Labels */}
            <div className="text-center sm:text-right flex flex-col justify-center">
              <span className="text-sm font-bold text-text-light group-hover:text-gold-light transition-colors duration-300">
                {item.label}
              </span>
              <span className="text-xs text-text-muted mt-1 font-mono tracking-wide opacity-80">
                {item.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Styled Footer Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center text-xs text-text-muted/75 italic mt-10 select-none"
      >
        * تمثل الشعارات أعلاه نماذج ومحاكاة لعملاء تعاون معهم المكتب مهنياً.
      </motion.p>
    </section>
  );
}
