import { useEffect, useRef } from 'react';

interface StartMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function StartMenu({
  open,
  onClose,
}: StartMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open, onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        left: '49.5%',
        bottom: '33px',
        width: '500px',
        height: '330px',
        zIndex: 20,

        background: 'rgba(235, 246, 253, 0.90)',

        border: '1px solid rgba(255, 255, 255, 0.50)',

        borderRadius: '2.5px',

        boxShadow: `
          0 0 0 3px rgba(210, 235, 248, 0.28),
          0 8px 24px rgba(40, 70, 90, 0.20),
          inset 0 1px 0 rgba(255, 255, 255, 0.90),
          inset 0 -1px 0 rgba(150, 190, 215, 0.20)
        `,

        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        overflow: 'hidden',

        opacity: open ? 1 : 0,

        transform: open
          ? 'translate(-50%, 0) scale(1)'
          : 'translate(-50%, 14px) scale(0.98)',

        transition:
          'opacity 260ms ease-out, transform 320ms cubic-bezier(0.16, 1, 0.3, 1)',

        pointerEvents: open ? 'auto' : 'none',
      }}
    >
      {/* Empty Start Menu */}
    </div>
  );
}