import { FaArrowCircleDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ScrollArrow = () => {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const checkScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            if (scrollPosition >= documentHeight) {
                setShowButton(false);
            } else {
                setShowButton(true);
            }
        };
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-[90%] z-20 flex items-center justify-center ${!showButton && 'hidden'} rounded-full bg-white text-4xl sm:hidden`}
        >
            <FaArrowCircleDown className={'text-blue-500'} />
        </div>
    );
};

export default ScrollArrow;
