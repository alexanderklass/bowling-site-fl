import React from 'react';

export interface IGridBackground {
    children: React.ReactNode;
}

const GridBackground = ({ children }: IGridBackground) => {
    return <div className={'h-full w-full p-2'}>{children}</div>;
};

export default GridBackground;
