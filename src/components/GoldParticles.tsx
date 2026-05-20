import { useMemo } from "react";

export function GoldParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 20,
      opacity: 0.35 + Math.random() * 0.5,
    })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: `-${p.size}px`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, oklch(0.88 0.12 80 / 0.9), transparent 70%)",
            boxShadow: "0 0 12px oklch(0.78 0.12 78 / 0.8)",
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
