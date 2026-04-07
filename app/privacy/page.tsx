import type { Metadata } from "next";

import { PrivacyMarkdown } from "@/components/privacy/privacy-markdown";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getPrivacyPolicyMarkdown } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Neekhil Portfolio collects, uses, and protects your information.",
};

export default async function PrivacyPage() {
  const markdown = await getPrivacyPolicyMarkdown();

  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <PrivacyMarkdown content={markdown} />
      </Container>
    </Section>
  );
}
