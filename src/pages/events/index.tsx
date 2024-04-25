import maiEvent from '../start/assets/in den mai discobowling.jpg';
import heavyMetalBowlingV2 from '../events/assets/heavy_metal_bowling_v2-06831986.jpg';
import ImageSwiper from '../../components/ImageSwiper.tsx';
import FadeAnimation from '../../components/FadeAnimation.tsx';
import { useEffect } from 'react';
import onStartUp from '../../utils/documentHelper.ts';
import { Link } from 'react-router-dom';

const Index = () => {
    useEffect(() => {
        onStartUp('Events');
    }, []);
    const eventsList = [maiEvent, heavyMetalBowlingV2];
    return (
        <main className={'flex items-center justify-center'}>
            <FadeAnimation className={'flex flex-col items-center justify-center lg:flex-row'}>
                <div className={'w-[300px] md:w-[500px]'}>
                    <ImageSwiper list={eventsList} />
                </div>
                <div className={'flex w-full max-w-[500px] flex-col gap-1 text-base md:text-xl'}>
                    <p className={'font-bold text-blue-500'}>Entdeckt die aktuellen Events 2024!</p>
                    <p className={'text-base text-gray-600 lg:text-xl'}>
                        Seid immer auf dem Laufenden und verpasst keine unserer Veranstaltungen dieses Jahr. Folgt uns
                        auf Instagram{' '}
                        <Link
                            to={'https://www.instagram.com/flensburgerbowlingcenter/?hl=de'}
                            className={'text-blue-500'}
                        >
                            instagram/flensburger-bowlingcenter
                        </Link>{' '}
                        und Facebook{' '}
                        <Link to={'https://de-de.facebook.com/FlensburgerBowlingcenter/'} className={'text-blue-500'}>
                            facebook/flensburgerBowlingcenter
                        </Link>{' '}
                        für Updates, exklusive Einblicke und mehr.
                    </p>
                </div>
            </FadeAnimation>
        </main>
    );
};

export default Index;
