"use client";
import React from "react";
import { useMemo, useState } from "react";
import { FiAlertTriangle, FiInbox, FiRefreshCw } from "react-icons/fi";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
const FILTERS = ["All", "Laptops", "Accessories", "Monitors"] as const;
type Filter = (typeof FILTERS)[number];

const AllProducts = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const category = useMemo(
    () => (activeFilter === "All" ? undefined : activeFilter),
    [activeFilter],
  );

  const { products, isLoading, error, refetch } = useProducts({ category });

  return (
    <section className="container pt-16 pb-20">
      {/* Header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionTitle>
            All <span className="text-primary-orange">Products</span>
          </SectionTitle>

          <p className="mt-3 max-w-md text-[15px] leading-6 text-gray-500">
            Browse the current catalog — filter by category to find what
            you&apos;re looking for.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
          {FILTERS.map(filter => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary-orange text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div>
        {isLoading && "Loading..."}

        {/* Error */}
        {!isLoading && error && (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white py-16 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
              <FiAlertTriangle className="h-6 w-6 text-orange-500" />
            </div>

            <p className="text-gray-600">{error}</p>

            <button
              type="button"
              onClick={refetch}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/20"
            >
              <FiRefreshCw className="h-4 w-4" />
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !error && products.length === 0 && (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white py-16 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
              <FiInbox className="h-6 w-6 text-gray-400" />
            </div>

            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        )}

        {/* Products */}
        {!isLoading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
