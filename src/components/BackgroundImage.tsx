import background from '../assets/background-test.jpg';

const BackgroundImage = () => {
    return (
        <img src={background} alt="BackgroundImage" className={'fixed -z-10 hidden h-full w-full opacity-20 md:flex'} />
    );
};

export default BackgroundImage;
