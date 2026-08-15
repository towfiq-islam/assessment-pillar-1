"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiTruck, FiXCircle } from "react-icons/fi";
import type { OrderStatus } from "@/types/customer";

const STATUS_STYLES: Record<
  OrderStatus,
  { className: string; icon: ReactNode }
> = {
  Delivered: {
    className: "bg-green-500/10 text-green-400",
    icon: <FiCheckCircle className="h-3.5 w-3.5" />,
  },
  Shipped: {
    className: "bg-blue-500/10 text-blue-400",
    icon: <FiTruck className="h-3.5 w-3.5" />,
  },
  Processing: {
    className: "bg-primary-orange/10 text-primary-orange",
    icon: <FiClock className="h-3.5 w-3.5" />,
  },
  Cancelled: {
    className: "bg-white/10 text-white/40",
    icon: <FiXCircle className="h-3.5 w-3.5" />,
  },
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const { className, icon } = STATUS_STYLES[status];
  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {icon}
      {status}
    </motion.span>
  );
}
