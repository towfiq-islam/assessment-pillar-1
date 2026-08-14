"use client";

import { useState } from "react";
import { FiCalendar, FiCreditCard, FiLock } from "react-icons/fi";
import { SiPaypal } from "react-icons/si";

type PaymentMethod = "card" | "paypal";

export function PaymentForm() {
  const [method, setMethod] = useState<PaymentMethod>("card");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Payment</h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose your preferred payment method.
        </p>
      </div>

      {/* Payment method */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setMethod("card")}
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
            method === "card"
              ? "border-orange-400 bg-orange-50 text-orange-600"
              : "border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:text-gray-900"
          }`}
        >
          <FiCreditCard className="h-4 w-4" />
          Card
        </button>

        <button
          type="button"
          onClick={() => setMethod("paypal")}
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
            method === "paypal"
              ? "border-orange-400 bg-orange-50 text-orange-600"
              : "border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:text-gray-900"
          }`}
        >
          <SiPaypal className="h-4 w-4" />
          PayPal
        </button>
      </div>

      {method === "card" ? (
        <div className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Card number
            </span>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
              <FiCreditCard className="shrink-0 text-gray-400" />

              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>

          <div className="grid grid-cols-2 gap-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Expiry date
              </span>

              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                <FiCalendar className="shrink-0 text-gray-400" />

                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                CVC
              </span>

              <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                <FiLock className="shrink-0 text-gray-400" />

                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Name on card
            </span>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
              <input
                type="text"
                placeholder="Jenny Wilson"
                className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 py-10 text-center">
          <SiPaypal className="h-7 w-7 text-gray-400" />

          <p className="max-w-sm text-sm text-gray-500">
            You&apos;ll be redirected to PayPal to complete this purchase.
          </p>
        </div>
      )}

      <p className="mt-6 flex items-center gap-1.5 text-xs text-gray-400">
        <FiLock className="h-3.5 w-3.5" />
        Your payment info is encrypted and secure.
      </p>
    </div>
  );
}
