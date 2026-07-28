# Next.js Boilerplate

Next.js App Router starter with Redux Toolkit, Sonner, Axios, and common utilities.

## Requirements

- Node.js 18+
- npm

### Included packages

- Next.js 16 + React 19
- Tailwind CSS 4
- Redux Toolkit + React Redux
- Sonner (toasts)
- Axios
- clsx + tailwind-merge (`cn` helper)
- Lucide React (icons)
- Biome (lint & format)

## Setup

1. `npm install`
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL`
3. `npm run dev` → [http://localhost:3000](http://localhost:3000)

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Biome check |
| `npm run format` | Biome format |

## How to use

### Auth & cookies

- `setCredentials({ user, token })` — saves token/user to cookies and Redux
- `logout()` — clears cookies and Redux auth state
- Auth is restored from cookies on app load via `hydrateAuth`

### API clients (`src/lib/axios.js`)

- `api` — public requests (login, register)
- `axiosWithCredentials` — protected requests; reads `access_token` from cookies and sends `Authorization: Bearer <token>`
- On `401`, cookies are cleared and Redux logout runs

### Services (`src/services/`)

- Put API functions in service files (e.g. `auth.service.js`, `user.service.js`)
- Re-export from `src/services/index.js`
- Import from `@/services` (e.g. `login`, `getMe`, `getUserData`)

### State (`src/store/`)

- Use `useAppDispatch` / `useAppSelector` from `@/store/hooks`
- Add slices under `src/store/slices/` and register them in `src/store/index.js`

### Utilities

- Toasts: `toast` from `sonner`
- Class names: `cn` from `@/lib/utils`
- Icons: from `lucide-react`
