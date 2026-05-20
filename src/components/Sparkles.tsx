import { useMemo } from "react";

export function Sparkles({ count = 14, className = "" }: { count?: number; className?: string }) {
  const items = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 3,
      size: 4 + Math.random() * 8,
    })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
