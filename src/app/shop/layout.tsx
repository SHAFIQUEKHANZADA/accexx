import type { ReactNode } from "react";
import { CartProvider } from "@/components/shop/CartProvider";
import { isCheckoutConfigured } from "../api/checkout/provider";

/** Shop-only shell: bag drawer + floating bag button. The rest of the site has no cart. */
export default function ShopLayout({ children }: { children: ReactNode }) {
  return <CartProvider checkoutEnabled={isCheckoutConfigured()}>{children}</CartProvider>;
}
