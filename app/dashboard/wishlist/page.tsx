import { wishlistItems } from "@/components/data/customer";
import Image from "next/image";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function WishlistPage() {
  const isEmpty = wishlistItems.length === 0;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
        <p className="mt-2 text-gray-500">Items you&apos;ve saved for later.</p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-white py-20 text-center shadow-sm">
          <FiHeart className="h-8 w-8 text-gray-300" />
          <p className="text-gray-500">Nothing saved yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map(item => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

                <button
                  type="button"
                  aria-label={`Remove ${item.name} from wishlist`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-primary-orange"
                >
                  <FiTrash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5">
                <span className="text-xs uppercase tracking-wide text-primary-orange">
                  {item.category}
                </span>

                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {item.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {currency.format(item.price)}
                  </span>

                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full bg-primary-orange px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
                  >
                    <FiShoppingCart className="h-3.5 w-3.5" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
