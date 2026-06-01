import { Suspense } from "react";
import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { Toaster } from "sonner";

export function Root() {
  return (
    <div className="relative min-h-screen bg-background" style={{ position: 'relative' }}>
      <ScrollToTop />
      <Navigation />
      <main>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
