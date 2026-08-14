import { NextRequest, NextResponse } from "next/server";
import type { Product, ProductsApiResult } from "@/types/product";
import { products } from "@/components/data/products";

// Static-ish mock data with query filtering — no need to hit a real DB per request.
export const dynamic = "force-dynamic";

/**
 * GET /api/products
 * GET /api/products?category=Laptops
 * GET /api/products?inStock=true
 * GET /api/products?category=Accessories&inStock=true
 */
export async function GET(
  request: NextRequest,
): Promise<NextResponse<ProductsApiResult>> {
  try {
    const { searchParams } = request.nextUrl;
    const category = searchParams.get("category");
    const inStockOnly = searchParams.get("inStock") === "true";

    let result: Product[] = products;

    if (category && category.toLowerCase() !== "all") {
      result = result.filter(
        p => p.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    return NextResponse.json(
      { success: true, count: result.length, products: result },
      { status: 200 },
    );
  } catch (error) {
    console.error("[GET /api/products]", error);
    return NextResponse.json(
      { success: false, error: "Failed to load products." },
      { status: 500 },
    );
  }
}
