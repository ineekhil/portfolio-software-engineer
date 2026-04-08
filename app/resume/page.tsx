import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  READ_CV_PROFILE_URL,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_DOWNLOAD_HREF,
  SITE_NAME,
} from "@/lib/constants";

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
            Download the CV PDF or open your read.cv profile.
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link
              href={RESUME_DOWNLOAD_HREF}
              download={RESUME_DOWNLOAD_FILENAME}
              className="bg-foreground text-background hover:opacity-90 inline-flex rounded-full px-5 py-2.5 text-sm font-medium transition-opacity"
            >
              Download CV (PDF)
            </Link>
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
