import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ variant = 'primary', className = '', children, ...props }) => {
    return (_jsx("button", { className: `l-btn l-btn-${variant} ${className}`, ...props, children: children }));
};
