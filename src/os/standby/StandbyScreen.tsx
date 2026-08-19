import { useEffect, useState } from 'react';
import LiquidGlass from './LiquidGlass';
import FloatingParticles from './FloatingParticles';
import RetroBubbles from './RetroBubbles';

interface StandbyScreenProps {
  onWake: () => void;
}

const STANDBY_DURATION = 50_000;
const FADE_DURATION = 1_200;

type StandbyMode = 'liquid' | 'particles' | 'bubbles';

const modes: StandbyMode[] = [
  'liquid',
  'particles',
  'bubbles',
];

export default function StandbyScreen({
  onWake,
}: StandbyScreenProps) {
  const [modeIndex, setModeIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const mode = modes[modeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);

      window.setTimeout(() => {
        setModeIndex((current) => (current + 1) % modes.length);
        setVisible(true);
      }, FADE_DURATION);
    }, STANDBY_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [modeIndex]);

  return (
    <div
      onPointerDown={onWake}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#02070b',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}
      >
        {mode === 'liquid' && <LiquidGlass />}
        {mode === 'particles' && <FloatingParticles />}
        {mode === 'bubbles' && <RetroBubbles />}
      </div>
    </div>
  );
}