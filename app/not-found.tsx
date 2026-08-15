"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { EASE } from "@/components/common/animations";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="font-semibold tracking-widest text-primary-orange"
      >
        404
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        className="mt-3 text-3xl font-bold text-gray-900"
      >
        Page not found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        className="mt-4 max-w-md text-gray-500 text-[15px]"
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved. Check the URL, or head back to somewhere that does.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-primary-orange px-6 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md hover:shadow-orange-500/20"
        >
          <FiArrowLeft className="h-4 w-4" />
          Go back home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
