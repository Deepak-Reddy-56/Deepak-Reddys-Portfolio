import { useState } from 'react';
import blissWallpaper from '../../assets/wallpapers/Bliss.png';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';

export default function Desktop() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <img
        src={blissWallpaper}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          objectPosition: 'center',
          pointerEvents: 'none',
        }}
      />

      <StartMenu
        open={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
      />

      <Taskbar
        onStartClick={() => {
          setStartMenuOpen((previous) => !previous);
        }}
      />
    </div>
  );
}