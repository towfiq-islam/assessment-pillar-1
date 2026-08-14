import Image from "next/image";
import { FiCheck, FiLock, FiTruck } from "react-icons/fi";
import type { CartItem } from "@/types/cart";

interface CheckoutOrderSummaryProps {
  items: CartItem[];
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const SHIPPING = 24;
const TAX_RATE = 0.08;

export function CheckoutOrderSummary({ items }: CheckoutOrderSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

          <p className="mt-1 text-sm text-gray-500">Review your order</p>
        </div>
      </div>

      {/* Items */}
      <ul className="mt-5 space-y-4">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="56px"
                className="object-cover"
              />

              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[10px] font-bold text-white">
                {quantity}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                {product.name}
              </p>

              <p className="text-xs text-gray-500">
                {currency.format(product.price)} each
              </p>
            </div>

            <span className="shrink-0 text-sm font-semibold text-gray-900">
              {currency.format(product.price * quantity)}
            </span>
          </li>
        ))}
      </ul>

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

      {/* Place order */}
      <button
        type="button"
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
        Place order
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
        <FiCheck className="h-3.5 w-3.5" />
        Secure, encrypted checkout
      </p>
    </aside>
  );
}
