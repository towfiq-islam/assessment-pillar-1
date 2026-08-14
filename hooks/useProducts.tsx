"use client";

import { useEffect, useState, useCallback } from "react";
import type { Product, ProductsApiResult } from "@/types/product";

interface UseProductsOptions {
  category?: string;
  inStock?: boolean;
}

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProducts(
  options: UseProductsOptions = {},
): UseProductsResult {
  const { category, inStock } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchToken, setRefetchToken] = useState(0);

  const refetch = useCallback(() => setRefetchToken(t => t + 1), []);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (category && category !== "all") params.set("category", category);
      if (inStock) params.set("inStock", "true");

      try {
        const res = await fetch(`/api/products?${params.toString()}`, {
          signal: controller.signal,
        });
        const data: ProductsApiResult = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(
            !data.success ? data.error : "Failed to load products.",
          );
        }

        setProducts(data.products);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [category, inStock, refetchToken]);

  return { products, isLoading, error, refetch };
}
