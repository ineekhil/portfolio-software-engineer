import type { ReactNode } from "react";

import { TechDoodleBackground } from "@/components/background/tech-doodle-background";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden print:hidden"
          aria-hidden
        >
          <TechDoodleBackground />
        </div>
        <main className="relative z-[1] flex flex-1 flex-col bg-transparent">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
