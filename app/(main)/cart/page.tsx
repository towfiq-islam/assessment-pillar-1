import { cartItems } from "@/components/data/cart";
import Link from "next/link";
import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { CartLineItem } from "./components/CartLineItem";
import { CartOrderSummary } from "./components/CartOrderSummary";

export default function CartPage() {
  const isEmpty = cartItems.length === 0;

  return (
    <main className="">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="mb-3 flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-500"
            >
              <FiArrowLeft className="h-3.5 w-3.5" />
              Continue shopping
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your <span className="text-orange-500">Cart</span>
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Review your items before checkout.
            </p>
          </div>
        </div>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Line items */}
            <div className="rounded-2xl border border-gray-200 bg-white px-6 shadow-sm sm:px-7 lg:col-span-2">
              {cartItems.map(item => (
                <CartLineItem key={item.product.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <CartOrderSummary items={cartItems} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white py-24 text-center shadow-sm">
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
    </div>
  );
}
