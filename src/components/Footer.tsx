import facebookLogo from '../assets/facebook-logo.svg';
import instagramLogo from '../assets/instagram-logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className={
                'inset-x-0 bottom-0 mt-auto w-full border-t border-blue-100 bg-blue-50 p-4 text-xs 2xl:text-base'
            }
        >
            <div className={'mx-3 flex flex-col items-start justify-center gap-3 md:flex-row'}>
                <section className={'flex flex-col gap-1'}>
                    <p className={'text-xl font-bold underline'}>Kontakt</p>
                    <p>Christian Reinheimer</p>
                    <p>Rote Straße 15</p>
                    <p>24937 Flensburg</p>
                    <p>Parkhaus, 4. OG</p>
                </section>

                <section className={'flex flex-col gap-1'}>
                    <p className={'text-xl font-bold underline'}>Steuernummern</p>
                    <p>Ust.IdNr.:DE337384814</p>
                    <p>St.-Nr.:1516506806</p>
                </section>

                <section className={'flex flex-col gap-1'}>
                    <Link to={'/datenschutz'} className={'w-fit'}>
                        <p className={'text-xl font-bold text-blue-700 underline'}>Datenschutz</p>
                    </Link>
                    <div className={'flex flex-row items-center gap-1'}>
                        <FaPhoneAlt />
                        <p>0461-48087676</p>
                    </div>
                    <div className={'flex flex-row items-center gap-1'}>
                        <MdEmail />
                        <p>Flensburger-bowlingcenter@t-online.de</p>
                    </div>
                    <div className={'flex flex-row items-center gap-1'}>
                        <FaHome />
                        <p>Flensburger-Bowlingcenter.de</p>
                    </div>
                </section>

                <section className={'flex flex-col gap-1'}>
                    <p className={'text-xl font-bold underline'}>Social Media</p>
                    <div className={'flex flex-row items-center gap-1'}>
                        <Link to={'https://www.instagram.com/flensburgerbowlingcenter/?hl=de'}>
                            <img width={30} src={instagramLogo} alt="instagram" />
                        </Link>
                        <Link to={'https://de-de.facebook.com/FlensburgerBowlingcenter/'}>
                            <img width={30} className={'rounded'} src={facebookLogo} alt="facebook" />
                        </Link>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
