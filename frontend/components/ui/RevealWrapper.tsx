'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface RevealWrapperProps {
  children:   ReactNode;
  className?: string;
}

export default function RevealWrapper({
  children,
  className = '',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal');
          el.classList.remove('reveal-hidden');
          observer.disconnect(); // una sola vez
        }
      },
      { threshold: 0.1 }
    );

    el.classList.add('reveal-hidden'); // empieza invisible
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}