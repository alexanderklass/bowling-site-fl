import React from 'react';

export interface IGridBackground {
    children: React.ReactNode;
    backgroundColor?: string;
}

const GridBackground = ({ children, backgroundColor }: IGridBackground) => {
    return <div className={`h-full w-full p-2 ${backgroundColor}`}>{children}</div>;
};

export default GridBackground;
