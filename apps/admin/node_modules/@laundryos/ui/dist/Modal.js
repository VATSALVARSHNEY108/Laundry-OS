import { jsx as _jsx } from "react/jsx-runtime";
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "l-modal-backdrop", onClick: onClose, children: _jsx("div", { className: "l-modal-content", onClick: e => e.stopPropagation(), children: children }) }));
};
