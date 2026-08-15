"use client";
import { CartItem } from "@/types/cart";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLock, FiTag } from "react-icons/fi";
import { EASE } from "@/lib/animations";

const MotionLink = motion(Link);

interface CartOrderSummaryProps {
  items: CartItem[];
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const SHIPPING = 24;
const TAX_RATE = 0.08;

export function CartOrderSummary({ items }: CartOrderSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm"
    >
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>

      {/* Breakdown */}
      <div className="mt-4 space-y-2.5 text-sm">
        <div className="flex items-center justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">
            {currency.format(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <span>Shipping</span>

          <span className="font-medium text-gray-900">
            {currency.format(SHIPPING)}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <span>Estimated tax</span>

          <span className="font-medium text-gray-900">
            {currency.format(tax)}
          </span>
        </div>
      </div>

      {/* Promo code */}
      <div className="mt-4 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2.5 transition-colors focus-within:border-orange-300 focus-within:bg-white">
        <FiTag className="h-4 w-4 shrink-0 text-gray-400" />

        <input
          type="text"
          placeholder="Promo code"
          className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />

        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          className="shrink-0 text-sm font-semibold text-primary-orange transition-colors hover:text-primary-orange cursor-pointer"
        >
          Apply
        </motion.button>
      </div>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
        <span className="text-lg font-bold text-gray-900">Total</span>

        <span className="text-lg font-bold text-gray-900">
          {currency.format(total)}
        </span>
      </div>

      {/* Checkout */}
      <MotionLink
        href="/checkout"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-2.5 font-semibold text-white transition-colors duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
      >
        <FiLock className="h-4 w-4" />
        Checkout
      </MotionLink>

      <p className="mt-4 text-center text-xs text-gray-400">
        Taxes and shipping calculated at checkout
      </p>
    </motion.aside>
  );
}
