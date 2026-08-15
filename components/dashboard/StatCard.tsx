"use client";
import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-orange text-black">
        {icon}
      </span>

      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
