/**
 * Core domain type — mirrors the mock dataset shape exactly.
 */
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

/** Narrow union of the categories present in the mock dataset. Widen as data grows. */
export type ProductCategory = Product["category"];

/** Shape returned by GET /api/products */
export interface ProductsApiResponse {
  success: true;
  count: number;
  products: Product[];
}

export interface ProductsApiError {
  success: false;
  error: string;
}

export type ProductsApiResult = ProductsApiResponse | ProductsApiError;

/** Query params the route handler understands, kept in one place so the
 *  client hook and the server route can't drift out of sync. */
export interface ProductsQuery {
  category?: string;
  inStock?: boolean;
}
