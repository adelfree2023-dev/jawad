"use client";

import { useState } from "react";
import { Phone, Mail, Award, MessageSquare } from "lucide-react";

interface ContactProps {
  onShowToast: (message: string, type: "success" | "error") => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "دراسة جدوى اقتصادية",
    details: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "phone") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    const nameValid = formData.name.trim().length >= 3;
    const saudiPhoneRegex = /^05[0-9]{8}$/;
    const phoneValid = saudiPhoneRegex.test(formData.phone.trim());

    setErrors({
      name: !nameValid,
      phone: !phoneValid,
    });

    if (!nameValid) {
      onShowToast("يرجى إدخال الاسم الثلاثي بشكل صحيح (3 حروف على الأقل).", "error");
      return;
    }

    if (!phoneValid) {
      onShowToast("يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 خانات.", "error");
      return;
    }

    // Dynamic WhatsApp Redirect (Emoji-free academic message template)
    const whatsappNumber = "966506662700";
    const rawMessage = `طلب استشارة مالية

الاسم الكامل: ${formData.name.trim()}
رقم الجوال: ${formData.phone.trim()}
الخدمة المطلوبة: ${formData.service}
تفاصيل الطلب الاستشاري: ${formData.details.trim() || "لا يوجد تفاصيل إضافية"}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Success Action
    onShowToast("تم التحقق من البيانات بنجاح، جاري تحويلكم للمستشار المالي عبر واتساب.", "success");
    
    setTimeout(() => {
      window.location.href = whatsappUrl;
      // Reset form fields
      setFormData({
        name: "",
        phone: "",
        service: "دراسة جدوى اقتصادية",
        details: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 bg-radial-[circle_at_bottom,_var(--color-bg-panel-hover)_0%,_var(--color-bg-deep)_70%]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-gold-light uppercase block mb-3">
          تواصل مباشر
        </span>
        <h2 className="text-2xl font-extrabold text-text-light sm:text-4xl">
          ابدأ رحلة التنظيم المالي لمشروعكم اليوم
        </h2>
        <div className="w-16 h-0.5 bg-gold-primary mx-auto mt-4 rounded-full" />
        <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
          فريقنا الاستشاري متأهب لمناقشة تحدياتكم ووضع الحلول المناسبة لتنظيم حساباتكم وضبط تدفقاتكم النقدية.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-right">
          <h3 className="text-xl font-bold text-text-light text-center lg:text-right">
            بيانات ومعلومات الاتصال الرسمية
          </h3>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start text-center lg:text-right gap-4">
              <div className="p-3 rounded-lg border border-border-light bg-gold-primary/2 text-gold-primary flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-sm text-text-light">الاتصال الهاتفي والمراسلات</strong>
                <a href="tel:+966506662700" className="text-sm text-text-muted hover:text-text-light font-mono dir-ltr inline-block mt-1">
                  0506662700
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start text-center lg:text-right gap-4">
              <div className="p-3 rounded-lg border border-border-light bg-gold-primary/2 text-gold-primary flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <strong className="block text-sm text-text-light">المراسلات البريدية الاستشارية</strong>
                <a href="mailto:info@jawadadvisory.com" className="text-sm text-text-muted hover:text-text-light font-mono mt-1 block">
                  info@jawadadvisory.com
                </a>
              </div>
            </div>

            {/* WhatsApp Direct CTA */}
            <div className="pt-2 text-center lg:text-right">
              <a
                href="https://api.whatsapp.com/send?phone=966506662700&text=%D8%B7%D9%84%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%A7%D9%84%D9%8A%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-wa-green px-6 py-3.5 text-sm font-bold text-text-light hover:bg-wa-green-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                تواصل مباشر عبر واتساب
              </a>
            </div>
          </div>

          {/* Licensing Info */}
          <div className="border-t border-border-light pt-6 mt-8">
            <div className="flex flex-col items-center lg:flex-row lg:items-start text-center lg:text-right gap-3">
              <Award className="h-5 w-5 text-gold-light flex-shrink-0 mt-0.5" />
              <p className="text-xs text-text-muted leading-relaxed text-right">
                مكتب جواد بن عبدالله الخرس للاستشارات المالية، مرخص رسمياً في المملكة العربية السعودية لتقديم الخدمات الاستشارية لغير الأوراق المالية. نلتزم بكافة المعايير المهنية والقوانين المنظمة للقطاع التجاري الصادرة عن الجهات الحكومية والرقابية ذات الصلة.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Capture Form Column */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border-light bg-bg-panel/40 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.15)] backdrop-blur-xs">
            <h4 className="text-lg font-bold text-text-light mb-2 text-center lg:text-right">طلب استشارة مجانية أولية</h4>
            <p className="text-xs sm:text-sm text-text-muted mb-8 text-center lg:text-right">
              يرجى تعبئة الحقول أدناه بدقة، وسيقوم المستشار المالي بدراسة المعطيات الأولية والتواصل معكم.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full bg-bg-deep/50 border rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 ${
                    errors.name ? "border-red-500/50" : "border-border-light"
                  }`}
                  required
                />
                <label
                  htmlFor="form-name"
                  className="absolute right-4 top-3.5 origin-top-right text-xs sm:text-sm text-text-muted transition-all duration-200 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-gold-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-gold-primary"
                >
                  الاسم الكامل <span>*</span>
                </label>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="form-phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className={`peer w-full bg-bg-deep/50 border rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 font-mono text-right ${
                    errors.phone ? "border-red-500/50" : "border-border-light"
                  }`}
                  required
                />
                <label
                  htmlFor="form-phone"
                  className="absolute right-4 top-3.5 origin-top-right text-xs sm:text-sm text-text-muted transition-all duration-200 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-gold-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-gold-primary"
                >
                  رقم الجوال (05xxxxxxxx) <span>*</span>
                </label>
              </div>

              {/* Service Select */}
              <div className="relative">
                <select
                  name="service"
                  id="form-service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-bg-deep/50 border border-border-light rounded-lg px-4 py-3 text-xs sm:text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_24_24%22_fill=%22none%22_stroke=%22%23be9c46%22_stroke-width=%222%22_stroke-linecap=%22round%22_stroke-linejoin=%22round%22%3E%3Cpath_d=%22M6_9l6_6_6-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[left_16px_center] bg-[length:16px]"
                >
                  <option value="دراسة جدوى اقتصادية">دراسة جدوى اقتصادية</option>
                  <option value="إعادة بناء وتنظيم الحسابات المتعثرة">إعادة بناء وتنظيم الحسابات المتعثرة</option>
                  <option value="تأسيس الإدارات والأنظمة المحاسبية">تأسيس الإدارات والأنظمة المحاسبية</option>
                  <option value="المتابعة والمراجعة المحاسبية الدورية">المتابعة والمراجعة المحاسبية الدورية</option>
                  <option value="تحليل التكاليف ونقطة التعادل">تحليل التكاليف ونقطة التعادل</option>
                  <option value="الاستشارات والامتثال الضريبي والزكوي">الاستشارات والامتثال الضريبي والزكوي</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="relative">
                <textarea
                  name="details"
                  id="form-details"
                  placeholder=" "
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="peer w-full bg-bg-deep/50 border border-border-light rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 resize-y min-h-[100px]"
                />
                <label
                  htmlFor="form-details"
                  className="absolute right-4 top-3.5 origin-top-right text-xs sm:text-sm text-text-muted transition-all duration-200 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-gold-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-gold-primary"
                >
                  تفاصيل إضافية حول التحديات أو المنشأة
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary bg-[size:200%_auto] hover:bg-[100%_0] py-3.5 text-sm font-bold text-bg-deep hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(190,156,70,0.35)] transition-all duration-500 cursor-pointer"
                >
                  إرسال طلب الاستشارة عبر واتساب
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
