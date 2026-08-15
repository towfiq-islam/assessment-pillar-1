"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import { EASE, staggerContainer } from "@/components/common/animations";

const MotionLink = motion(Link);

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

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE },
  },
};

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
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="hidden lg:max-w-[94%] xl:max-w-7xl lg:mx-auto lg:p-2.5 lg:flex items-center justify-between rounded-full bg-secondary-black text-white gap-5 xl:gap-20"
      >
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

          <MotionLink
            href="/cart"
            aria-label="Shopping cart"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="relative flex size-9.5 xl:size-10 items-center justify-center rounded-full bg-primary-orange text-white shadow-[0_4px_20px_rgba(255,107,53,0.25)] transition-shadow duration-300 hover:shadow-[0_6px_25px_rgba(255,107,53,0.4)]"
          >
            <FiShoppingBag size={18} />
          </MotionLink>
        </div>
      </motion.div>

      {/* ===== Mobile Version ===== */}
      <div className="lg:hidden relative max-w-[94%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex items-center justify-between rounded-full bg-secondary-black text-white px-3 py-2"
        >
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(prev => !prev)}
            className="relative flex size-9 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-[#333] hover:text-white cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>

        <div className="absolute inset-x-0 top-full z-40 mt-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ transformOrigin: "top" }}
              >
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={staggerContainer(0.05, 0.05)}
                  className="flex flex-col rounded-3xl bg-secondary-black py-2 text-white shadow-2xl shadow-black/40"
                >
                  {NavLinks.map(link => (
                    <motion.div key={link.path} variants={menuItemVariants}>
                      <MobileNavItem
                        link={link}
                        isActive={pathname === link.path}
                        onNavigate={() => setIsOpen(false)}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    variants={menuItemVariants}
                    className="mt-2 flex items-center justify-center gap-3 border-t border-white/10 px-4 pt-3"
                  >
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:text-white"
                    >
                      <FiUser size={17} />
                      <span>Login</span>
                    </Link>

                    <MotionLink
                      href="/cart"
                      onClick={() => setIsOpen(false)}
                      aria-label="Shopping cart"
                      whileTap={{ scale: 0.92 }}
                      className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-orange text-white shadow-[0_4px_20px_rgba(255,107,53,0.25)]"
                    >
                      <FiShoppingBag size={18} />
                    </MotionLink>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
