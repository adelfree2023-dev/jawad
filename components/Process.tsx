"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the stepper section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  // Smooth the scroll progress values
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      num: 1,
      title: "استشارة أولية مجانية",
      desc: "نستمع لوضعك ونفهم احتياجك الحقيقي قبل أي التزام.",
    },
    {
      num: 2,
      title: "تشخيص وتحليل",
      desc: "نقيّم وضعك الحالي ونحدد الأولويات والأدوات المناسبة.",
    },
    {
      num: 3,
      title: "تنفيذ وإنجاز",
      desc: "نعمل بمعايير احترافية ونلتزم بالمواعيد والمخرجات المتفق عليها.",
    },
    {
      num: 4,
      title: "تسليم ومتابعة",
      desc: "تتسلم مخرجك كاملاً مع دعم مستمر لضمان الاستفادة الفعلية.",
    },
  ];

  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-radial-[circle_at_bottom,_var(--color-bg-panel)_0%,_var(--color-bg-deep)_70%]">
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          منهجية العمل
        </span>
        <h2 className="text-2xl font-extrabold text-text-light sm:text-4xl">
          خطوات استشارية منظمة لضمان حوكمة حساباتكم
        </h2>
        <div className="w-16 h-0.5 bg-gold-primary mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
          نتبع منهجاً أكاديمياً وعملياً متزناً يبدأ من فهم دقيق لواقع المنشأة وحتى تحقيق الاستقرار والرقابة المالية الذاتية.
        </p>
      </div>

      {/* Stepper Container */}
      <div ref={containerRef} className="relative max-w-3xl mx-auto pr-8 sm:pr-12 md:pr-16">
        
        {/* Dynamic Progression SVG Line */}
        <div className="absolute right-[19px] sm:right-[27px] md:right-[35px] top-4 bottom-4 w-1 pointer-events-none">
          {/* Static gray track */}
          <div className="absolute inset-0 bg-border-light/40 w-0.5 rounded-full" />
          
          {/* Animated active gold track */}
          <motion.div
            className="absolute top-0 left-0 w-0.5 bg-gold-primary origin-top rounded-full"
            style={{ 
              height: "100%",
              scaleY: scaleY 
            }}
          />
        </div>

        {/* Steps List */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-start text-right">
              {/* Stepper Node (Circle) */}
              <motion.div
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="absolute right-[-33px] sm:right-[-45px] md:right-[-57px] top-0 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 bg-bg-deep border-border-light text-text-light font-mono font-extrabold text-sm sm:text-base md:text-lg z-10 transition-colors duration-300 select-none"
                // Using framer motion dynamic classes on active states
                variants={{
                  inactive: { opacity: 1, scale: 1, borderColor: "rgba(190, 156, 70, 0.2)", color: "#9bb0ac", boxShadow: "none" },
                  active: { 
                    opacity: 1,
                    scale: 1,
                    borderColor: "#be9c46", 
                    color: "#dfc27d",
                    boxShadow: "0 0 15px rgba(190, 156, 70, 0.3)"
                  }
                }}
                whileInView="active"
                initial="inactive"
              >
                {step.num}
              </motion.div>

              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="mr-6 sm:mr-10 md:mr-12 group rounded-xl border border-border-light bg-bg-panel/20 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.1)] backdrop-blur-xs hover:border-gold-primary/20 hover:bg-bg-panel/40 transition-all duration-300 w-full"
              >
                <h3 className="text-base sm:text-lg font-bold text-text-light group-hover:text-gold-light transition-colors duration-200 mb-2 text-center sm:text-right">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-text-muted text-right">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
