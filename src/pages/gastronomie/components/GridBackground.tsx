import React from 'react';

export interface IGridBackground {
    children: React.ReactNode;
}

const GridBackground = ({ children }: IGridBackground) => {
    return (
        <div
            className={
                'h-full w-full  cursor-pointer rounded-lg p-2 shadow-xl ring-1 ring-gray-300 transition-all hover:scale-105'
            }
        >
            {children}
        </div>
    );
};

export default GridBackground;
