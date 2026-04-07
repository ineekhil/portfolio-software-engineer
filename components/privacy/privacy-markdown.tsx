import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-foreground text-4xl font-semibold tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-foreground mt-10 text-2xl font-semibold tracking-tight first:mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-foreground mt-6 text-lg font-semibold">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-muted mt-4 leading-relaxed first:mt-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="text-muted mt-4 list-disc space-y-2 pl-6">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="text-muted mt-4 list-decimal space-y-2 pl-6">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="text-foreground font-semibold">{children}</strong>
  ),
  hr: () => <hr className="border-border my-8" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent underline-offset-4 hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

type PrivacyMarkdownProps = {
  content: string;
};

export function PrivacyMarkdown({ content }: PrivacyMarkdownProps) {
  return (
    <article className="privacy-markdown max-w-2xl">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
