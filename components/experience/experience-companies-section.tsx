"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
      className="mt-3 overflow-visible"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
    >
      <div className="-mx-1 overflow-x-auto px-1 pt-10 pb-6 [scrollbar-gutter:stable]">
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
      <div className="border-border bg-surface-muted/40 mt-10 w-full overflow-visible rounded-3xl border px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
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
        <p className="text-muted mt-6 text-sm leading-relaxed">
          Click a company logo to see role and details.
        </p>
      ) : null}

      {detail && companyName && selectedKey != null ? (
        <div
          className="mt-8 w-full"
          role="region"
          aria-labelledby="company-detail-heading"
        >
          <p className="text-muted text-xs font-medium tracking-wide uppercase">
            Details
          </p>
          <h2
            id="company-detail-heading"
            className="text-foreground mt-2 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            {companyName}
          </h2>
          <p className="text-foreground mt-1 text-sm font-medium">{detail.role}</p>
          <p className="text-muted mt-0.5 text-sm">{detail.period}</p>
          <p className="text-foreground/90 mt-4 text-base leading-relaxed">
            {detail.summary}
          </p>
          {detail.highlights && detail.highlights.length > 0 ? (
            <ul className="text-foreground/90 mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
              {detail.highlights.map((line, i) => (
                <li key={`${selectedKey}-h-${i}`}>{line}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
