import { Link } from 'react-router-dom';

export interface INavbarButton {
    link: string;
    text: string;
}

const NavbarButton = ({ link, text }: INavbarButton) => {
    return (
        <Link to={link}>
            <button
                type={'button'}
                className={
                    'w-full rounded-t border-b-2 border-blue-400 p-1 text-xs font-bold text-zinc-800 transition-all hover:border-blue-600 hover:bg-blue-200 focus:border-black 2xl:text-base'
                }
            >
                {text}
            </button>
        </Link>
    );
};

export default NavbarButton;
