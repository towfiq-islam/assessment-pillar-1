"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  label: string;
  path: string;
};

const NavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "" },
  { label: "Service", path: "" },
  { label: "Resume", path: "" },
  { label: "Project", path: "" },
  { label: "Contact", path: "" },
];

function NavItem({ link, isActive }: { link: NavLink; isActive: boolean }) {
  return (
    <Link
      href={link.path}
      className={`rounded-full hover:bg-[#333] px-5 xl:px-7 py-2.5 xl:py-3 xl:text-[17px] font-semibold transition-colors duration-200 ${
        isActive ? "bg-primary-orange" : "text-white/80 hover:text-white"
      }`}
    >
      {link.label}
    </Link>
  );
}

// Mobile
function MobileNavItem({
  link,
  isActive,
  onNavigate,
}: {
  link: NavLink;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={link.path}
      onClick={onNavigate}
      className={`flex items-center justify-center text-[15px] font-semibold transition-colors duration-200 ${
        isActive
          ? "mx-2 mt-1 mb-2 rounded-full bg-primary-orange py-2.5 text-white"
          : "py-3 text-white/70 hover:text-white"
      }`}
    >
      {link.label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-3 xl:top-3.5 z-50">
      {/* ===== Desktop Version ===== */}
      <div className="hidden lg:max-w-[94%] xl:max-w-7xl lg:mx-auto lg:p-2.5 lg:flex items-center justify-between rounded-full bg-secondary-black text-white gap-5 xl:gap-20">
        {/* Left links */}
        <ul className="w-full flex justify-between items-center flex-1">
          {NavLinks?.slice(0, 3)?.map(link => (
            <NavItem
              key={link.path}
              link={link}
              isActive={pathname === link.path}
            />
          ))}
        </ul>

        {/* Center logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="logo" className="object-contain" />
        </Link>

        {/* Right links */}
        <ul className="w-full flex justify-between items-center flex-1">
          {NavLinks?.slice(3)?.map(link => (
            <NavItem
              key={link.path}
              link={link}
              isActive={pathname === link.path}
            />
          ))}
        </ul>

        {/* Actions */}
        <div className="ml-3 xl:ml-5 flex shrink-0 items-center gap-2">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full border border-white/10 px-3 xl:px-4 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:text-white"
          >
            <FiUser size={17} />
            <span>Login</span>
          </Link>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative flex size-9.5 xl:size-10 items-center justify-center rounded-full bg-primary-orange text-white shadow-[0_4px_20px_rgba(255,107,53,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(255,107,53,0.4)]"
          >
            <FiShoppingBag size={18} />
          </Link>
        </div>
      </div>

      {/* ===== Mobile Version ===== */}
      <div className="lg:hidden relative max-w-[94%] mx-auto">
        <div className="flex items-center justify-between rounded-full bg-secondary-black text-white px-3 py-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={logo}
              alt="logo"
              className="w-20 rounded-full object-contain"
            />
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(prev => !prev)}
            className="flex size-9 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-[#333] hover:text-white cursor-pointer"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="absolute inset-x-0 top-full z-40 mt-2">
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col rounded-3xl bg-secondary-black py-2 text-white shadow-2xl shadow-black/40">
                {NavLinks.map(link => (
                  <MobileNavItem
                    key={link.path}
                    link={link}
                    isActive={pathname === link.path}
                    onNavigate={() => setIsOpen(false)}
                  />
                ))}

                <div className="mt-2 flex items-center justify-center gap-3 border-t border-white/10 px-4 pt-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:text-white"
                  >
                    <FiUser size={17} />
                    <span>Login</span>
                  </Link>

                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    aria-label="Shopping cart"
                    className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-orange text-white shadow-[0_4px_20px_rgba(255,107,53,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(255,107,53,0.4)]"
                  >
                    <FiShoppingBag size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
