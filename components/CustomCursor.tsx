'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: string;
}

const ICONS = ['🔒', '🔑', '🛡️', '🔐', '🔒', '🔑'];

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
      {/* Anneau extérieur — lag */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-[width,height,border-color,background] duration-200"
        style={{
          left: trail.x,
          top: trail.y,
          transform: 'translate(-50%, -50%)',
          width:  hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          border: `1px solid ${hovering ? 'rgba(139,92,246,0.7)' : 'rgba(6,182,212,0.5)'}`,
          background: hovering ? 'rgba(139,92,246,0.07)' : 'transparent',
        }}
      />
      {/* Point central — précis */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-[width,height,background,box-shadow] duration-100"
        style={{
          left: pos.x,
          top:  pos.y,
          transform: 'translate(-50%, -50%)',
          width:  hovering ? 5 : 7,
          height: hovering ? 5 : 7,
          background:  hovering ? '#a78bfa' : '#22d3ee',
          boxShadow: hovering
            ? '0 0 12px 4px rgba(139,92,246,0.7)'
            : '0 0 10px 3px rgba(6,182,212,0.6)',
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
