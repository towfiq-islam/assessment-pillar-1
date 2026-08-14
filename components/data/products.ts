import type { Product } from "@/types/product";

/**
 * Mock data source. In a real app this file is where you'd swap in a
 * database client (Prisma, Drizzle, a fetch to an external service, etc).
 * Everything downstream only ever imports the `Product` type, never this
 * array directly, so that swap is a one-file change.
 */
export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro M2",
    category: "Laptops",
    price: 2499,
    stock: 8,
    image: "/assets/images/macbook-pro-m2.jpg",
  },
  {
    id: 2,
    name: "Logitech MX Master 3",
    category: "Accessories",
    price: 99,
    stock: 0,
    image: "/assets/images/logitech-mx-master.jpg",
  },
  {
    id: 3,
    name: "Dell XPS 15",
    category: "Laptops",
    price: 1899,
    stock: 3,
    image: "/assets/images/dell-xps-15.jpg",
  },
  {
    id: 4,
    name: "Keychron K8 Pro",
    category: "Accessories",
    price: 119,
    stock: 14,
    image: "/assets/images/keychron-k8-pro.jpg",
  },
  {
    id: 5,
    name: 'LG UltraFine 27"',
    category: "Monitors",
    price: 649,
    stock: 5,
    image: "/assets/images/lg-ultrafine-27.jpg",
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1749,
    stock: 0,
    image: "/assets/images/asus-rog-zephyrus.jpg",
  },
];
