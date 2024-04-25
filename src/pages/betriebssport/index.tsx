import vereinslogo from './assets/vereinslogo.jpg';
import firmenliga from './assets/firmenliga.jpg';
import phone from './assets/phone.svg';
import team from './assets/team.svg';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { useEffect } from 'react';
import FadeAnimation from '../../components/FadeAnimation.tsx';
import onStartUp from '../../utils/documentHelper.ts';

const Index = () => {
    useEffect(() => {
        onStartUp('Betriebssport und Freizeit');
    }, []);
    return (
        <main className={'flex flex-col items-center justify-center gap-10 text-base md:text-xl'}>
            <FadeAnimation>
                <section className={'flex w-full items-center justify-center'}>
                    <div className={'flex flex-col-reverse items-center gap-5 md:flex-row'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <p className={'text-base font-bold text-blue-500 md:text-xl'}>Vereinstraining 🎳</p>
                            <p className={'text-base text-gray-600 md:text-xl'}>
                                Jeden Mittwoch von 19:00 bis 22:00Uhr trainiert der Verein Interbowling Flensburg auf
                                frisch geölten und präparierten Bahnen unter fachkundiger Anleitung. Schaut mal bei
                                Facebook vorbei:
                            </p>
                            <Link className={'w-fit'} to={'https://www.facebook.com/Inter.Bowling.Flensburg/'}>
                                <button
                                    className={
                                        'rounded bg-blue-500 p-2 text-xs text-white ring-2 transition-all hover:bg-white hover:text-blue-500 md:text-base'
                                    }
                                >
                                    <ReactTyped
                                        strings={['Inter Bowling Flensburg']}
                                        typeSpeed={70}
                                        showCursor={false}
                                    />
                                </button>
                            </Link>
                        </div>
                        <div className={'w-full'}>
                            <img className={'w-[250px] md:w-[350px]'} src={phone} alt={'vereinslogo'} />
                        </div>
                    </div>
                </section>
            </FadeAnimation>

            <FadeAnimation>
                <section className={'flex w-full items-center justify-center'}>
                    <div className={'flex flex-col-reverse items-center gap-5 md:flex-row-reverse'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <p>
                                <span className={'font-bold text-blue-500'}>Vereinstraining: </span>Interbowling
                                Flensburg
                            </p>
                            <p>
                                <span className={'font-bold text-blue-500'}>Ligen: </span>Betriebssport und Freizeitliga
                            </p>
                            <Link className={'w-fit'} to={'https://www.joker-shit-happens.de/'}>
                                <button
                                    className={
                                        'rounded bg-blue-500 p-2 text-xs text-white ring-2 transition-all hover:bg-white hover:text-blue-500 md:text-base'
                                    }
                                >
                                    <ReactTyped strings={['Firmenliga']} typeSpeed={100} showCursor={false} />
                                </button>
                            </Link>
                        </div>
                        <div className={'w-full'}>
                            <img className={'w-full'} src={team} alt={'team'} />
                        </div>
                    </div>
                </section>
            </FadeAnimation>

            <FadeAnimation>
                <section className={'flex w-full items-center justify-center'}>
                    <div className={'flex flex-col-reverse items-center gap-5 md:flex-row'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <p className={'text-base font-bold text-blue-500 lg:text-xl'}>Betriebssportliga</p>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                Für den Betriebssport können sich Gruppen ab vier Spieler*innen anmelden. Mit
                                individuell berechnetem Handicap haben auch Anfänger eine Chance gegen stärkere Teams.
                                Jahresendturniere bestimmen die besten Teams der Montags- und Dienstagsligen sowie den
                                Einzel-Stadtmeister im Betriebssport von Flensburg.
                            </p>
                        </div>
                        <div className={'w-full'}>
                            <img
                                width={200}
                                loading={'lazy'}
                                className={'w-full cursor-pointer rounded-xl transition-all hover:scale-105'}
                                src={vereinslogo}
                                alt={'firmenliga'}
                            />
                        </div>
                    </div>
                </section>
            </FadeAnimation>

            <FadeAnimation>
                <section className={'flex w-full items-center justify-center'}>
                    <div className={'flex flex-col-reverse items-center gap-5 md:flex-row-reverse'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <p className={'text-base font-bold text-blue-500 lg:text-xl'}>Freizeitliga</p>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                Jeden Freitagabend von 18:15 bis 21:00 Uhr, außer während der Schulferien, findet die
                                traditionsreiche Freizeitliga im Flensburger Bowlingcenter statt. Ursprünglich 1970 von
                                US-amerikanischen Soldaten gegründet, treten Viererteams mit Handicap an, um den
                                Liga-Meister zu ermitteln. Die Freizeitliga kombiniert Spaß und Wettbewerb. Mannschaften
                                können ab sofort gemeldet werden, wobei die Plätze begrenzt sind. Saisonabschluss wird
                                mit einer großen Feier und Preisverleihung gefeiert.
                            </p>
                        </div>
                        <div className={'w-full'}>
                            <img
                                width={200}
                                loading={'lazy'}
                                className={'w-full cursor-pointer rounded-xl transition-all hover:scale-105'}
                                src={firmenliga}
                                alt={'firmenliga'}
                            />
                        </div>
                    </div>
                </section>
            </FadeAnimation>
        </main>
    );
};

export default Index;
