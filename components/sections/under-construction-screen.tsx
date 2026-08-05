import Link from "next/link";

import { HEADER_SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

const linkedInProfile =
  HEADER_SOCIAL_LINKS.find((item) => item.label === "LinkedIn")?.href ?? "/";

export function UnderConstructionScreen() {
  return (
    <section className="bg-[#f7f1cf] px-4 py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[110rem] items-center justify-center border-[3px] border-black bg-[#fffdf2] px-6 py-12 shadow-[10px_10px_0_0_#111111] sm:min-h-[calc(100vh-3rem)] sm:px-10 lg:px-16 lg:py-16">
        <div className="relative w-full max-w-4xl overflow-hidden text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-5xl leading-none font-semibold tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl">
              Under (re)construction
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/75 sm:text-lg">
              Big ideas are brewing and pixels are moving. I&apos;m reshaping{" "}
              {SITE_NAME}&apos;s portfolio to better showcase my work,
              personality, and the kind of products I love building. Swing back
              soon for the full reveal.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={linkedInProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center gap-3 rounded-md border-[3px] border-black bg-[#ffd400] px-6 text-base font-semibold text-black shadow-[6px_6px_0_0_#111111] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                LinkedIn profile
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
