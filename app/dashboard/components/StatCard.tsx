import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-3xl bg-secondary-black p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-orange text-black">
        {icon}
      </span>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-white/50">{label}</p>
      </div>
    </div>
  );
}
