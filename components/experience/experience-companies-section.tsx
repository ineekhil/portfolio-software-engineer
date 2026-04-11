"use client";

import Image from "next/image";
import {
  Briefcase,
  ClipboardText,
  DeviceMobile,
  Globe,
  Images,
  MapPin,
  UsersThree,
} from "@phosphor-icons/react";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CompanyLogoMark } from "@/components/company-logo-mark";
import { ViralFissionLogo } from "@/components/logos/viral-fission-logo";
import {
  messages,
  WORKED_COMPANY_DETAILS,
  WORKED_COMPANY_LOGOS,
  type WorkedCompanyKey,
} from "@/lib/messages";
import { cn } from "@/lib/utils";

type CompanyLogoWaveItem =
  | { key: string; kind: "svg"; name: string }
  | { key: string; kind: "image"; logoSrc: string; name: string };

const MIN_SCALE = 1;
const MAX_SCALE = 1.62;
/** Extra scale on the clicked company so it reads larger than the rest. */
const SELECTED_LOGO_MULT = 1.24;
const MAX_DISPLAY_SCALE = 1.92;
/** Wider = softer wave across neighbors (pixels, ~1σ of the Gaussian). */
const SIGMA_PX = 92;

function scaleFromDistance(d: number) {
  return (
    MIN_SCALE +
    (MAX_SCALE - MIN_SCALE) *
      Math.exp(-(d * d) / (2 * SIGMA_PX * SIGMA_PX))
  );
}

const logoShell = cn(
  "origin-bottom relative inline-flex overflow-visible rounded-xl will-change-transform",
  "transition-[transform,box-shadow] duration-[480ms]",
  "[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]",
  "motion-reduce:transition-none motion-reduce:shadow-none",
);

