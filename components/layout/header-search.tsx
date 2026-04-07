"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { SEARCH_HINTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeaderSearchProps = {
  className?: string;
  inputClassName?: string;
};

export function HeaderSearch({ className, inputClassName }: HeaderSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(e: MouseEvent | TouchEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  function submitQuery(q: string) {
    const trimmed = q.trim();
    if (trimmed) {
      router.push(`/projects?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/projects");
    }
    setOpen(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitQuery(query);
  }

  function handleHintPick(q: string) {
    setQuery(q);
    submitQuery(q);
  }

  return (
    <div
      ref={wrapRef}
      className={cn("relative min-w-0 flex-1 md:max-w-[40rem]", className)}
    >
      <form onSubmit={handleSubmit} className="relative" role="search">
        <MagnifyingGlass
          className="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          weight="regular"
          aria-hidden
        />
        <input
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="search…"
          className={cn(
            "border-border bg-surface-muted text-foreground placeholder:text-muted focus:border-accent focus:ring-ring/30 w-full rounded-full border py-2 pr-3 pl-9 text-sm transition-[box-shadow,border-color] outline-none focus:ring-2",
            inputClassName,
          )}
          aria-label="Search projects"
          aria-controls="search-hints"
          aria-autocomplete="list"
          autoComplete="off"
        />
      </form>

      {open ? (
        <div
          id="search-hints"
          role="listbox"
          aria-label="Search suggestions"
          className="border-border/60 bg-background/35 ring-border/40 absolute top-full left-0 z-[60] mt-1.5 w-[min(100%,40rem)] overflow-hidden rounded-lg border py-0.5 shadow-lg ring-1 shadow-black/5 backdrop-blur-xl dark:bg-background/30 dark:shadow-black/30"
        >
          <ul className="max-h-40 overflow-y-auto py-0.5">
            {SEARCH_HINTS.map((hint) => (
              <li key={hint.label} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={false}
                  className="text-muted hover:bg-surface-muted/60 hover:text-foreground w-full px-3 py-1.5 text-left text-sm transition-colors"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleHintPick(hint.query)}
                >
                  {hint.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
