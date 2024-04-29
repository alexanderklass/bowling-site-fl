import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export interface IGridDisclosure {
    children: React.ReactNode;
    title: string;
}

const GridDisclosure = ({ children, title }: IGridDisclosure) => {
    const [open, setOpen] = useState(false);
    const handleFieldClick = () => {
        setOpen(!open);
    };
    return (
        <div className={'flex w-full flex-col items-center justify-center rounded-md bg-blue-50'}>
            <Disclosure>
                <Disclosure.Button
                    onClick={handleFieldClick}
                    className={
                        'hover:text flex w-full items-center justify-between rounded bg-blue-500 p-1 text-[14px] text-white ring-1 transition-all hover:bg-white hover:text-blue-500 md:px-10 md:text-base'
                    }
                >
                    <p>{title}️</p>
                    <IoIosArrowDown className={`${open ? 'rotate-180' : ''} text-2xl transition-all duration-300`} />
                </Disclosure.Button>
                <Disclosure.Panel className={'w-full animate-fade bg-blue-200'}>{children}</Disclosure.Panel>
            </Disclosure>
        </div>
    );
};

export default GridDisclosure;
