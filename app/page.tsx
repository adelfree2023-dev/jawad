"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import ConsultationModal from "../components/ConsultationModal";
import Toast from "../components/Toast";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("استشارة عامة");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleOpenModal = (serviceName?: string) => {
    setSelectedService(serviceName || "استشارة عامة");
    setIsModalOpen(true);
  };

  const handleShowToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-bg-deep text-text-light selection:bg-gold-primary/30 selection:text-text-light overflow-x-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Faded grid */}
        <div className="absolute inset-0 bg-grid-overlay opacity-50" />
        
        {/* Lateral Ambient Glow Spots */}
        <div className="absolute top-[15%] -right-64 w-[500px] h-[500px] rounded-full bg-gold-primary/4 blur-[120px]" />
        <div className="absolute top-[45%] -left-64 w-[600px] h-[600px] rounded-full bg-bg-panel-hover/40 blur-[150px]" />
        <div className="absolute top-[75%] -right-64 w-[500px] h-[500px] rounded-full bg-gold-primary/3 blur-[120px]" />
      </div>

      {/* Header / Navigation */}
      <Header onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenModal={handleOpenModal} />
        
        <About />
        
        <Services onOpenModal={handleOpenModal} />
        
        <Process />
        
        <Partners />
        
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-light/10 bg-bg-deep py-8 text-center text-xs text-text-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="leading-relaxed">
            حقوق الطبع والنشر © {new Date().getFullYear()} مكتب جواد بن عبدالله الخرس للاستشارات المالية. جميع الحقوق محفوظة.
          </p>
          <p className="mt-2 text-[10px] opacity-75">
            الاستشارات المالية المقدمة تخضع للتراخيص والتنظيمات المحلية لوزارة التجارة والجهات الرقابية المختصة بموجب الترخيص رقم (506662700) للاستشارات المالية لغير الأوراق المالية.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#about" className="hover:text-gold-light transition-colors duration-200">عن المكتب</a>
            <a href="#services" className="hover:text-gold-light transition-colors duration-200">الخدمات الاستشارية</a>
            <a href="#process" className="hover:text-gold-light transition-colors duration-200">منهجية العمل</a>
            <a href="#contact" className="hover:text-gold-light transition-colors duration-200">اتصل بنا</a>
          </div>
        </div>
      </footer>

      {/* Dynamic Overlay Popup Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
        onShowToast={handleShowToast}
      />

      {/* Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <div className="fixed top-24 left-8 z-50 max-w-sm">
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button (Right Aligned) */}
      <div className="fixed bottom-8 right-8 z-40 flex items-center gap-3 group">
        <a
          href="https://api.whatsapp.com/send?phone=966506662700&text=%D8%B7%D9%84%D8%A8%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%85%D8%A7%D9%84%D9%8A%D8%A9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-wa-green text-text-light shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-108 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300"
          aria-label="تواصل مباشر عبر واتساب"
        >
          {/* Detailed WhatsApp Vector Logo with telephone receiver */}
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
          </svg>
        </a>
        <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none bg-bg-panel border border-border-light text-text-light px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-lg select-none">
          تواصل مباشر
        </span>
      </div>
    </div>
  );
}
