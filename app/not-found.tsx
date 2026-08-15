"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/components/common/animations";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-2xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        Not found
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
      >
        <Link
          href="/"
          className="rounded-full bg-primary-orange px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Go home
        </Link>
      </motion.div>
    </div>
  );
};

export default page;
