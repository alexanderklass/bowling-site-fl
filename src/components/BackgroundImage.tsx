import background from '../assets/background.jpg';

const BackgroundImage = () => {
    return <img src={background} alt="BackgroundImage" className={'fixed -z-10 h-full w-full opacity-20'} />;
};

export default BackgroundImage;
