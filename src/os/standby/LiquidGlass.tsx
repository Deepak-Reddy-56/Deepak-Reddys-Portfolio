import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
}

export default function LiquidGlass() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const blobs: Blob[] = [
      {
        x: 0.28,
        y: 0.42,
        size: 150,
        vx: 0.00003,
        vy: 0.00002,
        phase: 0.4,
        speed: 0.0007,
      },
      {
        x: 0.68,
        y: 0.35,
        size: 125,
        vx: -0.000025,
        vy: 0.00003,
        phase: 2.1,
        speed: 0.0009,
      },
      {
        x: 0.52,
        y: 0.72,
        size: 175,
        vx: 0.00002,
        vy: -0.000025,
        phase: 4.2,
        speed: 0.00065,
      },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBlob = (
      blob: Blob,
      time: number,
      hue: number
    ) => {
      const pulse =
        1 +
        Math.sin(time * blob.speed + blob.phase) * 0.08;

      const x =
        blob.x * width +
        Math.sin(time * blob.speed * 0.7 + blob.phase) *
          width *
          0.035;

      const y =
        blob.y * height +
        Math.cos(time * blob.speed * 0.9 + blob.phase) *
          height *
          0.03;

      const size = blob.size * pulse;

      const gradient = context.createRadialGradient(
        x - size * 0.28,
        y - size * 0.3,
        size * 0.05,
        x,
        y,
        size
      );

      gradient.addColorStop(
        0,
        `hsla(${hue}, 75%, 92%, 0.42)`
      );

      gradient.addColorStop(
        0.16,
        `hsla(${hue}, 70%, 82%, 0.24)`
      );

      gradient.addColorStop(
        0.48,
        `hsla(${hue}, 65%, 65%, 0.10)`
      );

      gradient.addColorStop(
        0.82,
        `hsla(${hue}, 60%, 55%, 0.035)`
      );

      gradient.addColorStop(
        1,
        'rgba(255,255,255,0)'
      );

      context.save();

      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);

      context.fillStyle = gradient;
      context.shadowColor = `hsla(${hue}, 70%, 75%, 0.16)`;
      context.shadowBlur = 22;
      context.fill();

      // Glass rim
      context.beginPath();
      context.arc(
        x - size * 0.05,
        y - size * 0.03,
        size * 0.82,
        Math.PI * 1.08,
        Math.PI * 1.72
      );

      context.strokeStyle =
        `hsla(${hue}, 65%, 95%, 0.28)`;

      context.lineWidth = 2;
      context.stroke();

      // Small moving highlight
      const highlightAngle =
        time * blob.speed * 1.5 + blob.phase;

      const highlightX =
        x +
        Math.cos(highlightAngle) * size * 0.42;

      const highlightY =
        y +
        Math.sin(highlightAngle) * size * 0.28;

      context.beginPath();
      context.arc(
        highlightX,
        highlightY,
        size * 0.075,
        0,
        Math.PI * 2
      );

      context.fillStyle =
        'rgba(255,255,255,0.18)';

      context.shadowColor =
        'rgba(255,255,255,0.35)';

      context.shadowBlur = 12;
      context.fill();

      context.restore();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const background = context.createLinearGradient(
        0,
        0,
        width,
        height
      );

      background.addColorStop(0, '#08151d');
      background.addColorStop(0.45, '#12303b');
      background.addColorStop(1, '#09171e');

      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      // Very subtle background light
      const ambient = context.createRadialGradient(
        width * 0.5,
        height * 0.5,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );

      ambient.addColorStop(
        0,
        'rgba(120, 200, 215, 0.07)'
      );

      ambient.addColorStop(
        1,
        'rgba(120, 200, 215, 0)'
      );

      context.fillStyle = ambient;
      context.fillRect(0, 0, width, height);

      blobs.forEach((blob, index) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < 0.18 || blob.x > 0.82) {
          blob.vx *= -1;
        }

        if (blob.y < 0.2 || blob.y > 0.8) {
          blob.vy *= -1;
        }

        drawBlob(
          blob,
          time,
          [188, 205, 175][index]
        );
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener('resize', resize);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '11%',
          transform: 'translateX(-50%)',
          color: 'rgba(235, 249, 252, 0.88)',
          fontFamily: 'Segoe UI, Arial, sans-serif',
          fontSize: '26px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          whiteSpace: 'nowrap',
          textShadow:
            '0 0 8px rgba(120, 220, 240, 0.45), 0 0 18px rgba(80, 190, 220, 0.22)',
          animation:
            'liquidWakePulse 3s ease-in-out infinite',
        }}
      >
        CLICK TO WAKE
      </div>

      <style>
        {`
          @keyframes liquidWakePulse {
            0%, 100% {
              opacity: 0.58;
            }

            50% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}