function CompanyLogosWave({
  items,
  selectedKey,
  onSelect,
}: {
  items: readonly CompanyLogoWaveItem[];
  selectedKey: string | null;
  onSelect: (key: string) => void;
}) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scales, setScales] = useState(() => items.map(() => MIN_SCALE));

  useEffect(() => {
    setScales(Array(items.length).fill(MIN_SCALE));
  }, [items.length]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) setScales(Array(items.length).fill(MIN_SCALE));
  }, [reduceMotion, items.length]);

  const resetScales = useCallback(() => {
    setScales(Array(items.length).fill(MIN_SCALE));
  }, [items.length]);

  const updateScalesFromPoint = useCallback(
    (clientX: number, clientY: number) => {
      const next = logoRefs.current.map((el) => {
        if (!el) return MIN_SCALE;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const d = Math.hypot(dx, dy * 0.55);
        return scaleFromDistance(d);
      });
      setScales(next);
    },
    [],
  );

  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (reduceMotion) return;
      pendingRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const p = pendingRef.current;
        if (!p) return;
        updateScalesFromPoint(p.x, p.y);
      });
    },
    [reduceMotion, updateScalesFromPoint],
  );

  const onPointerLeave = useCallback(() => {
    pendingRef.current = null;
    if (rafRef.current != null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    resetScales();
  }, [resetScales]);

  return (
    <div
      className="mt-3 min-w-0 max-w-full overflow-visible"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
    >
      <div className="-mx-1 flex min-w-0 max-w-full justify-center overflow-x-auto overscroll-x-contain px-1 pt-10 pb-6 [scrollbar-gutter:stable] sm:justify-start">
        <ul className="flex w-max max-w-none flex-nowrap gap-1.5 overflow-visible px-2 sm:gap-2 sm:px-3">
          {items.map((item, index) => {
            const scale = reduceMotion ? MIN_SCALE : scales[index] ?? MIN_SCALE;
            const isSelected = selectedKey === item.key;
            const displayScale = Math.min(
              scale * (isSelected ? SELECTED_LOGO_MULT : 1),
              MAX_DISPLAY_SCALE,
            );
            const elevated = displayScale > 1.04;

            return (
              <li
                key={item.key}
                className="relative flex w-[7.5rem] shrink-0 flex-col items-center overflow-visible"
              >
                <button
                  type="button"
                  onClick={() => onSelect(item.key)}
                  aria-pressed={isSelected}
                  aria-label={`${item.name}, show details`}
                  className={cn(
                    "group flex w-full flex-col items-center gap-1.5 p-1.5 outline-none transition-shadow",
                    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  )}
                >
                  <div
                    ref={(el) => {
                      logoRefs.current[index] = el;
                    }}
                    className={cn(
                      logoShell,
                      elevated &&
                        "shadow-lg shadow-black/12 dark:shadow-black/45",
                    )}
                    style={{
                      transform: `scale(${displayScale})`,
                      zIndex:
                        Math.round((displayScale - MIN_SCALE) * 80) +
                        (isSelected ? 40 : 0),
                    }}
                  >
                    {item.kind === "svg" ? (
                      <ViralFissionLogo size="xs" />
                    ) : (
                      <CompanyLogoMark
                        src={item.logoSrc}
                        label={item.name}
                        size="xs"
                      />
                    )}
                  </div>
                  <span className="text-foreground w-full text-center text-sm font-semibold">
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function buildWaveItems(): CompanyLogoWaveItem[] {
  return WORKED_COMPANY_LOGOS.map((entry) => {
    const name = messages.companies[entry.companyKey];
    if (entry.kind === "svg") {
      return { key: entry.companyKey, kind: "svg" as const, name };
    }
    return {
      key: entry.companyKey,
      kind: "image" as const,
      logoSrc: entry.logoSrc,
      name,
    };
  });
}

export function ExperienceCompaniesSection() {
  const waveItems = useMemo(buildWaveItems, []);
  const [selectedKey, setSelectedKey] = useState<WorkedCompanyKey | null>(null);

  const detail =
    selectedKey != null ? WORKED_COMPANY_DETAILS[selectedKey] : null;
  const companyName =
    selectedKey != null ? messages.companies[selectedKey] : null;

  return (
    <>
      <div className="border-border bg-surface-muted/40 mt-10 w-full overflow-visible rounded-3xl border px-5 py-4 text-center sm:px-6 sm:py-5 sm:text-left lg:px-8 lg:py-5">
        <p className="text-muted text-xs font-medium tracking-wide uppercase">
          Companies
        </p>
        <CompanyLogosWave
          items={waveItems}
          selectedKey={selectedKey}
          onSelect={(key) => setSelectedKey(key as WorkedCompanyKey)}
        />
      </div>

      {selectedKey == null ? (
        <p className="text-muted mt-6 text-center text-sm leading-relaxed sm:text-left">
          {messages.experiencePage.selectCompanyHint}
        </p>
      ) : null}

      {detail && companyName && selectedKey != null ? (
        <div
          className="mt-8 w-full space-y-8 text-left"
          role="region"
          aria-labelledby="company-detail-heading"
        >
          <div className="space-y-3">
            <header>
              <h2
                id="company-detail-heading"
                className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl"
              >
                <span className="text-muted font-medium">
                  {messages.experiencePage.companyLabel}
                </span>{" "}
                <span>{companyName}</span>
              </h2>
            </header>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-2">
              <div className="flex items-center gap-3">
                <span className="text-accent inline-flex shrink-0">
                  <MapPin className="size-5" weight="duotone" aria-hidden />
                </span>
                <p className="text-foreground text-sm leading-relaxed">
                  <span className="text-muted font-medium">
                    {messages.experiencePage.location}
                  </span>{" "}
                  {detail.locationMapUrl ? (
                    <a
                      href={detail.locationMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {detail.location}
                    </a>
                  ) : (
                    detail.location
                  )}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-accent inline-flex shrink-0">
                  <Briefcase className="size-5" weight="duotone" aria-hidden />
                </span>
                <p className="text-foreground text-sm leading-relaxed">
                  <span className="text-muted font-medium">
                    {messages.experiencePage.workType}
                  </span>{" "}
                  {detail.workArrangement}
                </p>
              </div>
              {detail.mobileApp ? (
                <div className="flex w-full basis-full items-start gap-3 sm:items-center">
                  <span className="text-accent mt-0.5 inline-flex shrink-0 sm:mt-0">
                    <DeviceMobile
                      className="size-5"
                      weight="duotone"
                      aria-hidden
                    />
                  </span>
                  <p className="text-foreground text-sm leading-relaxed">
                    <span className="text-muted font-medium">
                      {messages.experiencePage.mobileApp}:
                    </span>{" "}
                    <span className="font-medium">{detail.mobileApp.name}</span>
                    {" — "}
                    <a
                      href={detail.mobileApp.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {messages.experiencePage.googlePlay}
                    </a>
                    <span className="text-muted"> · </span>
                    <a
                      href={detail.mobileApp.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {messages.experiencePage.appStore}
                    </a>
                  </p>
                </div>
              ) : null}
              {detail.webLinks && detail.webLinks.length > 0 ? (
                <div className="flex w-full basis-full items-start gap-3 sm:items-center">
                  <span className="text-accent mt-0.5 inline-flex shrink-0 sm:mt-0">
                    <Globe className="size-5" weight="duotone" aria-hidden />
                  </span>
                  <p className="text-foreground text-sm leading-relaxed">
                    <span className="text-muted font-medium">
                      {messages.experiencePage.webLinks}:
                    </span>{" "}
                    {detail.webLinks.map((link, i) => (
                      <Fragment key={link.href}>
                        {i > 0 ? (
                          <span className="text-muted" aria-hidden>
                            {" "}
                            ·{" "}
                          </span>
                        ) : null}
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent underline-offset-4 hover:underline"
                        >
                          {link.label}
                        </a>
                      </Fragment>
                    ))}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <section aria-labelledby={`${selectedKey}-about-heading`}>
            <h3
              id={`${selectedKey}-about-heading`}
              className="text-foreground text-base font-semibold tracking-tight"
            >
              {messages.experiencePage.whatCompanyDoes}
            </h3>
            <div className="text-foreground/90 mt-3 space-y-2 text-base leading-snug">
              {detail.aboutLines.map((line, i) => (
                <p key={`${selectedKey}-about-${i}`}>{line}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby={`${selectedKey}-roles-heading`}>
            <h3
              id={`${selectedKey}-roles-heading`}
              className="text-foreground flex items-center gap-2 text-base font-semibold tracking-tight"
            >
              <UsersThree
                className="text-accent size-5 shrink-0"
                weight="duotone"
                aria-hidden
              />
              {messages.experiencePage.roles}
            </h3>
            <ul className="text-foreground/90 mt-3 space-y-2 text-base leading-relaxed">
              {detail.rolesTimeline.map((r) => (
                <li key={`${selectedKey}-role-${r.title}-${r.period}`}>
                  <span className="font-medium">{r.title}</span>
                  <span className="text-muted"> ({r.period})</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${selectedKey}-work-heading`}>
            <h3
              id={`${selectedKey}-work-heading`}
              className="text-foreground flex items-center gap-2 text-base font-semibold tracking-tight"
            >
              <ClipboardText
                className="text-accent size-5 shrink-0"
                weight="duotone"
                aria-hidden
              />
              {messages.experiencePage.workDetails}
            </h3>
            <div className="mt-4 space-y-8">
              {detail.workDetails.map((block) => (
                <div key={`${selectedKey}-wd-${block.roleTitle}`}>
                  <p className="text-foreground font-medium">{block.roleTitle}</p>
                  {block.technologies && block.technologies.length > 0 ? (
                    <p className="text-foreground/90 mt-2 text-sm leading-relaxed">
                      <span className="text-foreground font-medium">
                        {messages.experiencePage.technologies}
                      </span>{" "}
                      <span className="text-foreground/90">
                        {block.technologies.join(", ")}
                      </span>
                    </p>
                  ) : null}
                  <ul className="text-foreground/90 mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
                    {block.bullets.map((line, i) => (
                      <li key={`${selectedKey}-wd-${block.roleTitle}-${i}`}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {detail.memories.length > 0 ? (
            <section aria-labelledby={`${selectedKey}-mem-heading`}>
              <h3
                id={`${selectedKey}-mem-heading`}
                className="text-foreground flex items-center gap-2 text-base font-semibold tracking-tight"
              >
                <Images
                  className="text-accent size-5 shrink-0"
                  weight="duotone"
                  aria-hidden
                />
                {messages.experiencePage.memories}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {detail.memories.map((photo, i) => (
                  <li
                    key={`${selectedKey}-mem-${i}`}
                    className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface-muted"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                      className="object-cover"
                      unoptimized={
                        photo.src.includes("drive.google.com") ||
                        photo.src.includes("googleusercontent.com")
                      }
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
