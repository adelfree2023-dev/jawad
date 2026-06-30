"use client";

import { useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { motion } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={`flex items-center gap-3 rounded-lg border p-4 shadow-xl max-w-sm text-right ${
        type === "success"
          ? "bg-bg-panel border-green-500/20 border-r-4 border-r-green-500"
          : "bg-bg-panel border-red-500/20 border-r-4 border-r-red-500"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      ) : (
        <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
      )}
      <p className="text-xs sm:text-sm text-text-light flex-grow leading-relaxed">
        {message}
      </p>
      <button
        onClick={onClose}
        className="text-text-muted hover:text-text-light transition-colors duration-200 focus:outline-none"
        aria-label="إغلاق التنبيه"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
