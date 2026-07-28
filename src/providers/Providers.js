"use client";

import { Toaster } from "sonner";
import StoreProvider from "./StoreProvider";

export default function Providers({ children }) {
  return (
    <StoreProvider>
      {children}
      <Toaster richColors position="top-right" closeButton />
    </StoreProvider>
  );
}
