"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

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
      </div>
    </nav>
  );
}
