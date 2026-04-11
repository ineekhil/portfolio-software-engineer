import Link from "next/link";

import { Container } from "@/components/ui/container";
import { COPYRIGHT_HOLDER } from "@/lib/constants";

function IndiaFlagMicro() {
  return (
    <svg
      viewBox="0 0 90 60"
      className="mx-0.5 inline-block h-[1em] w-[1.5em] shrink-0 align-[-0.125em]"
      aria-hidden
    >
      <rect fill="#FF9933" width="90" height="20" />
      <rect fill="#FFFFFF" y="20" width="90" height="20" />
      <rect fill="#138808" y="40" width="90" height="20" />
      <g transform="translate(45 30)">
        <circle fill="none" stroke="#000080" strokeWidth="1.15" r="9" />
        {Array.from({ length: 24 }, (_, i) => {
          const rad = ((i * 15 - 90) * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos(rad) * 9}
              y2={Math.sin(rad) * 9}
              stroke="#000080"
              strokeWidth="1.15"
            />
          );
        })}
      </g>
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border w-full max-w-full overflow-x-hidden border-t">
      <Container className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-sm">
          © {year} {COPYRIGHT_HOLDER} | Made in India <IndiaFlagMicro /> 💛
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
