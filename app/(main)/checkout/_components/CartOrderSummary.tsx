import Link from "next/link";
import { FiLock, FiTag, FiTruck } from "react-icons/fi";
import type { CartItem } from "@/types/cart";

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
    <aside className="h-fit rounded-2xl border border-white/10 bg-[#15151a] p-6 sm:p-7">
      <h2 className="text-lg font-semibold text-white">Order Summary</h2>
      <p className="mt-1 text-sm text-white/40">
        {itemCount} {itemCount === 1 ? "item" : "items"}
      </p>

      {/* Promo code — visual only */}
      <div className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-[#1d1d23] px-4 py-3">
        <FiTag className="h-4 w-4 shrink-0 text-white/40" />
        <input
          type="text"
          placeholder="Promo code"
          className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
        />
        <button
          type="button"
          className="shrink-0 text-sm font-medium text-orange-500 hover:text-orange-400"
        >
          Apply
        </button>
      </div>

      {/* Breakdown */}
      <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
        <div className="flex items-center justify-between text-white/60">
          <span>Subtotal</span>
          <span className="text-white">{currency.format(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-white/60">
          <span className="flex items-center gap-1.5">
            <FiTruck className="h-3.5 w-3.5" />
            Shipping
          </span>
          <span className="text-white">{currency.format(SHIPPING)}</span>
        </div>
        <div className="flex items-center justify-between text-white/60">
          <span>Estimated tax</span>
          <span className="text-white">{currency.format(tax)}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
        <span className="text-base font-semibold text-white">Total</span>
        <span className="text-2xl font-bold text-white">
          {currency.format(total)}
        </span>
      </div>

      <Link
        href="/checkout"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
      >
        <FiLock className="h-4 w-4" />
        Checkout
      </Link>

      <p className="mt-4 text-center text-xs text-white/30">
        Taxes and shipping calculated at checkout
      </p>
    </aside>
  );
}
