"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          من نحن — التأسيس والرسالة
        </span>
        <h2 className="text-2xl font-extrabold text-text-light sm:text-4xl">
          من نحن وكيف نساهم في تمكين وحوكمة أعمالكم
        </h2>
        <div className="w-16 h-0.5 bg-gold-primary mx-auto mt-4 rounded-full" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Content Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-right"
        >
          <h3 className="text-xl font-bold text-text-light text-center lg:text-right">
            حلول مالية متزنة تنطلق من الخبرة الأكاديمية والواقع التجاري للمملكة
          </h3>
          <div className="space-y-4">
            <p className="text-text-muted leading-relaxed text-right">
              مكتب جواد بن عبدالله الخرس للاستشارات المالية لغير الأوراق المالية — مكتب متخصص في تقديم الخدمات المحاسبية والمالية والضريبية بخبرة عميقة في السوق والبيئة التنظيمية السعودية.
            </p>
            <p className="text-text-muted leading-relaxed text-right font-medium">
              نخدم أصحاب المنشآت الذين يريدون أرقاماً يثقون بها، وامتثالاً لا يقلقهم، وقرارات مالية مبنية على أساس — لا على تخمين.
            </p>
            <p className="text-text-muted leading-relaxed text-right">
              نهدف إلى تنظيم وتأمين وحوكمة حسابات المنشأة وتطبيق أرقى المعايير المهنية لتفادي الخسائر وتوفير قراءة دقيقة وسهلة للوضع المالي والتدفقات النقدية.
            </p>
          </div>

          <div className="border-r-4 border-gold-primary bg-gold-primary/2 p-5 rounded-l-lg mt-8">
            <p className="font-medium text-text-light text-sm leading-relaxed text-right">
              نلتزم بتقديم تقارير مالية شفافة وواضحة تمنح الملاك وأصحاب القرار رؤية متكاملة تدعم قرارات التنمية والاستقرار المالي والتوسع التجاري المدروس.
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Cards Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
        >
          <div className="group rounded-xl border border-border-light bg-bg-panel/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xs hover:border-border-hover hover:scale-102 transition-all duration-300">
            <h4 className="text-base font-bold text-gold-light group-hover:text-gold-primary transition-colors duration-200 mb-3 text-center sm:text-right">
              رؤيتنا
            </h4>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed text-right">
              أن نكون الشريك المالي والاستشاري الأكثر موثوقية وتمكيناً للمنشآت التجارية والشركات الواعدة في السوق المحلي.
            </p>
          </div>

          <div className="group rounded-xl border border-border-light bg-bg-panel/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xs hover:border-border-hover hover:scale-102 transition-all duration-300">
            <h4 className="text-base font-bold text-gold-light group-hover:text-gold-primary transition-colors duration-200 mb-3 text-center sm:text-right">
              رسالتنا
            </h4>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed text-right">
              تقديم استشارات مالية وضريبية رصينة تحمي الكيانات الاقتصادية وتدفعها نحو النمو المستدام وتتفادى العقوبات والغرامات.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
