import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import NavbarLogo from './NavbarLogo.tsx';
import NavbarButton from './NavbarButton.tsx';
import ClickableNumber from './ClickableNumber.tsx';

const Navbar = () => {
    const [openHamburger, setOpenHamburger] = useState(false);
    const getCurrentYear = new Date().getFullYear();

    const handleHamburgerClick = () => {
        setOpenHamburger(!openHamburger);
    };

    return (
        <header
            className={
                'top-0 z-20 flex w-screen flex-col items-center justify-center gap-1 border-b border-blue-100 bg-blue-50 p-2 md:fixed md:flex-row md:justify-around'
            }
        >
            <GiHamburgerMenu
                onClick={handleHamburgerClick}
                className={`my-3 text-[20px] md:my-0 md:hidden ${openHamburger && 'rotate-90'} flex cursor-pointer transition-all`}
            />
            <div className="mx-1 hidden items-center gap-2 text-xs md:flex 2xl:text-base">
                <NavbarLogo />
                <div className="text-center">
                    <p className={'text-zinc-800'}>Flensburger Bowlingcenter</p>
                    <p className={'font-bold text-blue-500'}>Bowling & Gastronomie</p>
                </div>
            </div>
            <ClickableNumber />
            <nav
                className={`md:flex ${openHamburger ? 'animate-fade-right' : 'hidden'} flex flex-wrap justify-center gap-2 2xl:flex-row`}
            >
                <NavbarButton text={'Start'} link={'/'} />
                <NavbarButton text={'Öffnungszeiten & Preise'} link={'/Öffnungszeiten und Preise'} />
                <NavbarButton text={'Gastronomie'} link={'/gastronomie'} />
                <NavbarButton text={'Veranstaltungen'} link={'/veranstaltungen'} />
                <NavbarButton text={`Events ${getCurrentYear}`} link={'/events'} />
                <NavbarButton text={'Betriebssport & Freizeit'} link={'/betriebssport und freizeit'} />
            </nav>
        </header>
    );
};

export default Navbar;
