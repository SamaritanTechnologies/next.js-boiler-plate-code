# Next.js Boilerplate

A ready-to-use [Next.js](https://nextjs.org) App Router starter with Redux Toolkit, Sonner toasts, Axios, and common utilities.

## Stack

| Package | Purpose |
| --- | --- |
| Next.js 16 + React 19 | App Router, React Compiler |
| Tailwind CSS 4 | Styling |
| Redux Toolkit + React Redux | Global state |
| Sonner | Toast notifications |
| Axios | HTTP client |
| clsx + tailwind-merge | `cn()` class helper |
| Lucide React | Icons |
| Biome | Lint & format |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # start production server
npm run lint     # biome check
npm run format   # biome format
```

### Environment

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Project Structure

```
src/
├── app/                    # App Router pages & layouts
├── providers/
│   ├── Providers.js        # Redux + Sonner wrapper
│   └── StoreProvider.js
├── store/
│   ├── index.js            # configureStore
│   ├── hooks.js            # useAppDispatch / useAppSelector
│   └── slices/
│       ├── authSlice.js
│       └── uiSlice.js
└── lib/
    ├── axios.js            # api + axiosWithCredentials
    ├── auth-cookies.js     # auth token cookie helpers
    ├── cookies.js          # generic cookie get/set/remove
    └── utils.js            # cn() helper
```

## Usage

### Toasts (Sonner)

```js
import { toast } from "sonner";

toast.success("Saved!");
toast.error("Something went wrong");
```

### Redux Toolkit

```js
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCredentials, logout } from "@/store/slices/authSlice";
import { toggleSidebar } from "@/store/slices/uiSlice";

const user = useAppSelector((state) => state.auth.user);
const dispatch = useAppDispatch();

// Saves token (+ optional user) to cookies and Redux
dispatch(setCredentials({ user, token }));

// Clears cookies and Redux auth state
dispatch(logout());

dispatch(toggleSidebar());
```

Auth is hydrated from cookies on app load via `hydrateAuth`.

Add new slices under `src/store/slices/` and register them in `src/store/index.js`.

### Axios

Use `api` for public endpoints (login, register). Use `axiosWithCredentials` for protected routes — it reads `access_token` from cookies and sends `Authorization: Bearer <token>`.

```js
import { api, axiosWithCredentials } from "@/lib/axios";

// Public — no auth header
await api.post("/login", { email, password });

// Authenticated — token from cookie + withCredentials
const { data } = await axiosWithCredentials.get("/me");
await axiosWithCredentials.post("/posts", payload);
```

### Class names

```js
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class")} />
```

### Icons

```js
import { Menu, X } from "lucide-react";

<Menu className="size-5" />
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Tailwind CSS](https://tailwindcss.com/docs)
