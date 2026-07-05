"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  onShowToast: (message: string, type: "success" | "error") => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  serviceName,
  onShowToast,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  // Reset form when serviceName changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        phone: "",
        details: "",
      });
      setErrors({
        name: false,
        phone: false,
      });
    }
  }, [isOpen, serviceName]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "phone") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    // Redirect to WhatsApp
    const whatsappNumber = "966506662700";
    const rawMessage = `طلب استشارة مالية

نوع الخدمة: ${serviceName}
الاسم الكامل: ${formData.name.trim()}
رقم الجوال: ${formData.phone.trim()}
تفاصيل إضافية: ${formData.details.trim() || "لا يوجد تفاصيل إضافية"}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    onShowToast("تم التحقق من البيانات بنجاح، جاري تحويلكم للمستشار المالي عبر واتساب.", "success");
    
    setTimeout(() => {
      window.location.href = whatsappUrl;
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-deep/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border-light bg-bg-modal p-6 sm:p-8 shadow-2xl z-10 text-right"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute left-4 top-4 p-2 text-text-muted hover:text-text-light transition-colors duration-200"
              aria-label="إغلاق النافذة"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pl-8">
              <h3 className="text-base sm:text-lg font-bold text-text-light">
                طلب استشارة مالية مخصصة
              </h3>
              <span className="block text-xs font-semibold text-gold-light mt-1">
                الخدمة المحددة: {serviceName}
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="modal-name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className={`peer w-full bg-bg-deep/50 border rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 ${
                    errors.name ? "border-red-500/50" : "border-border-light"
                  }`}
                  required
                />
                <label
                  htmlFor="modal-name"
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
                  id="modal-phone"
                  placeholder=" "
                  value={formData.phone}
                  onChange={handleChange}
                  className={`peer w-full bg-bg-deep/50 border rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 font-mono text-right ${
                    errors.phone ? "border-red-500/50" : "border-border-light"
                  }`}
                  required
                />
                <label
                  htmlFor="modal-phone"
                  className="absolute right-4 top-3.5 origin-top-right text-xs sm:text-sm text-text-muted transition-all duration-200 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-gold-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-gold-primary"
                >
                  رقم الجوال (05xxxxxxxx) <span>*</span>
                </label>
              </div>

              {/* Message Details */}
              <div className="relative">
                <textarea
                  name="details"
                  id="modal-details"
                  placeholder=" "
                  value={formData.details}
                  onChange={handleChange}
                  rows={3}
                  className="peer w-full bg-bg-deep/50 border border-border-light rounded-lg px-4 py-3 text-sm text-text-light placeholder-transparent focus:outline-none focus:ring-2 focus:ring-gold-primary/50 focus:border-transparent transition-all duration-200 resize-y min-h-[80px]"
                />
                <label
                  htmlFor="modal-details"
                  className="absolute right-4 top-3.5 origin-top-right text-xs sm:text-sm text-text-muted transition-all duration-200 pointer-events-none peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-gold-primary peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-gold-primary"
                >
                  تفاصيل إضافية أو حجم المنشأة
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary bg-[size:200%_auto] hover:bg-[100%_0] py-3.5 text-xs sm:text-sm font-bold text-bg-deep hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(190,156,70,0.35)] transition-all duration-500 cursor-pointer"
                >
                  إرسال طلب الاستشارة عبر واتساب
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
