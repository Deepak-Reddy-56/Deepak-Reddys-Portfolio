import taskbarImage from '../../assets/windows7/taskbar/taskbar_transclucent.png';
import windowsLogo from '../../assets/windows7/taskbar/windows_logo.png';
import SystemTray from './SystemTray';

interface TaskbarProps {
  onStartClick: () => void;
}

export default function Taskbar({ onStartClick }: TaskbarProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '24px',
        zIndex: 10,
        pointerEvents: 'auto',
      }}
    >
      {/* Taskbar background */}
      <img
        src={taskbarImage}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          pointerEvents: 'none',
        }}
      />

      {/* Centered Start + future pinned apps group */}
      <div
        style={{
          position: 'absolute',
          left: '49.5%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2px',
          height: '100%',
          zIndex: 2,
        }}
      >
        <button
          type="button"
          aria-label="Start"
          onPointerDown={(event) => {
            event.stopPropagation();
          }}
          onClick={onStartClick}
          style={{
            width: '23px',
            height: '23px',
            padding: 0,
            margin: 0,
            border: 'none',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <img
            src={windowsLogo}
            alt=""
            style={{
              width: '23px',
              height: '23px',
              display: 'block',
              objectFit: 'contain',
              margin: 0,
              padding: 0,
            }}
          />
        </button>

        {/* Pinned apps will be added here later */}
      </div>

      {/* Right-side system tray */}
      <SystemTray />
    </div>
  );
}