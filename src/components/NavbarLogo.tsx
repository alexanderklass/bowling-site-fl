import Logo from '../assets/icon-logo.png';

const NavbarLogo = () => {
    return (
        <img
            className={'w-[40px] rounded-full bg-blue-400 ring-2 ring-blue-800 transition-all hover:scale-105'}
            src={Logo}
            alt="Logo"
        />
    );
};

export default NavbarLogo;
