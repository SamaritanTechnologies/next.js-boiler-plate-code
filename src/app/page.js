"use client";

import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar } from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";

export default function Home() {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 bg-zinc-50 px-6 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Next.js Boilerplate
      </h1>
      <p className="max-w-md text-center text-zinc-600 dark:text-zinc-400">
        Redux Toolkit, Sonner, Axios, and utilities are ready to use.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => toast.success("Toast is working!")}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Show toast
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch(toggleSidebar());
            toast.message(`Sidebar ${!sidebarOpen ? "opened" : "closed"}`);
          }}
          className={cn(
            "rounded-lg border border-black/10 px-4 py-2 text-sm font-medium transition-colors dark:border-white/15",
            "hover:bg-black/5 dark:hover:bg-white/10",
          )}
        >
          Toggle sidebar ({sidebarOpen ? "open" : "closed"})
        </button>
      </div>
    </div>
  );
}
