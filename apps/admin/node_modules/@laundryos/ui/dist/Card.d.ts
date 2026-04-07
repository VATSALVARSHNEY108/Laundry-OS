import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
