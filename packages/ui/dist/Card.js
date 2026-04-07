import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '', ...props }) => {
    return (_jsx("div", { className: `l-card ${className}`, ...props, children: children }));
};
