import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ActiveXperience Events — Top Event Planner in Lagos" },
      { name: "description", content: "Full-service event planning in Lagos: weddings, corporate, birthdays, conferences, theme parties and more. 4.9★ on Google. Call 0808 143 3976." },
      { property: "og:title", content: "ActiveXperience Events — Lagos Event Planners" },
      { property: "og:description", content: "Weddings, corporate, birthdays and more. Designed, decorated and delivered." },
      { property: "og:site_name", content: "ActiveXperience Events" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // --- YOUR ICON LINK ADDED HERE ---
      {
        rel: "icon",
        type: "image/png",
        href: "data:image/jpeg;base64,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",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
