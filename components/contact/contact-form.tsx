"use client";

import { PaperPlaneRight } from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FieldState = {
  name: string;
  email: string;
  message: string;
};

const initial: FieldState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FieldState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Portfolio enquiry — ${values.name || "New message"}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      "",
      values.message,
    ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border-border bg-surface-muted/50 rounded-2xl border p-8 text-center"
        role="status"
      >
        <p className="text-foreground text-lg font-medium">
          Your email app is opening…
        </p>
        <p className="text-muted mt-2 text-sm">
          I&apos;ve pre-filled your message — just hit send. If nothing opened,
          email me directly at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setValues(initial);
          }}
        >
          Start over
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-background space-y-5 rounded-2xl border p-5 sm:space-y-6 sm:p-8"
    >
      <div>
        <label
          htmlFor="name"
          className="text-foreground block text-sm font-medium"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={cn(
            "border-border bg-surface-muted text-foreground placeholder:text-muted mt-2 min-h-11 w-full rounded-lg border px-3 py-2.5 text-sm sm:min-h-0",
            "focus:border-accent focus:ring-ring/30 focus:ring-2 focus:outline-none",
          )}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-foreground block text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={cn(
            "border-border bg-surface-muted text-foreground placeholder:text-muted mt-2 min-h-11 w-full rounded-lg border px-3 py-2.5 text-sm sm:min-h-0",
            "focus:border-accent focus:ring-ring/30 focus:ring-2 focus:outline-none",
          )}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-foreground block text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className={cn(
            "border-border bg-surface-muted text-foreground placeholder:text-muted mt-2 w-full resize-y rounded-lg border px-3 py-2.5 text-sm",
            "focus:border-accent focus:ring-ring/30 focus:ring-2 focus:outline-none",
          )}
          placeholder="Tell me about your project or role…"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send message
        <PaperPlaneRight className="size-4" weight="bold" aria-hidden />
      </Button>
    </form>
  );
}
