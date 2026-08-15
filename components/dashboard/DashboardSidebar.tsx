"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiHeart,
  FiLogOut,
  FiMapPin,
  FiPackage,
  FiSettings,
} from "react-icons/fi";
import type { CustomerProfile } from "@/types/customer";

interface SidebarLink {
  label: string;
  path: string;
  icon: ReactNode;
}

const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: <FiGrid className="h-4 w-4" />,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: <FiPackage className="h-4 w-4" />,
  },
  {
    label: "Wishlist",
    path: "/dashboard/wishlist",
    icon: <FiHeart className="h-4 w-4" />,
  },
  {
    label: "Addresses",
    path: "/dashboard/addresses",
    icon: <FiMapPin className="h-4 w-4" />,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <FiSettings className="h-4 w-4" />,
  },
];

interface DashboardSidebarProps {
  customer: CustomerProfile;
}

export function DashboardSidebar({ customer }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-28 flex h-fit w-full max-w-[260px] shrink-0 flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Profile */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gray-100">
          <Image
            src={customer.avatar}
            alt={customer.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-gray-900">
            {customer.name}
          </p>

          <p className="truncate text-xs text-gray-500">{customer.email}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-1.5">
          {SIDEBAR_LINKS.map(link => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-orange text-black"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {link.icon}
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <button
        type="button"
        className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
      >
        <FiLogOut className="h-4 w-4" />
        Log out
      </button>
    </aside>
  );
}
 