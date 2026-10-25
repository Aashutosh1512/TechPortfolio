import React, { useEffect, useRef } from 'react';
import { SHADER_PALETTES, BAYER_4X4 } from '../data/portfolioData';

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export default function ShaderCanvas({ palette = '01', phaseOffset = 0, motionEnabled = true, id, className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 64;
    const rows = 48;
    canvas.width = cols;
    canvas.height = rows;
    ctx.imageSmoothingEnabled = false;

    const paletteObj = SHADER_PALETTES[palette] || SHADER_PALETTES['01'];
    const rgbColors = paletteObj.colors.map(hexToRgb);

    let rafId = null;

    const renderFrame = (timeSec) => {
      const imgData = ctx.createImageData(cols, rows);
      const data = imgData.data;
      const phase = phaseOffset * 1.7 + timeSec * 0.85;

      for (let y = 0; y < rows; y++) {
        const ny = y / rows;
        for (let x = 0; x < cols; x++) {
          const nx = x / cols;
          const w1 = Math.sin(nx * 4.2 + phase) * Math.cos(ny * 3.6 - phase * 0.7);
          const w2 = Math.sin((nx + ny) * 5.5 - phase * 0.5) * 0.5;
          const val = Math.max(0, Math.min(0.999, (w1 + w2 + 1.5) / 3.0));

          const scaled = val * 3;
          const baseIdx = Math.floor(scaled);
          const frac = scaled - baseIdx;
          const threshold = BAYER_4X4[y % 4][x % 4];
          const colorIdx = Math.min(3, baseIdx + (frac > threshold ? 1 : 0));

          const c = rgbColors[colorIdx];
          const p = (y * cols + x) * 4;
          data[p] = c[0];
          data[p + 1] = c[1];
          data[p + 2] = c[2];
          data[p + 3] = 255;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    };

    renderFrame(1.2);

    const loop = (ts) => {
      if (motionEnabled) {
        renderFrame(ts * 0.001);
      }
      rafId = requestAnimationFrame(loop);
    };

    if (motionEnabled) {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [palette, phaseOffset, motionEnabled]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      data-shader-palette={palette}
      className={className}
      aria-hidden="true"
    />
  );
}
