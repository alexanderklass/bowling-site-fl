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
            className={`top-0 z-20 flex w-screen flex-col items-center justify-center ${openHamburger ? 'translate-y-0' : '-translate-y-[55%] md:-translate-y-[61%]'} gap-1 border-b border-blue-100 bg-blue-50 p-2 transition-transform duration-300 md:fixed md:justify-around lg:translate-y-0 lg:flex-row`}
        >
            <div className="mx-1 hidden items-center gap-2 text-xs lg:flex 2xl:text-base">
                <NavbarLogo />
                <div className="whitespace-nowrap text-center">
                    <p className={'font-bold text-zinc-800'}>Flensburger Bowlingcenter</p>
                    <p className={'font-bold text-blue-500'}>Bowling & Gastronomie</p>
                </div>
            </div>
            <ClickableNumber />
            <nav
                className={`grid grid-cols-2 justify-center gap-1 md:flex md:flex-wrap md:gap-0.5 lg:flex xl:gap-2 2xl:flex-row`}
            >
                <NavbarButton text={'Start'} link={'/'} />
                <NavbarButton text={'Öffnungszeiten & Preise'} link={'/oeffnungszeiten-preise'} />
                <NavbarButton text={'Gastronomie'} link={'/gastronomie'} />
                <NavbarButton text={'Veranstaltungen'} link={'/veranstaltungen'} />
                <NavbarButton text={`Events ${getCurrentYear}`} link={'/events'} />
                <NavbarButton text={'Betriebssport & Freizeit'} link={'/betriebssport-freizeit'} />
            </nav>

            <div className="mx-1 mt-5 flex items-center gap-2 text-xs sm:hidden 2xl:text-base">
                <NavbarLogo />
                <div className="whitespace-nowrap text-center">
                    <p className={'font-bold text-zinc-800'}>Flensburger Bowlingcenter</p>
                    <p className={'font-bold text-blue-500'}>Bowling & Gastronomie</p>
                </div>
            </div>

            <GiHamburgerMenu
                onClick={handleHamburgerClick}
                size={24}
                className={`lg:hidden ${openHamburger ? 'rotate-90' : ''} flex cursor-pointer transition-all md:mt-5`}
            />
        </header>
    );
};

export default Navbar;
