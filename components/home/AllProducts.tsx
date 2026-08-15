"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { products } from "@/components/data/products";
const FILTERS = ["All", "Laptops", "Accessories", "Monitors"] as const;
type Filter = (typeof FILTERS)[number];

const AllProducts = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    return products.filter(product => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="container pt-7 md:pt-8 lg:pt-12 xl:pt-16 pb-10 md:pb-14 xl:pb-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="mb-5.5 md:mb-8 xl:mb-12 flex flex-col items-start justify-between gap-4 md:gap-6 sm:flex-row sm:items-end"
      >
        <motion.div variants={fadeUp}>
          <SectionTitle>
            All <span className="text-primary-orange">Products</span>
          </SectionTitle>

          <p className="mt-1.5 md:mt-2 xl:mt-3 max-w-md text-sm md:text-[15px] md:leading-6 text-gray-500">
            Browse the current catalog — filter by category to find what
            you&apos;re looking for.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          variants={fadeUp}
          className="relative flex flex-wrap gap-1.5 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm shrink-0"
        >
          {FILTERS.map(filter => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="product-filter-pill"
                    className="absolute inset-0 rounded-full bg-primary-orange shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}

                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        layout
        className="grid gap-3 md:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.35,
                ease: EASE,
                delay: Math.min(index * 0.05, 0.4),
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AllProducts;
