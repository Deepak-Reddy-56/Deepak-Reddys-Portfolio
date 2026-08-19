import { useEffect, useState } from 'react';
import bluetoothIcon from '../../assets/windows7/taskbar_bottom_right_icons/bluetooth.png';
import networkIcon from '../../assets/windows7/taskbar_bottom_right_icons/network_bars.png';

export default function SystemTray() {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timer = window.setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div
            style={{
                position: 'absolute',
                right: '5px',
                bottom: 0,
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                zIndex: 3,
                color: '#fff',
                fontFamily: 'Segoe UI, Arial, sans-serif',
            }}
        >
            <img
                src={bluetoothIcon}
                alt="Bluetooth"
                style={{
                    width: '12px',
                    height: '12px',
                    objectFit: 'contain',
                    display: 'block',
                }}
            />

            <img
                src={networkIcon}
                alt="Network"
                style={{
                    width: '12px',
                    height: '12px',
                    objectFit: 'contain',
                    display: 'block',
                }}
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '48px',
                    height: '22px',
                    lineHeight: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                }}
            >
                <span
                    style={{
                        fontSize: '8px',
                    }}
                >
                    {time}
                </span>

                <span
                    style={{
                        marginTop: '2px',
                        fontSize: '7px',
                    }}
                >
                    {date}
                </span>
            </div>
        </div>
    );
}