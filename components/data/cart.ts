import { products } from "./products";
import type { CartItem } from "@/types/cart";

/**
 * Static stand-in for real cart state. Swap for context/store-backed data
 * once the cart is wired up — the page only ever consumes `CartItem[]`.
 */
export const cartItems: CartItem[] = [
  { product: products[0], quantity: 1 }, // MacBook Pro M2
  { product: products[3], quantity: 2 }, // Keychron K8 Pro
  { product: products[4], quantity: 1 }, // LG UltraFine 27"
];
