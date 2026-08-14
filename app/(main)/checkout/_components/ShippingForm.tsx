"use client";

import type { ReactNode } from "react";
import { FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";

export function ShippingForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact & Shipping
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter your contact and delivery information.
        </p>
      </div>

      <div className="space-y-5">
        {/* Contact */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            label="Full name"
            icon={<FiUser />}
            placeholder="Jenny Wilson"
          />

          <Field
            label="Phone number"
            icon={<FiPhone />}
            placeholder="+1 (555) 000-0000"
            type="tel"
          />
        </div>

        <Field
          label="Email address"
          icon={<FiMail />}
          placeholder="jenny@example.com"
          type="email"
        />

        {/* Address */}
        <Field
          label="Street address"
          icon={<FiMapPin />}
          placeholder="123 Product Ave"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field label="City" placeholder="San Francisco" />
          <Field label="State" placeholder="CA" />
          <Field label="ZIP code" placeholder="94103" />
        </div>

        <Field label="Country" placeholder="United States" />

        {/* Shipping method */}
        <div className="pt-2">
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
        </div>
      </div>
    </div>
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
