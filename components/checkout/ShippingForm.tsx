"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import {
  EASE,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/common/animations";

export function ShippingForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: EASE }}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-5"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact & Shipping
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter your contact and delivery information.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.08, 0.1)}
        className="space-y-5"
      >
        {/* Contact */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.div variants={fadeUp}>
            <Field
              label="Full name"
              icon={<FiUser />}
              placeholder="Jenny Wilson"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Field
              label="Phone number"
              icon={<FiPhone />}
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <Field
            label="Email address"
            icon={<FiMail />}
            placeholder="jenny@example.com"
            type="email"
          />
        </motion.div>

        <motion.label variants={fadeUp} className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">
            Address
          </span>

          <div className="relative flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 transition-colors focus-within:border-orange-400 focus-within:bg-white">
            <span className="shrink-0 text-gray-400 absolute top-3 left-3">
              <FiMapPin />
            </span>

            <textarea
              placeholder="Street address"
              className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none ps-5"
              rows={4}
            ></textarea>
          </div>
        </motion.label>

        {/* Shipping method */}
        <motion.div variants={fadeUp} className="pt-2">
          <span className="mb-3 block text-sm font-medium text-gray-700">
            Shipping method
          </span>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ShippingOption
              name="Standard"
              detail="5–7 business days"
              price="$24"
              defaultChecked
            />

            <ShippingOption
              name="Express"
              detail="1–2 business days"
              price="$49"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface FieldProps {
  label: string;
  placeholder?: string;
  icon?: ReactNode;
  type?: string;
}

function Field({ label, placeholder, icon, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
        {icon && <span className="shrink-0 text-gray-400">{icon}</span>}

        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </label>
  );
}

interface ShippingOptionProps {
  name: string;
  detail: string;
  price: string;
  defaultChecked?: boolean;
}

function ShippingOption({
  name,
  detail,
  price,
  defaultChecked,
}: ShippingOptionProps) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50">
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="shipping-method"
          defaultChecked={defaultChecked}
          className="h-4 w-4 accent-orange-500"
        />

        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>

          <p className="text-xs text-gray-500">{detail}</p>
        </div>
      </div>

      <span className="text-sm font-semibold text-gray-900">{price}</span>
    </label>
  );
}
