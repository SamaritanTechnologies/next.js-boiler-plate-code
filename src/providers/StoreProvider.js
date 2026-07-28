"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { setUnauthorizedHandler } from "@/lib/axios";
import { makeStore } from "@/store";
import { hydrateAuth, logout } from "@/store/slices/authSlice";

export default function StoreProvider({ children }) {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(hydrateAuth());
    setUnauthorizedHandler(() => {
      storeRef.current?.dispatch(logout());
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
