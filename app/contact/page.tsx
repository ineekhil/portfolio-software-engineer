import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, roles, or freelance work.",
};

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <PageHeader
              eyebrow="Contact"
              title="Let's talk"
              description="Whether you're hiring or have a project in mind, tell me a bit about it and I'll get back to you."
              className="max-w-none"
            />
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
