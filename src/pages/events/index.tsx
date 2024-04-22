import maiEvent from '../start/assets/in den mai discobowling.jpg';
import heavyMetalBowlingV2 from '../events/assets/heavy_metal_bowling_v2-06831986.jpg';
import ImageSwiper from '../../components/ImageSwiper.tsx';
import FadeAnimation from '../../components/FadeAnimation.tsx';
import { useEffect } from 'react';
import onStartUp from '../../utils/documentHelper.ts';

const Index = () => {
    useEffect(() => {
        onStartUp('Events');
    }, []);
    const eventsList = [maiEvent, heavyMetalBowlingV2];
    return (
        <main className={'flex items-center justify-center'}>
            <FadeAnimation className={'flex items-center justify-center'}>
                <section className={'w-[300px] md:w-[500px]'}>
                    <ImageSwiper list={eventsList} />
                </section>
            </FadeAnimation>
        </main>
    );
};

export default Index;
