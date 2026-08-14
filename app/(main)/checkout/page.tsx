import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { CheckoutOrderSummary } from "./_components/CheckoutOrderSummary";
import { ShippingForm } from "./_components/ShippingForm";
import { PaymentForm } from "./_components/PaymentForm";
import { cartItems } from "@/components/data/cart";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Link
          href="/cart"
          className="mb-3 flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-500"
        >
          <FiArrowLeft className="h-3.5 w-3.5" />
          Back to cart
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your information to place your order.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Forms */}
          <div className="space-y-6 lg:col-span-2">
            <ShippingForm />
            <PaymentForm />
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <CheckoutOrderSummary items={cartItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
