import Link from "next/link";

import { Container } from "@/components/ui/container";
import { COPYRIGHT_HOLDER } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-sm">
          © {year} {COPYRIGHT_HOLDER} | Made in India 🇮🇳 💛
        </p>
        <nav
          className="text-muted flex flex-wrap gap-x-6 gap-y-2 text-sm"
          aria-label="Footer"
        >
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact me
          </Link>
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy policy
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
