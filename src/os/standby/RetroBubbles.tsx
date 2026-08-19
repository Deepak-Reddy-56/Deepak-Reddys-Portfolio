const bubbles = [
  { left: '5%', size: 34, duration: 15, delay: 0 },
  { left: '16%', size: 22, duration: 12, delay: 3 },
  { left: '27%', size: 58, duration: 19, delay: 1 },
  { left: '39%', size: 30, duration: 14, delay: 5 },
  { left: '51%', size: 72, duration: 22, delay: 2 },
  { left: '64%', size: 26, duration: 13, delay: 6 },
  { left: '73%', size: 46, duration: 17, delay: 4 },
  { left: '84%', size: 31, duration: 14, delay: 7 },
  { left: '94%', size: 56, duration: 20, delay: 2 },
];

export default function RetroBubbles() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',

        // Calm background
        background:
          'linear-gradient(180deg, #172f3d 0%, #1d4351 48%, #132d39 100%)',

        pointerEvents: 'none',
      }}
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: bubble.left,
            bottom: '-20%',
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: '50%',

            background:
              'radial-gradient(circle at 28% 23%, rgba(255,255,255,0.88) 0%, rgba(220,245,248,0.34) 9%, rgba(180,225,232,0.08) 28%, rgba(130,200,212,0.035) 68%, rgba(225,250,250,0.15) 100%)',

            border:
              '1px solid rgba(220, 245, 248, 0.42)',

            boxShadow: `
              inset 4px 4px 9px rgba(255,255,255,0.23),
              inset -5px -6px 12px rgba(20,70,82,0.18),
              0 0 14px rgba(180,235,240,0.10)
            `,

            animation:
              `bubbleRise${index} ${bubble.duration}s linear ${bubble.delay}s infinite`,
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: '22%',
              top: '17%',
              width: '23%',
              height: '16%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.7)',
              filter: 'blur(1px)',
            }}
          />

          <span
            style={{
              position: 'absolute',
              left: '61%',
              top: '68%',
              width: '8%',
              height: '7%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.3)',
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '13%',
          transform: 'translateX(-50%)',
          color: 'rgba(230, 247, 250, 0.82)',
          fontFamily: 'Segoe UI, Arial, sans-serif',
          fontSize: '26px',
          fontWeight: 600,
          letterSpacing: '0.14em',
          whiteSpace: 'nowrap',
          textShadow: '0 0 10px rgba(140, 210, 220, 0.25)',
          animation: 'bubbleWakePulse 3s ease-in-out infinite',
        }}
      >
        CLICK TO WAKE
      </div>

      <style>
        {`
          @keyframes bubbleRise0 {
            0% {
              transform: translate3d(0, 25px, 0) scale(0.9);
              opacity: 0;
            }
            8% {
              opacity: 0.8;
            }
            50% {
              transform: translate3d(18px, -210px, 0) scale(1.02);
            }
            100% {
              transform: translate3d(-10px, -500px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise1 {
            0% {
              transform: translate3d(0, 20px, 0) scale(0.9);
              opacity: 0;
            }
            10% {
              opacity: 0.75;
            }
            55% {
              transform: translate3d(-16px, -190px, 0) scale(1);
            }
            100% {
              transform: translate3d(12px, -490px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise2 {
            0% {
              transform: translate3d(0, 30px, 0) scale(0.92);
              opacity: 0;
            }
            8% {
              opacity: 0.78;
            }
            50% {
              transform: translate3d(24px, -230px, 0) scale(1.03);
            }
            100% {
              transform: translate3d(-18px, -520px, 0) scale(1.1);
              opacity: 0;
            }
          }

          @keyframes bubbleRise3 {
            0% {
              transform: translate3d(0, 22px, 0) scale(0.9);
              opacity: 0;
            }
            10% {
              opacity: 0.75;
            }
            60% {
              transform: translate3d(-14px, -215px, 0) scale(1.02);
            }
            100% {
              transform: translate3d(10px, -510px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise4 {
            0% {
              transform: translate3d(0, 24px, 0) scale(0.9);
              opacity: 0;
            }
            8% {
              opacity: 0.82;
            }
            50% {
              transform: translate3d(-20px, -220px, 0) scale(1.03);
            }
            100% {
              transform: translate3d(14px, -530px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise5 {
            0% {
              transform: translate3d(0, 24px, 0) scale(0.9);
              opacity: 0;
            }
            10% {
              opacity: 0.74;
            }
            55% {
              transform: translate3d(14px, -200px, 0) scale(1.02);
            }
            100% {
              transform: translate3d(-12px, -500px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise6 {
            0% {
              transform: translate3d(0, 25px, 0) scale(0.92);
              opacity: 0;
            }
            8% {
              opacity: 0.8;
            }
            50% {
              transform: translate3d(-18px, -225px, 0) scale(1.03);
            }
            100% {
              transform: translate3d(15px, -515px, 0) scale(1.1);
              opacity: 0;
            }
          }

          @keyframes bubbleRise7 {
            0% {
              transform: translate3d(0, 20px, 0) scale(0.9);
              opacity: 0;
            }
            9% {
              opacity: 0.74;
            }
            55% {
              transform: translate3d(15px, -205px, 0) scale(1.02);
            }
            100% {
              transform: translate3d(-15px, -490px, 0) scale(1.08);
              opacity: 0;
            }
          }

          @keyframes bubbleRise8 {
            0% {
              transform: translate3d(0, 22px, 0) scale(0.91);
              opacity: 0;
            }
            8% {
              opacity: 0.8;
            }
            50% {
              transform: translate3d(-22px, -220px, 0) scale(1.04);
            }
            100% {
              transform: translate3d(16px, -530px, 0) scale(1.1);
              opacity: 0;
            }
          }

          @keyframes bubbleWakePulse {
            0%, 100% {
              opacity: 0.38;
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