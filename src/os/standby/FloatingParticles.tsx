const particles = Array.from({ length: 42 }, (_, index) => ({
  left: `${4 + Math.random() * 92}%`,
  top: `${4 + Math.random() * 88}%`,
  size: 1 + Math.random() * 3,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 8,
}));

export default function FloatingParticles() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 50% 45%, #102b3a 0%, #06121b 52%, #02070b 100%)',
        pointerEvents: 'none',
      }}
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          style={{
            position: 'absolute',
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background:
              index % 5 === 0
                ? 'rgba(145, 225, 245, 0.95)'
                : 'rgba(225, 246, 250, 0.82)',
            boxShadow:
              '0 0 6px rgba(150, 225, 245, 0.55)',
            animation: `particleFloat${index} ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '13%',
          transform: 'translateX(-50%)',
          color: 'rgba(225, 247, 252, 0.78)',
          fontFamily: 'Segoe UI, Arial, sans-serif',
          fontSize: '26px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          whiteSpace: 'nowrap',
          textShadow: '0 0 10px rgba(100, 205, 225, 0.25)',
          animation: 'particleWakePulse 3s ease-in-out infinite',
        }}
      >
        CLICK TO WAKE
      </div>

      <style>
        {`
          ${particles
            .map(
              (_, index) => `
                @keyframes particleFloat${index} {
                  from {
                    transform:
                      translate3d(
                        ${-12 + (index % 5) * 5}px,
                        ${10 - (index % 4) * 4}px,
                        0
                      );
                    opacity: ${0.3 + (index % 4) * 0.12};
                  }

                  to {
                    transform:
                      translate3d(
                        ${10 - (index % 6) * 4}px,
                        ${-16 + (index % 5) * 5}px,
                        0
                      );
                    opacity: ${0.55 + (index % 3) * 0.15};
                  }
                }
              `
            )
            .join('')}

          @keyframes particleWakePulse {
            0%, 100% {
              opacity: 0.36;
            }

            50% {
              opacity: 0.88;
            }
          }
        `}
      </style>
    </div>
  );
}