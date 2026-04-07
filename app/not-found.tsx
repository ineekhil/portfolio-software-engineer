import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-24">
      <Container className="text-center">
        <p className="text-muted text-sm font-medium">404</p>
        <h1 className="text-foreground mt-2 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted mt-3">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Link
          href="/"
          className="bg-accent hover:bg-accent-hover mt-8 inline-flex rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-colors"
        >
          Back home
        </Link>
      </Container>
    </div>
  );
}
