import FadeAnimation from '../../components/FadeAnimation.tsx';
import ImageSwiper from '../../components/ImageSwiper.tsx';
import veranstaltung1 from './assets/veranstaltung-1.jpg';
import veranstaltung2 from './assets/veranstaltung-2.jpg';
import veranstaltung3 from './assets/veranstaltung-3.jpg';
import tresen1 from './assets/tresen-1.jpg';
import tresen2 from './assets/tresen-2.jpg';
import tresen3 from './assets/tresen-3.jpg';
import 'swiper/swiper-bundle.css';
import { useEffect } from 'react';
import onStartUp from '../../utils/documentHelper.ts';
import StyledButton from '../../components/StyledButton.tsx';
import { Link } from 'react-router-dom';
const Index = () => {
    const veranstaltungList = [veranstaltung1, veranstaltung2, veranstaltung3];
    const tresenList = [tresen1, tresen2, tresen3];

    useEffect(() => {
        onStartUp('Veranstaltungen');
    }, []);

    return (
        <main className={'flex flex-col items-center justify-center gap-5'}>
            <section className={'flex flex-col items-center justify-center'}>
                <FadeAnimation>
                    <div className={'flex flex-col items-center justify-center gap-y-2 md:flex-row'}>
                        <div className={'w-[300px] md:w-[400px] lg:w-[500px]'}>
                            <ImageSwiper list={tresenList} />
                        </div>
                        <div className={'w-full max-w-[500px]'}>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                <span className={'font-bold  text-blue-500'}>In unserer Gastronomie 🧑🏽‍🍳</span>
                                bieten wir frisch zubereitete Speisen für jeden Appetit. Genießen Sie Fingerfood wie
                                Pizzabrötchen beim Bowling oder wählen Sie herzhafte Gerichte am Tisch. Unser Fleisch
                                stammt frisch aus der Region. Für Kindergeburtstage haben wir spezielle Angebote wie
                                Partypizza. Für größere Events wie Betriebsfeiern planen wir gerne individuell mit
                                Ihnen.
                            </p>
                        </div>
                    </div>
                </FadeAnimation>
            </section>
            <section className={'flex flex-col items-center justify-center'}>
                <FadeAnimation>
                    <div className={'flex flex-col items-center justify-center gap-y-2 md:flex-row-reverse'}>
                        <div className={'w-[300px] md:w-[400px] lg:w-[500px]'}>
                            <ImageSwiper delay={3000} list={veranstaltungList} />
                        </div>
                        <div className={'w-full max-w-[500px]'}>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                <span className={'font-bold text-blue-500'}>Unser Clubraum 🎉 </span>
                                bietet Platz für bis zu 80 Personen und eignet sich für Veranstaltungen wie
                                Betriebsfeiern, Familienfeste, Vereinsmeetings und sportliche Großereignisse. Der Raum
                                steht für Großveranstaltungen kostenlos zur Verfügung und kann auch für Buffets, wie
                                z.B. Weihnachtsfeiern mit Grünkohl essen, genutzt werden.
                            </p>
                            <div
                                className={
                                    'hidden w-fit rounded bg-blue-300 bg-opacity-80 p-1 text-xs md:flex lg:text-base'
                                }
                            >
                                <p>Jetzt Buchen unter:</p>
                                <Link className={'text-blue-700 underline'} to={'tel:+49046148087676'}>
                                    <p>0461-48087676</p>
                                </Link>
                            </div>
                            <div className={'my-1 flex md:hidden'}>
                                <Link to={'tel:+49046148087676'}>
                                    <StyledButton text={'Jetzt Buchen!'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeAnimation>
            </section>
        </main>
    );
};

export default Index;
