import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text-primary)" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "var(--cyan)",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.5rem",
          margin: "2rem 0 1rem",
        }}
      >
        {children}
      </h2>
    ),
    code: ({ children }) => (
      <code
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85em",
          background: "rgba(0, 212, 255, 0.08)",
          border: "1px solid rgba(0, 212, 255, 0.15)",
          padding: "1px 6px",
          borderRadius: "4px",
          color: "var(--cyan)",
        }}
      >
        {children}
      </code>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--cyan)",
          margin: "1.5rem 0",
          padding: "12px 20px",
          background: "rgba(0, 212, 255, 0.04)",
          borderRadius: "0 6px 6px 0",
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </blockquote>
    ),
  };
}
