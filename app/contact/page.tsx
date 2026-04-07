import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for collaborations, roles, or freelance work.",
};

export default function ContactPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-accent text-sm font-medium tracking-wider uppercase">
              Contact
            </p>
            <h1 className="text-foreground mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s talk
            </h1>
            <p className="text-muted mt-4 text-lg">
              Share a few details and I&apos;ll get back to you. Swap the demo
              form handler for your production endpoint when you&apos;re ready.
            </p>
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
