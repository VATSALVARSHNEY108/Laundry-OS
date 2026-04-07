import { jsx as _jsx } from "react/jsx-runtime";
export const Badge = ({ count }) => {
    if (count === 0)
        return null;
    return (_jsx("span", { style: {
            background: '#ef4444', color: 'white', fontSize: '0.75rem',
            padding: '2px 6px', borderRadius: '99px', marginLeft: '8px'
        }, children: count }));
};
// Toast
export const Toast = ({ message, type = 'success', onClose }) => {
    return (_jsx("div", { style: {
            position: 'fixed', bottom: '20px', right: '20px', zIndex: 100,
            background: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white', padding: '1rem', borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer',
            animation: 'modal-in 0.3s ease-out'
        }, onClick: onClose, children: message }));
};
