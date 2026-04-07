import React from 'react';
export declare const Badge: React.FC<{
    count: number;
}>;
export declare const Toast: React.FC<{
    message: string;
    type?: 'success' | 'error';
    onClose: () => void;
}>;
