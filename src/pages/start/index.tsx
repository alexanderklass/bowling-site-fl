import FadeAnimation from '../../components/FadeAnimation.tsx';
import shoeImage from './assets/schuhe.jpg';
import discoImage from './assets/disco-bowling-3.jpg';
import eventImage from './assets/in den mai discobowling.jpg';
import VideoPlayer from '../../components/VideoPlayer.tsx';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import onStartUp from '../../utils/documentHelper.ts';
const Index = () => {
    useEffect(() => {
        onStartUp();
    }, []);
    return (
        <main className={'z-10 flex flex-col gap-10 text-base md:gap-20 2xl:text-xl'}>
            <FadeAnimation direction={'left'}>
                <section className={'flex w-full flex-col items-center justify-between gap-5 md:flex-row'}>
                    <img
                        className={'w-[525px] cursor-pointer rounded-xl transition-all duration-300 hover:scale-105'}
                        src={shoeImage}
                        alt={'shoeLogo'}
                    />
                    <div className={'flex w-full flex-col gap-2'}>
                        <p className={'font-bold'}>
                            Herzlich Willkommen im{' '}
                            <ReactTyped
                                className={'text-blue-500'}
                                strings={['Flensburger Bowlingcenter!']}
                                showCursor={false}
                                typeSpeed={70}
                            />
                        </p>
                        <p className={'text-gray-600'}>
                            Egal ob Jung oder Alt, ob Anfänger oder Profi, ob mit Freunden, Familie oder in geselliger
                            Runde mit Arbeitskollegen, hier erleben Sie gemeinsam mit unserem Team eine schöne Zeit mit
                            Spiel, Spaß und guter Stimmung. Wir freuen uns auf Euch!
                        </p>
                        <Link className={'w-fit'} to={'tel:+49046148087676'}>
                            <button
                                className={
                                    'flex rounded bg-blue-500 p-1 text-white ring-2 transition-all hover:bg-white hover:text-blue-500 md:hidden'
                                }
                            >
                                Jetzt reservieren!
                            </button>
                        </Link>
                    </div>
                </section>
            </FadeAnimation>

            <FadeAnimation direction={'right'}>
                <section className={'flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row'}>
                    <div className={'flex w-full flex-col gap-2'}>
                        <p className={'font-bold'}>
                            Disco Bowling
                            <span className={'text-blue-500'}> Freitags</span> ab 21 Uhr &
                            <span className={'text-blue-500'}> Samstags</span> ab 20 Uhr 🕺
                        </p>
                        <p className={'text-gray-600'}>
                            Wir spielen bei Schwarzlicht und toller Musik, aus den 70er, 80er, 90er und 2000er Jahren,
                            in gemütlicher Runde. Denkt bitte an eine rechtzeitige Buchung, da das Disco Bowling sehr
                            beliebt ist. Findet ihr heraus, was es mit dem roten Pin auf sich hat?
                        </p>
                    </div>
                    <img
                        className={'w-[525px] cursor-pointer rounded-xl transition-all duration-300 hover:scale-105'}
                        src={discoImage}
                        alt={'shoeLogo'}
                    />
                </section>
            </FadeAnimation>

            <FadeAnimation direction={'right'}>
                <section className="flex flex-col items-center justify-between gap-5 md:flex-row">
                    <div className={'hidden w-full p-0 md:flex md:p-2'}>
                        <VideoPlayer />
                    </div>
                    <div className={'flex w-full flex-col gap-2 p-2 text-white'}>
                        <p className={'text-xl font-bold text-blue-500'}>
                            <span className={'text-black'}>Heavy Metal </span>Bowling 🎸
                        </p>
                        <p className={'break-words text-gray-600'}>
                            Zurückblickend auf das Heavy Metal Bowling Event! Eine Nacht, in der Live-Metal-Musik über
                            den Bahnen tobte und Bowling zu einem rockigen Spektakel wurde. Klänge vermischten sich,
                            Pins fielen und Erinnerungen wurden geschaffen. Cheers für diese epische Nacht voller Musik
                            und Sport!
                        </p>
                    </div>
                </section>
            </FadeAnimation>

            <FadeAnimation direction={'left'}>
                <section className={'flex flex-col items-center justify-center gap-5 md:flex-row'}>
                    <img
                        src={eventImage}
                        className={'w-[350px] cursor-pointer rounded-xl transition-all duration-300 hover:scale-105'}
                        alt={'eventLogo'}
                    />
                    <div className={'flex w-full flex-col gap-2 md:w-[500px]'}>
                        <p className={'text-base font-bold 2xl:text-xl'}>🎳✨ Discobowling in den Mai! ✨🎳</p>
                        <p className={'text-gray-600'}>
                            Feiert den Frühling mit uns auf den glänzenden Bahnen! Erlebt eine Nacht voller Musik,
                            Lichter und Bowling-Spaß am Dienstag, den 30. Mai. Ab 19:00 Uhr könnt ihr zu den Beats
                            unserer Musik bowlen, während die Disco-Kugeln die Bahn erleuchten.
                        </p>
                        <p className={'text-base font-bold'}>
                            🚪 Eintritt: 49€ pro Person/
                            <span className={'text-blue-500'}> Incl Bowling und allen Getränken</span>
                        </p>
                        <p className={'text-base font-bold'}>📍 Ort: Rote Straße 15, 24937 Flensburg</p>
                        <p className={'text-base font-bold'}>🎉 Reservierungen unter 0461-48087676</p>
                    </div>
                </section>
            </FadeAnimation>
        </main>
    );
};

export default Index;
