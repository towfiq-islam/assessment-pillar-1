import { customer, customerOrders } from "@/components/data/customer";
import { FiClock, FiDollarSign, FiPackage } from "react-icons/fi";
import { StatCard } from "../../components/dashboard/StatCard";
import { RecentOrders } from "../../components/dashboard/RecentOrders";

export default function DashboardOverviewPage() {
  const totalOrders = customerOrders.length;

  const pendingOrders = customerOrders.filter(
    o => o.status === "Processing" || o.status === "Shipped",
  ).length;

  const totalSpent = customerOrders
    .filter(o => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.total, 0);

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(totalSpent);

  return (
    <div>
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Welcome back,{" "}
          <span className="text-primary-orange">
            {customer.name.split(" ")[0]}
          </span>
        </h1>

        <p className="mt-2 text-gray-500">
          Here&apos;s what&apos;s happening with your account.
        </p>
      </div>

      {/* Stat cards */}
      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatCard
          label="Total orders"
          value={String(totalOrders)}
          icon={<FiPackage className="h-5 w-5" />}
        />

        <StatCard
          label="In progress"
          value={String(pendingOrders)}
          icon={<FiClock className="h-5 w-5" />}
        />

        <StatCard
          label="Total spent"
          value={currency}
          icon={<FiDollarSign className="h-5 w-5" />}
        />
      </div>

      <RecentOrders orders={customerOrders.slice(0, 4)} />
    </div>
  );
}
