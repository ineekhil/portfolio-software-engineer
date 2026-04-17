import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { READ_CV_PROFILE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume and experience — ${SITE_NAME}.`,
};

export default function ResumePage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-accent text-sm font-medium tracking-wider uppercase">
            Resume
          </p>
          <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Resume
          </h1>
          <p className="text-muted mt-6 text-lg leading-relaxed">
            CV PDF download is paused for now. You can still open the read.cv
            profile below.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <span
              className="text-muted border-border bg-surface-muted inline-flex cursor-not-allowed rounded-full border px-5 py-2.5 text-sm font-medium"
              aria-disabled="true"
            >
              Download CV (PDF) — coming soon
            </span>
            <Link
              href={READ_CV_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-border hover:bg-surface-muted inline-flex rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Open read.cv profile
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
