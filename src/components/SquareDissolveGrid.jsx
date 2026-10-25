import React, { useEffect, useRef, useState, useCallback } from 'react';

const HERO_CUTOUTS = new Set();
const PORTRAIT_COLUMNS = 10;

export default function SquareDissolveGrid({ variant = 'hero', motionEnabled = true, replayTrigger = 0 }) {
  const containerRef = useRef(null);
  const hasDissolvedRef = useRef(false);
  const totalCells = variant === 'hero' ? 48 : PORTRAIT_COLUMNS;
  const cutouts = variant === 'hero' ? HERO_CUTOUTS : new Set();
  const cellBgClass = variant === 'hero' ? 'aspect-square bg-background' : 'bg-primary';
  const gridClass =
    variant === 'hero'
      ? 'absolute inset-0 grid grid-cols-8 sm:grid-cols-12 content-stretch gap-1.5 pointer-events-auto'
      : 'absolute inset-0 grid grid-cols-10 pointer-events-auto';

  const [opacities, setOpacities] = useState(() =>
    Array.from({ length: totalCells }, (_, i) => (variant === 'portrait' ? 0 : cutouts.has(i) ? 1 : motionEnabled ? 1 : 0))
  );
  const [hoveredCells, setHoveredCells] = useState([]);
  const [randomCells, setRandomCells] = useState([]);

  const handlePointerMove = useCallback((event) => {
    const columns = variant === 'portrait' ? PORTRAIT_COLUMNS : window.innerWidth >= 640 ? 12 : 8;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(event.currentTarget.children).forEach((cell, index) => {
      const rect = cell.getBoundingClientRect();
      const distanceX = event.clientX - (rect.left + rect.width / 2);
      const distanceY = event.clientY - (rect.top + rect.height / 2);
      const distance = distanceX * distanceX + distanceY * distanceY;

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (variant === 'portrait') {
      setHoveredCells([nearestIndex]);
      return;
    }

    const rows = totalCells / columns;
    const row = Math.floor(nearestIndex / columns);
    const column = nearestIndex % columns;
    const cells = [row * columns + column];
    if (column > 0) cells.push(row * columns + column - 1);
    if (row < rows - 1) cells.push((row + 1) * columns + column);

    setHoveredCells(cells);
  }, [variant, totalCells]);

  const handlePointerLeave = useCallback(() => {
    setHoveredCells([]);
  }, []);

  const runDissolve = useCallback(() => {
    const timers = [];
    if (variant === 'portrait') return () => {};
    if (!motionEnabled) {
      setOpacities(Array.from({ length: totalCells }, (_, i) => (cutouts.has(i) ? 1 : 0)));
      return () => {};
    }

    setOpacities(Array.from({ length: totalCells }, () => 1));

    const nonCutoutIndices = [];
    for (let i = 0; i < totalCells; i++) {
      if (!cutouts.has(i)) nonCutoutIndices.push(i);
    }
    const shuffled = nonCutoutIndices.slice().sort(() => Math.random() - 0.5);

    shuffled.forEach((cellIdx, orderIdx) => {
      const t = setTimeout(() => {
        setOpacities((prev) => {
          const next = prev.slice();
          next[cellIdx] = 0;
          return next;
        });
      }, 60 + orderIdx * 18);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [motionEnabled, totalCells, cutouts]);

  useEffect(() => {
    if (!motionEnabled || variant !== 'hero') {
      setRandomCells([]);
      setOpacities(Array.from({ length: totalCells }, (_, i) => (cutouts.has(i) ? 1 : 0)));
      return;
    }

    let timeoutId;
    const revealRandomCells = () => {
      const indices = Array.from({ length: totalCells }, (_, index) => index);
      const shuffled = indices.sort(() => Math.random() - 0.5);
      const count = 4 + Math.floor(Math.random() * 2);
      setRandomCells(shuffled.slice(0, count));
      timeoutId = window.setTimeout(revealRandomCells, 900 + Math.random() * 700);
    };

    revealRandomCells();
    return () => window.clearTimeout(timeoutId);
  }, [motionEnabled, totalCells, cutouts, variant]);

  useEffect(() => {
    if (replayTrigger > 0) {
      return runDissolve();
    }
  }, [replayTrigger, runDissolve]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cleanupTimers = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasDissolvedRef.current) {
            hasDissolvedRef.current = true;
            cleanupTimers = runDissolve();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (cleanupTimers) cleanupTimers();
    };
  }, [runDissolve]);

  return (
    <div
      ref={containerRef}
      className={gridClass}
      aria-hidden="true"
      data-dissolve={variant}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {opacities.map((op, i) => {
        const isCutout = cutouts.has(i);
        return (
          <div
            key={i}
            className={cellBgClass}
            data-cell="true"
            data-cutout={isCutout ? 'true' : undefined}
            style={{
              opacity: variant === 'portrait'
                ? hoveredCells.includes(i) ? 1 : 0
                : isCutout || hoveredCells.includes(i) || randomCells.includes(i) ? 1 : op
            }}
          />
        );
      })}
    </div>
  );
}
