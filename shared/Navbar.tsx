"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { FiShoppingBag, FiUser } from "react-icons/fi";

type NavLink = {
  label: string;
  path: string;
};

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Service", path: "/service" },
  { label: "Resume", path: "/resume" },
  { label: "Project", path: "/project" },
  { label: "Contact", path: "/contact" },
];

function NavItem({ link, isActive }: { link: NavLink; isActive: boolean }) {
  return (
    <Link
      href={link.path}
      className={`rounded-full hover:bg-[#333] px-7 py-3.5 text-[17px] font-semibold transition-colors duration-200 ${
        isActive ? "bg-primary-orange" : "text-white/80 hover:text-white"
      }`}
    >
      {link.label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-5 z-50">
      <div className="max-w-7xl mx-auto p-2.5 flex items-center justify-between rounded-full bg-secondary-black text-white gap-10">
        {/* Left links */}
        <ul className="w-full flex justify-between items-center flex-1">
          {NAV_LINKS?.slice(0, 3)?.map(link => (
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
          {NAV_LINKS?.slice(3)?.map(link => (
            <NavItem
              key={link.path}
              link={link}
              isActive={pathname === link.path}
            />
          ))}
        </ul>

        {/* Login & Cart */}
        {/* Actions */}
        <div className="ml-5 flex shrink-0 items-center gap-2">
          {/* Login */}
          <Link
            href="/login"
            className="
              flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.04]
              px-4 py-2.5
              text-sm font-medium
              text-white/80
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              hover:text-white
            "
          >
            <FiUser size={17} />
            <span>Login</span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="
              relative flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-primary-orange
              text-white
              shadow-[0_4px_20px_rgba(255,107,53,0.25)]
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_6px_25px_rgba(255,107,53,0.4)]
            "
          >
            <FiShoppingBag size={18} />

           
          </Link>
        </div>
      </div>
    </nav>
  );
}
