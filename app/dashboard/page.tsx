import { FiClock, FiDollarSign, FiPackage } from "react-icons/fi";
import Navbar from "@/shared/Navbar";
import { StatCard } from "./components/StatCard";
import { RecentOrders } from "./components/RecentOrders";
import { customer, customerOrders } from "@/components/data/customer";
import { ProfileCard } from "./components/ProfileCard";

export default function DashboardPage() {
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
    <div className="min-h-screen bg-black">
      <div className="px-4 pt-5 sm:px-6 lg:px-10">
        <Navbar />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        {/* Welcome header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Welcome back,{" "}
            <span className="text-primary-orange">
              {customer.name.split(" ")[0]}
            </span>
          </h1>
          <p className="mt-2 text-white/50">
            Here&apos;s what&apos;s happening with your account.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
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

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentOrders orders={customerOrders} />
          </div>
          <div className="lg:col-span-1">
            <ProfileCard customer={customer} />
          </div>
        </div>
      </main>
    </div>
  );
}
