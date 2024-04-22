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
                    <div className={'flex flex-col items-center justify-center md:flex-row'}>
                        <div className={'w-[300px] md:w-[400px] lg:w-[500px]'}>
                            <ImageSwiper list={tresenList} />
                        </div>
                        <div className={'w-full max-w-[500px]'}>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                <span className={'font-bold  text-blue-500'}>In unserer Gastronomie 🧑🏽‍🍳</span> halten wir
                                Speisen für den kleinen, sowie auch den großen Hunger für sie bereit. Während des
                                Bowling spiels besteht die Möglichkeit Fingerfoods, wie Pizzabrötchen zu genießen. Für
                                den großen Hunger bieten wir am Tisch Speisen aller Art an. Unsere Speisen werden alle
                                frisch zubereitet. Unser Fleisch kommt frisch aus der Region. Wir bieten auch spezielle
                                Sonderangebote für Kindergeburtstage an z.B. Partypizza. Bei größeren Veranstaltungen
                                wie Betriebsfeiern und ähnlichem, freuen wir uns, mit Ihnen einen persönlichen Termin zu
                                vereinbaren, um dann vor Ort, zusammen mit dem Koch Ihre Feier zu besprechen und planen.
                            </p>
                        </div>
                    </div>
                </FadeAnimation>
            </section>
            <section className={'flex flex-col items-center justify-center'}>
                <FadeAnimation>
                    <div className={'flex flex-col items-center justify-center md:flex-row-reverse'}>
                        <div className={'w-[300px] md:w-[400px] lg:w-[500px]'}>
                            <ImageSwiper delay={3000} list={veranstaltungList} />
                        </div>
                        <div className={'w-full max-w-[500px]'}>
                            <p className={'text-xs text-gray-600 lg:text-base'}>
                                <span className={'font-bold text-blue-500'}>Für Veranstaltungen 🎉 </span>aller Art
                                halten wir einen Clubraum für bis zu 80 Personen bereit. Ob Betriebsfeiern,
                                Familienfeste, Vereinsfeiern, Sitzungen oder Veranstaltungen wie Fußball,
                                Europameisterschaften oder Weltmeisterschaften, alles kann in unserem Clubraum
                                stattfinden. Für Großveranstaltungen kostenlos zur Verfügung. Weiter können in diesem
                                Raum auch Feiern mit Buffets aller Art stattfinden. Zum Beispiel für Weihnachtsfeiern
                                mit Grünkohl essen.
                            </p>
                            <p className={'text-xs font-bold lg:text-base'}>Bitte denkt an rechtzeitige Buchung.</p>
                        </div>
                    </div>
                </FadeAnimation>
            </section>
        </main>
    );
};

export default Index;
