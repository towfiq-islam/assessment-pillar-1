import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { CustomerOrder } from "@/types/customer";
import { OrderStatusBadge } from "./OrderStatusBadge";

interface RecentOrdersProps {
  orders: CustomerOrder[];
  title?: string;
  showViewAll?: boolean;
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function RecentOrders({
  orders,
  title = "Recent Orders",
  showViewAll = true,
}: RecentOrdersProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        {showViewAll && (
          <Link
            href="/dashboard/orders"
            className="text-sm font-medium text-primary-orange transition-opacity hover:opacity-80"
          >
            View all
          </Link>
        )}
      </div>

      {/* Table header — desktop only */}
      <div className="hidden grid-cols-[1fr_1fr_0.7fr_1fr_auto] gap-4 border-b border-gray-200 pb-3 text-xs uppercase tracking-wide text-gray-400 sm:grid">
        <span>Order</span>
        <span>Date</span>
        <span>Items</span>
        <span>Status</span>
        <span className="text-right">Total</span>
      </div>

      <ul>
        {orders.map(order => (
          <li
            key={order.id}
            className="grid grid-cols-2 items-center gap-3 border-b border-gray-100 py-4 last:border-b-0 sm:grid-cols-[1fr_1fr_0.7fr_1fr_auto] sm:gap-4"
          >
            <span className="font-medium text-gray-900">{order.id}</span>

            <span className="text-sm text-gray-500">{order.date}</span>

            <span className="text-sm text-gray-500">
              {order.itemsCount} {order.itemsCount === 1 ? "item" : "items"}
            </span>

            <span>
              <OrderStatusBadge status={order.status} />
            </span>

            <span className="flex items-center justify-end gap-2 text-right font-semibold text-gray-900">
              {currency.format(order.total)}

              <FiArrowUpRight className="hidden h-3.5 w-3.5 text-gray-400 sm:block" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
