"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Layers,
  CheckSquare,
  BarChart3,
  Calculator,
  ShieldCheck,
  ChevronDown
} from "lucide-react";

interface ServicesProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const servicesData = [
    {
      title: "إعادة بناء وتنظيم الحسابات المتعثرة",
      subtitle: "من الفوضى إلى الحوكمة المالية الدقيقة",
      icon: RotateCcw,
      challenge: "تراكم القيود المحاسبية وتداخل الحسابات المالية مما يعوق اتخاذ القرارات الاقتصادية السليمة.",
      items: [
        "حصر وتدقيق المستندات المالية والقيود المتأخرة وتسجيلها بأثر رجعي.",
        "تسوية وإقفال المطابقات المعلقة وتصفية الأرصدة البنكية والعهد.",
        "استخراج تقرير مالي تشخيصي يعكس المركز الراهن للمنشأة بدقة."
      ],
      result: "تحويل البيانات المالية المتراكمة إلى تقارير مهيكلة تدعم اتخاذ القرارات الفورية والرقابة المالية."
    },
    {
      title: "تأسيس الإدارات والأنظمة المحاسبية",
      subtitle: "بناء البنية التحتية لحساباتكم",
      icon: Layers,
      challenge: "غياب الدورة المستندية المنظمة وعدم ملاءمة برامج المحاسبة المطبقة لحجم وتطلعات المنشأة.",
      items: [
        "تصميم الدورة المستندية والرقابية وتوزيع المهام والصلاحيات المالية.",
        "إعداد شجرة حسابات (دليل محاسبي) احترافي متوافق مع نشاط المنشأة.",
        "ترشيح وتهيئة الأنظمة البرمجية السحابية وتدريب الكادر المسؤول."
      ],
      result: "دورة مستندية مغلقة ونظام مالي رقمي يمنع التسريب المالي ويضمن دقة القيود اليومية."
    },
    {
      title: "المتابعة والمراجعة المحاسبية الدورية",
      subtitle: "الرقابة المالية المستمرة",
      icon: CheckSquare,
      challenge: "الأخطاء والتجاوزات اليومية في التسجيل مما يؤثر على دقة التقارير ربع السنوية والسنوية.",
      items: [
        "الإشراف المحاسبي المستمر على القيود اليومية وتدقيق المعالجات الفنية.",
        "إعداد التسويات البنكية الدورية ومراجعة كشوف الرواتب ومستحقات الموظفين.",
        "إعداد التقارير والموازين الشهرية وإحاطة الملاك بالانحرافات الجوهرية."
      ],
      result: "ضمان الاستقرار الحسابي وتأمين الكيان المالي للمنشأة من الأخطاء العشوائية أو الاختلاس."
    },
    {
      title: "دراسات الجدوى وتقييم الاستثمار",
      subtitle: "تقييم المشروعات وبناء القرار",
      icon: BarChart3,
      challenge: "المخاطرة برأس المال وتدشين مشروعات أو توسعات دون دراسة دقيقة لعناصر العائد والتكلفة.",
      items: [
        "تحليل السوق وحجم الطلب وتحديد التكاليف الرأسمالية والتشغيلية المتوقعة.",
        "بناء النماذج المالية والتدفقات النقدية المستقبلية لتقدير معدلات العائد المتوقعة.",
        "حساب فترات الاسترداد والقيمة الحالية الصافية وتحديد معايير حساسية المخاطر."
      ],
      result: "أداة تقييم علمية واضحة وموثقة تضمن بناء قرار الاستثمار أو التوسع على ركائز اقتصادية سليمة."
    },
    {
      title: "تحليل التكاليف ونقطة التعادل",
      subtitle: "تحسين الكفاءة وهامش الربح",
      icon: Calculator,
      challenge: "صعوبة تسعير المنتجات أو الخدمات بشكل سليم وعدم وضوح حجم المبيعات المطلوب لتغطية التكاليف.",
      items: [
        "تصنيف التكاليف إلى ثابتة ومتغيرة وتخصيصها بدقة على مراكز الإنتاج أو الخدمات.",
        "حساب نقطة التعادل وهوامش المساهمة لتحديد المزيج التسويقي والبيعي الأكثر ربحية.",
        "تقديم توصيات وحلول تسعير متزنة تدعم زيادة مجمل وصافي الربح للمنشأة."
      ],
      result: "سياسة تسعيرية علمية مدروسة تضمن تحقيق هوامش ربح تغطي التكاليف وتدفع نحو النمو."
    },
    {
      title: "الاستشارات والامتثال الضريبي",
      subtitle: "الامتثال والحوكمة التنظيمية",
      icon: ShieldCheck,
      challenge: "مخاطر الغرامات والتسويات المالية بسبب الفهم الخاطئ أو عدم الالتزام بمتطلبات هيئة الزكاة والضريبة والجمارك.",
      items: [
        "مراجعة ومطابقة الفواتير والإقرارات لضمان الامتثال لضريبة القيمة المضافة وعناصرها.",
        "المساندة في إعداد المستندات والملفات المطلوبة للفحص والرد الاستشاري القانوني.",
        "تقديم توصيات للتخطيط الزكوي والضريبي السليم وتفادي التجاوزات النظامية المقررة."
      ],
      result: "ضمان الامتثال المالي والضريبي الكامل وحماية المنشأة من الأخطاء المالية والغرامات المحتملة."
    }
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          الخدمات المحاسبية والاستشارية
        </span>
        <h2 className="text-2xl font-extrabold text-text-light sm:text-4xl">
          أدوات وحلول مالية متكاملة لضبط وتنظيم حساباتكم
        </h2>
        <div className="w-16 h-0.5 bg-gold-primary mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
          نقدم استشارات عملية مبنية على الفهم الدقيق لطبيعة الأعمال، لمساعدتكم في تجاوز التحديات وحفظ تدفقاتكم النقدية.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          const isExpanded = activeCard === index;

          return (
            <motion.div
              key={index}
              layout="position"
              transition={{ layout: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } }}
              onMouseEnter={() => window.innerWidth > 768 && setActiveCard(index)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveCard(null)}
              onClick={() => window.innerWidth <= 768 && setActiveCard(isExpanded ? null : index)}
              className={`group flex flex-col rounded-xl border bg-bg-panel/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.15)] backdrop-blur-xs transition-all duration-300 cursor-pointer ${
                isExpanded ? "border-gold-light bg-bg-panel" : "border-border-light hover:border-gold-primary/30"
              }`}
            >
              {/* Card Header (Always visible) */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg border transition-colors duration-300 ${
                    isExpanded ? "bg-gold-primary/10 border-gold-light/20 text-gold-light" : "bg-bg-deep border-border-light text-gold-primary group-hover:text-gold-light"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-base font-bold text-text-light group-hover:text-gold-light transition-colors duration-200">
                      {service.title}
                    </h3>
                    <span className="block text-xs font-semibold text-text-muted mt-1">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 text-text-muted transition-transform duration-300 ${
                  isExpanded ? "rotate-180 text-gold-light" : "group-hover:text-text-light"
                }`} />
              </div>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 space-y-5 text-right border-t border-border-light/10 mt-5">
                      {/* Challenge Section */}
                      <div className="border-r-2 border-gold-primary/50 bg-gold-primary/2 p-3 rounded-l">
                        <span className="block text-[10px] font-bold text-gold-light uppercase tracking-wider mb-1">
                          التحدي المالي الشائع
                        </span>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {service.challenge}
                        </p>
                      </div>

                      {/* Detail Bullet Points */}
                      <ul className="space-y-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="relative pr-5 text-xs text-text-muted leading-relaxed">
                            <span className="absolute right-0 top-1.5 h-1.5 w-1.5 rounded-full bg-gold-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Impact/Result Section */}
                      <div className="border border-gold-primary/10 bg-gold-primary/5 p-3 rounded-lg">
                        <span className="block text-[10px] font-bold text-gold-light uppercase tracking-wider mb-1">
                          الأثر الاستثماري المرجو
                        </span>
                        <p className="text-xs text-text-light font-medium leading-relaxed">
                          {service.result}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenModal(service.title);
                          }}
                          className="w-full rounded-lg bg-gold-primary hover:bg-gold-light py-2.5 text-xs font-bold text-bg-deep transition-all duration-200"
                        >
                          طلب الخدمة الاستشارية
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
