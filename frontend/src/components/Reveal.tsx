"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type Direction = "left" | "right" | "up" | "down" | "zoom";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} style={style} className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
