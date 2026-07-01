'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: string;
}

const ICONS = ['◆', '✦', '●', '◇', '◆', '✦'];

export default function CustomCursor() {
  const [pos, setPos]       = useState({ x: -200, y: -200 });
  const [trail, setTrail]   = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let raf: number;
    let cx = -200, cy = -200;
    let tx = -200, ty = -200;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      setPos({ x: cx, y: cy });
      const el = e.target as HTMLElement;
      setHovering(!!el.closest('a, button, input, select, textarea, [role="button"]'));
    };

    const loop = () => {
      tx += (cx - tx) * 0.1;
      ty += (cy - ty) * 0.1;
      setTrail({ x: tx, y: ty });
      raf = requestAnimationFrame(loop);
    };

    const onClick = (e: MouseEvent) => {
      const icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      const id = Date.now() + Math.random();
      const count = 3;
      for (let i = 0; i < count; i++) {
        const offsetX = (Math.random() - 0.5) * 40;
        const pid = id + i;
        setTimeout(() => {
          setParticles(prev => [...prev, { id: pid, x: e.clientX + offsetX, y: e.clientY, icon }]);
          setTimeout(() => setParticles(prev => prev.filter(p => p.id !== pid)), 900);
        }, i * 80);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Losange extérieur / lag (gem) */}
      <div
        className="fixed pointer-events-none z-[9998] transition-[width,height,border-color,background] duration-200"
        style={{
          left: trail.x,
          top: trail.y,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          width:  hovering ? 34 : 22,
          height: hovering ? 34 : 22,
          borderRadius: 4,
          border: `1px solid ${hovering ? 'rgba(129,140,248,0.8)' : 'rgba(96,165,250,0.5)'}`,
          background: hovering ? 'rgba(99,102,241,0.10)' : 'transparent',
        }}
      />
      {/* Gem central / précis */}
      <div
        className="fixed pointer-events-none z-[9999] transition-[width,height,background,box-shadow] duration-100"
        style={{
          left: pos.x,
          top:  pos.y,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          width:  hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          borderRadius: 1.5,
          background: hovering
            ? 'linear-gradient(135deg, #818cf8, #6366f1)'
            : 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          boxShadow: hovering
            ? '0 0 12px 3px rgba(99,102,241,0.6)'
            : '0 0 10px 2px rgba(59,130,246,0.5)',
        }}
      />
      {/* Particules au clic */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9999] select-none text-base"
          style={{
            left: p.x - 10,
            top:  p.y - 10,
            animation: 'kyberPop 0.9s ease-out forwards',
          }}
        >
          {p.icon}
        </div>
      ))}
    </>
  );
}
