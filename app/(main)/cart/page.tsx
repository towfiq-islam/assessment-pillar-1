"use client";
import { cartItems } from "@/components/data/cart";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { CartLineItem } from "../../../components/cart/CartLineItem";
import { CartOrderSummary } from "../../../components/cart/CartOrderSummary";
import SectionTitle from "@/components/common/SectionTitle";
import { EASE, staggerContainer, viewportOnce } from "@/components/common/animations";

export default function CartPage() {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="container pt-7 md:pt-10 xl:pt-12 pb-10 md:pb-16 xl:pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mb-5 md:mb-7"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}>
            <SectionTitle>
              Your <span className="text-orange-500">Cart</span>
            </SectionTitle>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
            className="mt-1 xl:mt-2 text-[15px] text-gray-500"
          >
            Review your items before checkout.
          </motion.p>
        </motion.div>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
            {/* Line items */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2 overflow-hidden">
              {cartItems.map((item, index) => (
                <CartLineItem
                  key={item.product.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <CartOrderSummary items={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white py-24 text-center shadow-sm"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
        <FiShoppingBag className="h-8 w-8 text-orange-500" />
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-900">
          Your cart is empty
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Looks like you haven&apos;t added anything yet.
        </p>
      </div>

      <Link
        href="/"
        className="mt-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
      >
        Browse products
      </Link>
    </motion.div>
  );
}
