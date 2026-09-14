import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppShell } from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Portfolio`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

/** Browser UI tint — keep in sync with `styles/colors.css` (`--meta-theme-color` / `--background`). */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(node) {
                    if (!node || !node.removeAttribute) return;
                    if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                    if (node.hasAttribute('bis_register')) node.removeAttribute('bis_register');
                  };
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        if (m.attributeName === 'bis_skin_checked' || m.attributeName === 'bis_register' || (m.attributeName && m.attributeName.indexOf('__processed_') === 0)) {
                          m.target.removeAttribute(m.attributeName);
                        }
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          var node = m.addedNodes[j];
                          if (node.nodeType === 1) {
                            clean(node);
                            if (node.querySelectorAll) {
                              var children = node.querySelectorAll('[bis_skin_checked], [bis_register]');
                              for (var k = 0; k < children.length; k++) clean(children[k]);
                            }
                          }
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    childList: true,
                  });
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', function() {
                      var all = document.querySelectorAll('[bis_skin_checked], [bis_register]');
                      for (var i = 0; i < all.length; i++) clean(all[i]);
                    });
                  } else {
                    var all = document.querySelectorAll('[bis_skin_checked], [bis_register]');
                    for (var i = 0; i < all.length; i++) clean(all[i]);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="bg-background text-foreground min-h-full overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
