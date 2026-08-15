"use client";
import type { ReactNode } from "react";
import type { CustomerProfile } from "@/types/customer";
import Navbar from "@/shared/Navbar";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardShellProps {
  customer: CustomerProfile;
  children: ReactNode;
}

export default function DashboardShell({
  customer,
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar customer={customer} />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-10 lg:py-10">
        <aside className="hidden w-[260px] shrink-0 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:block">
          <DashboardSidebar customer={customer} />
        </aside>

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
