import type { ReactNode } from "react";
import { customer } from "@/components/data/customer";
import Navbar from "@/shared/Navbar";
import { DashboardSidebar } from "../../components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-10">
        <DashboardSidebar customer={customer} />

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
