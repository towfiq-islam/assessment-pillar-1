import type { Product } from "./product";

/** A line item in the cart — a product plus the quantity selected. */
export interface CartItem {
  product: Product;
  quantity: number;
}

/** Cost breakdown shown in the order summary. */
export interface CartSummary {
  subtotal: number;
  shipping: number;
  taxRate: number;
  discount: number;
}
