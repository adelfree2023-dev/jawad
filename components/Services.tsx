"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Briefcase,
  Layers,
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
      title: "مسك الدفاتر الشهري",
      subtitle: "Monthly Bookkeeping",
      icon: FileSpreadsheet,
      challenge: "تشتغل كل الشهر وبعدين ما تعرف وين راحت الفلوس — ولا عندك أرقام تثق فيها لما تحتاجها.",
      items: [
        "تسجيل كل عملية مالية يومياً: بيع، شراء، مصروفات",
        "مطابقة كشف حسابك البنكي مع الدفاتر شهرياً",
        "إعداد ميزان المراجعة وقائمة الأرباح والخسائر",
        "تصنيف المصروفات وفق الدليل المحاسبي المعتمد",
        "تقرير مالي مختصر في نهاية كل شهر"
      ],
      result: "قوائم مالية شهرية + تقرير بسيط: إيش دخل وإيش طلع وكم تبقى."
    },
    {
      title: "المدير المالي الجزئي",
      subtitle: "CFO on Demand",
      icon: Briefcase,
      challenge: "محتاج شخص يفهم أرقامك ويساعدك في القرارات الكبيرة — بس ما تبي تدفع راتب مدير مالي طول السنة.",
      items: [
        "جلسات دورية لمراجعة الأداء المالي وتفسير الأرقام",
        "تحليل هامش الربح وكفاءة التكاليف والـ KPIs",
        "المشاركة في قرارات التوسع والتسعير وإعادة الهيكلة",
        "بناء الميزانية التشغيلية السنوية ومتابعة الانحرافات",
        "مراجعة الشروط المالية في العقود الكبرى قبل التوقيع"
      ],
      result: "عقل مالي استراتيجي بجانبك بجزء بسيط من تكلفة التوظيف الكاملة."
    },
    {
      title: "إعادة تأسيس القسم المحاسبي",
      subtitle: "Accounting Restructuring",
      icon: Layers,
      challenge: "عندك شركة تشتغل بس الحسابات فوضى — ما تعرف مين يسجل إيش، والأرقام اللي عندك ما تثق فيها.",
      items: [
        "تشخيص الوضع المحاسبي الحالي وتحديد الثغرات",
        "تصميم دليل حسابات مناسب لطبيعة نشاطك",
        "وضع آليات الرقابة الداخلية وتوزيع الصلاحيات",
        "توحيد مصادر البيانات والقضاء على الازدواجية",
        "تدريب الفريق الداخلي وتسليم النظام كاملاً"
      ],
      result: "دليل حسابات + إجراءات محاسبية مكتوبة + هيكل قسم مالي جاهز للتشغيل."
    },
    {
      title: "دراسة الجدوى الاقتصادية",
      subtitle: "Feasibility Study",
      icon: BarChart3,
      challenge: "عندك فكرة مشروع أو تبي تتوسع، وما تعرف إذا الأرقام تقول نعم أو لا قبل ما تدفع من جيبك.",
      items: [
        "تحليل السوق المستهدف وحجم الطلب المتوقع",
        "توقعات مالية لثلاثة سيناريوهات: متفائل، واقعي، متحفظ",
        "حساب فترة الاسترداد (Payback Period) وصافي القيمة الحالية (NPV)",
        "تحليل نقطة التعادل للمشروع الجديد",
        "تقييم المخاطر وعوامل النجاح الحرجة"
      ],
      result: "تقرير جدوى احترافي + ملحق إكسل بالأرقام والسيناريوهات — تقرأه وتقرر."
    },
    {
      title: "تحليل التكاليف ونقطة التعادل",
      subtitle: "Cost & Break-Even Analysis",
      icon: Calculator,
      challenge: "تبيع وتشتغل بس ما تعرف هل أنت تربح فعلاً — وتسعّر بالحدس والله يكون في العون.",
      items: [
        "تصنيف وتحليل التكاليف: ثابتة، متغيرة، مباشرة وغير مباشرة",
        "تحديد التكلفة الفعلية لكل منتج أو خدمة بالتفصيل",
        "حساب نقطة التعادل بالكمية والقيمة المالية",
        "تحليل هامش المساهمة لكل منتج أو خدمة",
        "توصيات تسعير مبنية على الأرقام لا الحدس"
      ],
      result: "تقرير تكاليف تفصيلي + نموذج إكسل للتسعير تقدر تحدّثه بنفسك."
    },
    {
      title: "الامتثال الضريبي — ضريبة القيمة المضافة",
      subtitle: "VAT Compliance Services",
      icon: ShieldCheck,
      challenge: "خايف من مخالفة زاتكا، أو إقراراتك تأخرت، أو ما تعرف كيف تسجل من الأساس.",
      items: [
        "التسجيل في ضريبة القيمة المضافة لدى زاتكا أو إلغاؤه",
        "إعداد الإقرار الضريبي الدوري وتقديمه إلكترونياً في الموعد",
        "بناء النظام الضريبي الداخلي والفاتورة الإلكترونية",
        "مراجعة الإقرارات السابقة وتصحيح الأخطاء قبل اكتشافها",
        "استشارة ضريبية مستمرة لضمان الامتثال الكامل"
      ],
      result: "ملف امتثال ضريبي متكامل + تقرير الإقرار + نظام داخلي جاهز. امتثال كامل مع زاتكا بلا قلق."
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
              className={`group relative flex flex-col rounded-xl border bg-bg-panel/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.15)] backdrop-blur-xs transition-all duration-300 cursor-pointer ${
                isExpanded ? "border-gold-light bg-bg-panel" : "border-border-light hover:border-gold-primary/30"
              }`}
            >
              {/* Card Header (Always visible) */}
              <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-right gap-4 pl-8 md:pl-0">
                <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
                  <div className={`p-3 rounded-lg border transition-colors duration-300 ${
                    isExpanded ? "bg-gold-primary/10 border-gold-light/20 text-gold-light" : "bg-bg-deep border-border-light text-gold-primary group-hover:text-gold-light"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-light group-hover:text-gold-light transition-colors duration-200">
                      {service.title}
                    </h3>
                    <span className="block text-xs font-semibold text-text-muted mt-1">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`absolute left-6 top-6.5 h-5 w-5 text-text-muted transition-transform duration-300 ${
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
                          المشكلة
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
                          ما ستتسلمه
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
                          className="w-full rounded-lg bg-gold-primary hover:bg-gold-light py-2.5 text-xs font-bold text-bg-deep transition-all duration-200 cursor-pointer"
                        >
                          اطلب هذه الخدمة
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
