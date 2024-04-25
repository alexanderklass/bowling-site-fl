import { NavLink, useLocation } from 'react-router-dom';

export interface INavbarButton {
    link: string;
    text: string;
}

const NavbarButton = ({ link, text }: INavbarButton) => {
    const location = useLocation();
    return (
        <NavLink to={link}>
            <button
                type={'button'}
                className={`w-full ${location.pathname === link ? 'bg-blue-500 text-white ring-2 ring-blue-400' : 'text-zinc-800'} rounded-t border-b-2 border-blue-400 p-1 text-xs font-bold transition-all hover:border-blue-600 hover:bg-blue-200 hover:text-zinc-800 2xl:text-base`}
            >
                {text}
            </button>
        </NavLink>
    );
};

export default NavbarButton;
