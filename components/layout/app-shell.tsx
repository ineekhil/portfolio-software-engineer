"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { TechDoodleBackground } from "@/components/background/tech-doodle-background";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { HOME_UNDER_CONSTRUCTION } from "@/lib/constants";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const showConstructionShell = HOME_UNDER_CONSTRUCTION && pathname === "/";

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden">
      {showConstructionShell ? null : <Navbar />}
      <div className="relative flex min-h-0 flex-1 flex-col">
        {showConstructionShell ? null : (
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden print:hidden"
            aria-hidden
          >
            <TechDoodleBackground />
          </div>
        )}
        <main className="relative z-[1] flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden bg-transparent">
          {children}
        </main>
      </div>
      {showConstructionShell ? null : <Footer />}
    </div>
  );
}
