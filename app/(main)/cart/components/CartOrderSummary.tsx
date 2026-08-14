import { CartItem } from "@/types/cart";
import Link from "next/link";
import { FiLock, FiTag, FiTruck } from "react-icons/fi";

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

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

        <p className="mt-1 text-sm text-gray-500">
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Promo code */}
      <div className="mt-6 flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-300 focus-within:bg-white">
        <FiTag className="h-4 w-4 shrink-0 text-gray-400" />

        <input
          type="text"
          placeholder="Promo code"
          className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />

        <button
          type="button"
          className="shrink-0 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
        >
          Apply
        </button>
      </div>

      {/* Breakdown */}
      <div className="mt-6 space-y-3 border-t border-gray-200 pt-6 text-sm">
        <div className="flex items-center justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">
            {currency.format(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-500">
          <span className="flex items-center gap-1.5">
            <FiTruck className="h-3.5 w-3.5" />
            Shipping
          </span>

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

      {/* Total */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
        <span className="text-base font-semibold text-gray-900">Total</span>

        <span className="text-2xl font-bold text-gray-900">
          {currency.format(total)}
        </span>
      </div>

      {/* Checkout */}
      <Link
        href="/checkout"
        className="
          mt-6 flex w-full items-center justify-center gap-2
          rounded-full bg-orange-500 py-3.5
          text-sm font-semibold text-white
          transition-all duration-200
          hover:bg-orange-600
          hover:shadow-lg hover:shadow-orange-500/20
        "
      >
        <FiLock className="h-4 w-4" />
        Checkout
      </Link>

      <p className="mt-4 text-center text-xs text-gray-400">
        Taxes and shipping calculated at checkout
      </p>
    </aside>
  );
}
