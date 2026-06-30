"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function CountUp({ value, duration = 1.5, suffix = "", prefix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-mono text-3xl font-extrabold tracking-tight text-text-light sm:text-4xl md:text-5xl">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface HeroProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-radial-[circle_at_top,_var(--color-bg-panel-hover)_0%,_var(--color-bg-deep)_70%] py-24 sm:py-32 text-center">
      {/* Visual Depth Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gold-primary/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-primary/20 bg-gold-primary/5 px-4 py-1.5 text-xs font-semibold text-gold-light mb-8">
          مكتب مرخص للاستشارات المالية لغير الأوراق المالية
        </div>

        {/* Headings */}
        <h2 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-text-light sm:text-5xl md:text-6xl/tight">
          نصنع الاستقرار المالي ونرسم مسارات نمو منشآتكم الاستثمارية
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-text-muted">
          حلول محاسبية متكاملة ودراسات جدوى اقتصادية واستشارات ضريبية وزكوية مبنية على أسس أكاديمية رصينة لدعم اتخاذ القرار وتفادي المخاطر.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal("استشارة استراتيجية")}
            className="rounded-lg bg-gold-primary px-8 py-3.5 text-sm font-bold text-bg-deep hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(190,156,70,0.3)] transition-all duration-200 cursor-pointer"
          >
            طلب استشارة استراتيجية
          </button>
          <a
            href="#services"
            className="rounded-lg border border-border-light bg-bg-panel px-8 py-3.5 text-sm font-bold text-text-light hover:border-gold-light hover:bg-bg-panel-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            تصفح خدماتنا الاستشارية
          </a>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-20 max-w-4xl border-t border-border-light pt-12">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-4">
            {[
              { label: "نسبة رضا عملائنا", value: 100, suffix: "%" },
              { label: "سنوات خبرة مهنية وأكاديمية", value: 10, prefix: "+" },
              { label: "ساعة متوسط زمن الرد", value: 24 },
              { label: "منشأة قمنا بتمكينها وتطويرها", value: 50, prefix: "+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <span className="mt-2 text-xs font-semibold text-text-muted sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
