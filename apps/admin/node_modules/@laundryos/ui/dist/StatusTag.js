import { jsx as _jsx } from "react/jsx-runtime";
export const StatusTag = ({ status }) => {
    let tagClass = 'l-tag-pending';
    if (['IN_PROGRESS', 'OUT_FOR_DELIVERY'].includes(status))
        tagClass = 'l-tag-active';
    if (['DELIVERED'].includes(status))
        tagClass = 'l-tag-success';
    return (_jsx("span", { className: `l-tag ${tagClass}`, children: status.replace(/_/g, ' ') }));
};
