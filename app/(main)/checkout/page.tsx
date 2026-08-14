import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { ShippingForm } from "../../../components/checkout/ShippingForm";
import { cartItems } from "@/components/data/cart";
import { CartOrderSummary } from "../../../components/cart/CartOrderSummary";
import SectionTitle from "@/components/common/SectionTitle";

export default function CheckoutPage() {
  return (
    <main className="container pt-10 pb-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <Link
          href="/cart"
          className="mb-3 flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-500"
        >
          <FiArrowLeft className="h-3.5 w-3.5" />
          Back to cart
        </Link>

        <div className="mb-7">
          <SectionTitle>Checkout</SectionTitle>
          <p className="mt-2 text-[15px] text-gray-500">
            Complete your information to place your order.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Forms */}
          <div className="space-y-6 lg:col-span-2">
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
