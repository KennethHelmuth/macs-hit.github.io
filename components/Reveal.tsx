"use client";

import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;        // ms — stagger offset
  className?: string;
  as?: React.ElementType;
}

/**
 * Wraps children in a div that fades + slides up when it enters
 * the viewport. Uses IntersectionObserver — zero layout thrash,
 * smooth 60fps via CSS transitions.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, skip animation
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply stagger delay at reveal time, not at render time,
          // so CSS transition-delay only runs during the actual animation.
          if (delay > 0) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.classList.add("is-visible");
          // Clean up delay after animation settles
          const timer = setTimeout(() => {
            el.style.transitionDelay = "";
          }, delay + 800);
          observer.unobserve(el);
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
