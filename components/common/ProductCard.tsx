"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiCheck,
  FiPackage,
  FiShoppingCart,
} from "react-icons/fi";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;

  onAddToCart?: (product: Product) => void;
}

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const ADDED_FEEDBACK_MS = 1600;

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const inStock = product.stock > 0;

  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return;

    const timer = setTimeout(() => setJustAdded(false), ADDED_FEEDBACK_MS);

    return () => clearTimeout(timer);
  }, [justAdded]);

  function handleAddToCart() {
    if (!inStock) return;

    onAddToCart?.(product);
    setJustAdded(true);
  }

  return (
    <article
      className="
        group relative flex flex-col overflow-hidden
        rounded-2xl border border-gray-200
        bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-orange-200
        hover:shadow-lg hover:shadow-gray-200/60
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium shadow-sm ${
            inStock ? "bg-white text-gray-900" : "bg-gray-900/80 text-white"
          }`}
        >
          {inStock ? `${product.stock} in stock` : "Sold out"}
        </span>

        {/* View button */}
        <button
          type="button"
          aria-label={`View ${product.name}`}
          disabled={!inStock}
          className="
            absolute right-3 top-3
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/95
            text-gray-700 shadow-sm
            backdrop-blur-sm
            transition-all duration-300
            hover:bg-orange-500
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <FiArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Category */}
        <span className="text-xs font-medium uppercase tracking-wide text-orange-500">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>

        {/* Price & availability */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              {currency.format(product.price)}
            </span>

            <span className="mt-1 flex items-center gap-1 text-xs text-gray-500">
              <FiPackage className="h-3.5 w-3.5" />

              {inStock ? "Ready to ship" : "Restocking soon"}
            </span>
          </div>
        </div>

        {/* Add to cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock}
          aria-label={
            inStock
              ? `Add ${product.name} to cart`
              : `${product.name} is out of stock`
          }
          className={`mt-1 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed ${
            justAdded
              ? "bg-green-500 text-white"
              : inStock
                ? "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/20"
                : "bg-gray-100 text-gray-400"
          }`}
        >
          {justAdded ? (
            <>
              <FiCheck className="h-4 w-4" />
              Added to cart
            </>
          ) : (
            <>
              <FiShoppingCart className="h-4 w-4" />
              {inStock ? "Add to cart" : "Out of stock"}
            </>
          )}
        </button>
      </div>
    </article>
  );
}
