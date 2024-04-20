import { FcClock } from 'react-icons/fc';
import FadeAnimation from '../../components/FadeAnimation.tsx';
import bowlingPriceIcon from './assets/bowling-price-icon.png';
import shoeImage from './assets/free-shoes-picture.jpg';

const Index = () => {
    return (
        <main className="flex flex-col items-center justify-center gap-5 2xl:gap-10 ">
            <FadeAnimation direction={'left'}>
                <section
                    className={
                        'relative grid gap-1 rounded-lg p-3 text-xs shadow-xl ring-1 ring-gray-300 transition-all hover:scale-105 md:w-[1000px] 2xl:text-base'
                    }
                >
                    <div className={'grid grid-cols-3 gap-5 font-bold underline'}>
                        <p>ÖFFNUNGSZEITEN</p>
                        <p>UHRZEIT</p>
                        <p>EVENTS</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Montag</p>
                        <p>Geschlossen</p>
                        <p>-</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Dienstag</p>
                        <p>Geschlossen</p>
                        <p>-</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Mittwoch</p>
                        <p>16:00 - 22:00</p>
                        <p>-</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Donnerstag</p>
                        <p>16:00 - 22:00</p>
                        <p>-</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Freitag</p>
                        <p>16:00 - Open End</p>
                        <div>
                            <p>18:00 - 21:00 Freizeitliga</p>
                            <p>Ab 21:00 Uhr Discobowling</p>
                        </div>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Samstag</p>
                        <p>16:00 - Open End</p>
                        <p>Ab 20:00 Uhr Discobowling</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Sonntag</p>
                        <p>16:00 - 20:00</p>
                        <p>-</p>
                    </div>
                    <FcClock className={'absolute right-3 top-3 text-2xl md:text-4xl'} />
                </section>
            </FadeAnimation>

            <FadeAnimation direction={'right'}>
                <section
                    className={
                        'relative grid gap-2 rounded-lg bg-white bg-opacity-45 p-3 text-xs shadow-xl ring-1 ring-gray-300 transition-all hover:scale-105 md:w-[1000px] 2xl:text-base'
                    }
                >
                    <div className={'grid grid-cols-3 gap-5 font-bold underline'}>
                        <p>PREISE</p>
                        <p>UHRZEIT</p>
                        <p>BAHN/STUNDE</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Mittwoch - Donnerstag</p>
                        <p>16:00 - 21:00</p>
                        <p>26,-€</p>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Freitag</p>
                        <div>
                            <p>16:00 - 21:00</p>
                            <p>Ab 21:00 Discobowling</p>
                        </div>
                        <div>
                            <p>26,-€</p>
                            <p>30,-€</p>
                        </div>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Samstag</p>
                        <div>
                            <p>16:00 - 20:00</p>
                            <p>Ab 20:00 Discobwoling</p>
                        </div>
                        <div>
                            <p>26,-€</p>
                            <p>30,-€</p>
                        </div>
                    </div>
                    <div className={'grid grid-cols-3 gap-5'}>
                        <p>Sonntag</p>
                        <p>16:00 - 22:00</p>
                        <p>26,-€</p>
                    </div>
                    <img
                        className={'absolute bottom-2 right-2 w-[25px] md:top-2 md:w-[40px]'}
                        src={bowlingPriceIcon}
                        alt={'price-logo'}
                    />
                </section>
            </FadeAnimation>

            <FadeAnimation direction={'left'}>
                <section className={'flex flex-col items-center gap-5 text-xs md:flex-row md:text-base 2xl:text-xl'}>
                    <div className={'w-full'}>
                        <img
                            src={shoeImage}
                            className={'cursor-pointer rounded-xl border transition-all hover:scale-105'}
                            alt={'shoe-image'}
                        />
                    </div>
                    <div className={'w-full'}>
                        <p className={'text-gray-600'}>
                            <span className={'font-bold text-black'}>Schuhe inklusive !</span> Tauschen Sie bei uns ihr
                            Parkticket aus dem Parkhaus Rote Straße für 2,-€, egal wie lange sie bleiben ! Buchungen
                            sind nur telefonisch möglich Leider können wir nur Stornierungen bis 5 Tage vor dem Termin
                            kostenlos entgegen nehmen. Spätere Stornierungen müssen wir berechnen. Vielen Dank für Euer
                            Verständnis
                        </p>
                        <p className={'text-xs font-bold text-blue-500 md:text-base'}>
                            SONDERZEITEN AUF ANFRAGE, ZB. SCHULKLASSEN, BUNDESWEHR, BETRIEBSAUSFLÜGE ETC.
                        </p>
                    </div>
                </section>
            </FadeAnimation>
        </main>
    );
};

export default Index;
