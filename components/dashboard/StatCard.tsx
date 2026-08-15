"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/components/common/animations";

interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  index?: number;
}

export function StatCard({ label, value, icon, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-orange text-black">
        {icon}
      </span>

      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </motion.div>
  );
}
