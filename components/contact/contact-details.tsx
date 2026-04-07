"use client";

import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";

import { CONTACT_EMAIL } from "@/lib/constants";
import { IconTooltip } from "@/components/ui/icon-tooltip";

export function ContactDetails() {
  return (
    <ul className="text-muted mt-10 space-y-4">
      <li className="flex items-start gap-3">
        <IconTooltip label="Email" side="top">
          <span className="text-accent mt-0.5 inline-flex shrink-0">
            <EnvelopeSimple className="size-5" weight="duotone" aria-hidden />
          </span>
        </IconTooltip>
        <div>
          <p className="text-foreground text-sm font-medium">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <IconTooltip label="Location" side="top">
          <span className="text-accent mt-0.5 inline-flex shrink-0">
            <MapPin className="size-5" weight="duotone" aria-hidden />
          </span>
        </IconTooltip>
        <div>
          <p className="text-foreground text-sm font-medium">Location</p>
          <p>Remote / your city</p>
        </div>
      </li>
    </ul>
  );
}
