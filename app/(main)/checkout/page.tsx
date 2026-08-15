"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { ShippingForm } from "../../../components/checkout/ShippingForm";
import { cartItems } from "@/components/data/cart";
import { CartOrderSummary } from "../../../components/cart/CartOrderSummary";
import SectionTitle from "@/components/common/SectionTitle";
import { EASE, staggerContainer, viewportOnce } from "@/components/common/animations";

export default function CheckoutPage() {
  return (
    <main className="container pt-8 md:pt-10 pb-10 md:pb-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } } }}
          >
            <Link
              href="/cart"
              className="mb-1 md:mb-3 flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-500"
            >
              <FiArrowLeft className="h-3.5 w-3.5" />
              Back to cart
            </Link>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } } }}
            className="mb-5 md:mb-7"
          >
            <SectionTitle>Checkout</SectionTitle>
            <p className="mt-1 md:mt-2 text-[15px] text-gray-500">
              Complete your information to place your order.
            </p>
          </motion.div>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Forms */}
          <div className="space-y-4 md:space-y-6 lg:col-span-2">
            <ShippingForm />
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <CartOrderSummary items={cartItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
